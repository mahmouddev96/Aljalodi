import React, {useState, useEffect} from 'react';
import {
  Pressable,
  Keyboard,
  View,
  TouchableHighlight,
  Text,
  Animated,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Checkbox, TextInput} from 'react-native-paper';
import i18n from 'i18n-js';
import FastImage from 'react-native-fast-image';
import {translate} from '../../i18n';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppImage from '../../../imgs';
import {DetailsAction} from '../../Redux/actions/Details';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from 'i18n-js';
import {useNetInfo} from '@react-native-community/netinfo';
import {GetCategoriesAction} from '../../Redux/actions/GetCategories';
import {GetSubCategoryAction} from '../../Redux/actions/GetSubCategory';
import {SearchAction} from '../../Redux/actions/Search';
import {TabView} from 'react-native-tab-view';
import {AppMetrics} from '../../utils';
import {BlogItem} from '../../components/items/BlogItem';
import axios from 'axios';
import {sizes, colors, fonts} from '../../constants/index';
import {width} from '../../../../Ooredoo Kuwait Mobile-1/app/utils';
import {
  action_add_to_fav,
  action_remove_from_fav,
} from '../../Redux/reducers/favReducer';
export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const Categories_list = useSelector(state => state.CategoriesReducer?.data);
  const list_items = useSelector(state => state.Search?.data);
  //const Search_loading = useSelector(state => state.Search?.loading)
  const [index, setIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);
  const [CategoryID, setCategoryID] = useState(0);
  const [routes, setRoutes] = useState([]);
  const [content, setContent] = useState(null);
  const [selectedTab, setSelectedTab] = useState('0');
  const [loading, setLoading] = useState(false);

  const favItems = useSelector(state => state.fav);

  const favBtnStyle = {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 9,
    backgroundColor: '#ffffff45',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    dispatch(GetCategoriesAction(''));
  }, []);
  useEffect(() => {
    axios
      .get('http://api.findosaurs.com/api/SitesApis/GetAllCategories')
      .then(res => {
        console.log('first', res);
        setRoutes(res.data.Table);
      })
      .then(() => {
        //  setLoading(false);
      });
  }, []);
  useEffect(() => {
    let FirstTap = routes?.find(function (e) {
      //console.log('mahmoud',e?.CategoryID)
      return e?.CategoryID;
    });

    try {
      if (selectedTab == '0' && typeof FirstTap !== 'undefined') {
        setSelectedTab(FirstTap?.CategoryID);
        axios
          .get(
            `http://api.findosaurs.com/api/SitesApis/GetAllItemsFull?Category=${FirstTap?.CategoryID}&SubCategory&SortBy=Azar&PageNo=1&SearchTerm=`,
          )
          .then(res => {
            // console.log(res);
            setContent(res.data.Table);
          })
          .then(() => {
            // setLoading(false);
          });
      }
    } catch (e) {}
  }, [routes]);

  useEffect(() => {
    if (routes.length) {
      setLoading(true);

      axios
        .get(
          `http://api.findosaurs.com/api/SitesApis/GetAllItemsFull?Category=${routes[index].CategoryID}&SubCategory&SortBy=Azar&PageNo=1&SearchTerm=`,
        )
        .then(res => {
          // console.log(res);
          setContent(res.data.Table);
        })
        .then(() => {
          setLoading(false);
        });
    }
  }, [index]);

  // useEffect(() => {
  //   let Param={
  //      Category:CategoryID,
  //      SubCategory:'',
  //      SortBy:'Azar',
  //      PageNo:1,
  //      SearchTerm:''

  //   }
  //     dispatch(SearchAction(Param))

  //http://findosaurs.com/Image/GetByID?ID=24270ea7-0380-46c9-9c31-ffff63e4a1cb
  const renderTabBar = props => {
    const ourRoutes = props.navigationState.routes;

    const inputRange = ourRoutes?.map((x, i) => i);

    return (
      <View>
        <FlatList
          data={ourRoutes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.categoryID}
          contentContainerStyle={styles.tabContainer}
          renderItem={({item, index: idx}) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === idx ? 1 : 0.5,
              ),
            });
            const isActive = idx === index;
            return (
              <View style={styles.tabs}>
                <TouchableOpacity
                  key={idx}
                  onPress={() => {
                    setIndex(idx);
                    setCurrentItem(item);
                  }}
                  style={[styles.tab]}>
                  <View
                    style={[
                      styles.line,
                      {
                        backgroundColor: isActive
                          ? colors.primary
                          : `rgba(0, 0, 0, .2)`,
                      },
                    ]}></View>
                  <Animated.Text style={[styles.tabText, {opacity}]}>
                    {item.Title_en}
                  </Animated.Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  };
  const renderitems = data => {
    const checkIfCurrentItemInFav = item =>
      favItems.items?.find(i => i.ItemID === item.ItemID);
    const addToFav = data => {
      dispatch(action_add_to_fav(data));
    };
    const removeFromFav = data => {
      dispatch(action_remove_from_fav(data));
    };
    if (data) {
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={item => item.ItemID}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DetailsScreen', {ItemID: item.ItemID}),
                    dispatch(DetailsAction(item.ItemID));
                }}
                style={{
                  width: '45%',
                  height: 'auto',
                  flexDirection: 'column',
                  marginHorizontal: 8,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  shadowColor: Platform.OS === 'ios' ? '#56555596' : 'black',
                  shadowOffset: {
                    width: 2,
                    height: 3,
                  },
                  shadowRadius: 5,
                  shadowOpacity: 1,
                  elevation: 6,
                  marginVertical: 7,
                }}>
                <View
                  style={{
                    width: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  {checkIfCurrentItemInFav(item) ? (
                    <TouchableOpacity
                      onPress={() => removeFromFav(item)}
                      style={favBtnStyle}>
                      <AntDesign size={20} name="heart" color="blue" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => addToFav(item)}
                      style={favBtnStyle}>
                      <AntDesign size={20} name="hearto" color="gray" />
                    </TouchableOpacity>
                  )}

                  <Image
                    source={{
                      uri:
                        'http://findosaurs.com/Image/GetByID?ID=' +
                        item.ImageID,
                    }}
                    style={{
                      width: '100%',
                      height: 150,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: 'orange',
                    alignSelf: 'flex-start',
                    paddingHorizontal: 12,
                    marginHorizontal: 10,
                    top: 5,
                  }}>
                  <Text style={{color: '#ffffff'}}>{item.CategoryTextEn}</Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    padding: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 15,
                      fontWeight: '900',
                      color: colors.textWhite,
                    }}>
                    {item.Title_en}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      );
    }
    return <View></View>;
  };

  return (
    <View style={{flex: 1}}>
      {loading && (
        <View
          style={{
            width: AppMetrics.screenWidth,
            height: AppMetrics.screenHeight,
            justifyContent: 'center',
            backgroundColor: 'rgba(52,52,52,0.5)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9,
          }}>
          <ActivityIndicator
            style={{opacity: 1}}
            size="large"
            color={colors.blue}
          />
        </View>
      )}
      <TabView
        navigationState={{index, routes}}
        renderScene={({route}) => {
          return renderitems(content);
        }}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{width: sizes.width}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.light,
    height: 60,
    alignItems: 'center',
    paddingTop: 4,
  },
  tabs: {
    textAlign: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  line: {
    height: 3,
    borderRadius: 4,
    marginBottom: 2,
  },
  tab: {
    marginHorizontal: sizes.padding,
  },
  tabText: {
    ...fonts.h3,
    textTransform: 'capitalize',
    color: colors.gray,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingTop: 2,
  },
  contentContainer: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  itemContainer: {
    maxHeight: 200,
    borderRadius: 10,
  },
  itemImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
