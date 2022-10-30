import React, { useState, useEffect,useRef } from "react";
import { Pressable, Keyboard, View, TextInput, TouchableHighlight,Text, ImageBackground, Image, Platform, KeyboardAvoidingView, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, TouchableWithoutFeedback, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from "i18n-js";
import { translate } from "../../i18n";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppImage from "../../../imgs";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoriesAction } from '../../Redux/actions/GetCategories';
import { GetSubCategoryAction } from '../../Redux/actions/GetSubCategory';
import { SearchAction } from '../../Redux/actions/Search';
import Toast from 'react-native-toast-message';
import { AppMetrics, colors, fonts, height } from "../../utils";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import { useNetInfo } from '@react-native-community/netinfo'
export const SearchScreen  = ({ navigation }) => {
    const dispatch = useDispatch()
    const Categories_list = useSelector(state => state.CategoriesReducer?.data)
    const loading = useSelector(state => state.CategoriesReducer?.loading)
    const SubCategory_list = useSelector(state => state.SubCategory?.data)
    const list_items = useSelector(state => state.Search?.data)
    const Search_loading = useSelector(state => state.Search?.loading)
   
  const searchInput = useRef(null);
  const [searchKey, setSearchKey] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedSort, setselectedSorty] = useState('Azar');
  const [selectedSort_id, setselectedSorty_id] = useState(1);
  const [isVisible, setisVisible] = useState(false);
  const [SortbyIsvisible, setSortbyIsvisible] = useState(false);
  const [CategoriesIsvisible, setCategoriesIsvisible] = useState(false);
  const [SubCategoryIsvisible, setSubCategoryIsvisible] = useState(false);
  const [CategoryID, setCategoryID] = useState(0);
  const [CategoryName, setCategoryName] = useState('All Categories');
  const [SubCategoryID, setSubCategoryID] = useState('');
  const [SubCategoryName, setSubCategoryName] = useState('All SubCategories');
  const [page, setPage] = useState(1);
  const [NewData, setNewData] = useState([]);
  useEffect(() => {
 
        dispatch(GetCategoriesAction(''))


}, [])
useEffect(() => {
 
    dispatch(GetSubCategoryAction(CategoryID))


}, [CategoryID])

   {/**
  
useEffect(() => {
 // console.log(list_items!=''+typeof list_items !== 'undefined'+typeof list_items !== null+list_items.length!=0)
  console.log(list_items.length)
  if (list_items!=''&& typeof list_items !== 'undefined'&& typeof list_items !== null&&list_items.length!=0) { setPage(page + 1) } else { setPage(1) }

}, [list_items])
useEffect(() => {
  if (list_items) {

      if (list_items.length == undefined) {
          setNewData([]);
      } else if (page == 1) {
          setNewData(list_items);
      } else {
          setNewData([]);
          setNewData([...NewData, ...list_items]);
      }

      // console.log('All Search Data =======> ' + JSON.stringify(searchData));
      // console.log('All Search Data Dispatch =======> ' + JSON.stringify(searchResult));
  }
}, [list_items])
console.log('pagenum',page) */}
useEffect(() => {
 let Param={
    Category:CategoryID==0?'':CategoryID,
    SubCategory:SubCategoryID,
    SortBy:selectedSort,
    PageNo:page,
    SearchTerm:searchKey


 }
   dispatch(SearchAction(Param))
  


}, [searchKey,CategoryID,SubCategoryID,selectedSort,])

  const categoriesss = [
    {
        id: 1,
        text: 'Call Drop'
    },
    {
        id: 2,
        text: 'Voice not clear or Drop'
    },
    {
        id: 3,
        text: 'Slow Internet'
    },
    {
        id: 4,
        text: 'Subscriptions'
    },
    {
        id: 5,
        text: 'Device Charges'
    },
    {
        id: 6,
        text: 'Review Bill Details'
    },
];
const Sort = [
  {
      id: 1,
      text: 'Azar'
  },
  {
      id: 2,
      text: 'Azen'
  },
  {
      id: 3,
      text: 'Rate'
  },
  {
      id: 4,
      text: 'Related'
  },
  
];
const [ItemId_, SeItemId] = useState([])
    const [Index_, SetIndex_] = useState('1')
    const [EnabledSwitch, setEnabledSwitch] = useState(list_items);
    const [arr, setarr] = useState([]);
    let selectedAddonsOfferIdsArray = arr;
  
const Add_Items = async (ItemID,Title_ar,Title_en,ImageID,isChecked) => {
  let Fav_items = []
  let list = list_items;
 
  for (let i = 0; i < list.length; i++) {

      if (list[i].ItemID == ItemID) {

          list[i].selected = !list[i].selected;
          if (list[i].selected != true) {
SeItemId(ItemId_.filter((item) => item !== ItemID))

selectedAddonsOfferIdsArray.pop(ItemId_.filter((item) => item !== ItemID))
     }
          else {
        SeItemId(ItemId_.concat(ItemID))
            selectedAddonsOfferIdsArray.push({ "ItemID": ItemID, 'Title_ar': Title_ar,'Title_en':Title_en,'ImageID':ImageID,isChecked })
          }
      }

  }
 
  AsyncStorage.setItem('Fav_list', JSON.stringify(arr));
}
    return (
       <SafeAreaView  style={{ width: '100%', height: '100%', backgroundColor: 'white' }} edges={['top']}>
        {Search_loading &&
        <View style={{
          width: AppMetrics.screenWidth, height: AppMetrics.screenHeight, justifyContent: 'center', backgroundColor: 'rgba(52,52,52,0.5)', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 9
        }}>
          <ActivityIndicator style={{ opacity: 1 }} size="large" color={colors.blue} />
        </View>
      }
         <View style={{height:'19%',width:'100%',  backgroundColor:'white',
                shadowColor: Platform.OS === 'ios' ? '#56555596' : 'black',
                shadowOffset: {
                    width: 2,
                    height: 3
                },
                shadowRadius: 10,
                shadowOpacity: 1,
                elevation: 6,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
          <View style={{ backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:'gray',
        borderWidth:0.5,
        paddingLeft: 10,
        marginHorizontal: 10,
        borderRadius: 15,
        height: 43,
        top: Platform.OS == 'ios' ? 5 : 0,
        marginBottom: 10}}>
           <TouchableOpacity onPress={async () => {
                                                    if (searchKey?.length > 0) {
                                                        Alert.alert(searchKey)
                                                    }

                                                }}>
                                                    <MaterialIcons size={17} name="search"color={'gray'} />
                                                </TouchableOpacity>
         <TextInput
                                                        ref={searchInput}
                                                        style={{ color: 'grey',
                                                        fontSize: 15,
                                                        width: '100%',}}
                                                        placeholder={'Search'}
                                                        value={searchKey}
                                                        returnKeyType={'done'}
                                                        textAlign={"left"}
                                                        placeholderTextColor={'#949494'}
                                                        onSubmitEditing={async () => {
                                                           Alert.alert(searchKey)

                                                        }}
                                                        onChangeText={(val) => {
                                                            setSearchKey(val);
                                                        }}
                                                    />
                                                    </View>
                                                    <View style={{ width: '100%', position: 'relative' }}>
<View style={{width:'100%',
        height: 43,paddingHorizontal:'2%',
        flexDirection:'row' , marginHorizontal: 1,}}>
<View style={{width:'43%',height:'100%'}}>
    <TouchableOpacity onPress={()=> setCategoriesIsvisible(true)} style={{position:'absolute',width:'100%',height:'100%',zIndex:9}}></TouchableOpacity>
<TextInput
    placeholder={CategoryName}
    theme={{ roundness: 10 }}
    numberOfLines={1}
    outlineColor={colors.light_grey}
    underlineColorAndroid={'rgba(0,0,0,0)'}
    underlineColor='transparent'
    placeholderStyle={{left:10}}
    value={selectedCategory}
    style={{ backgroundColor: colors.white,
      borderRadius: 15,
      borderColor:'gray',
      borderWidth:0.5,paddingLeft:10,
      fontSize: 15,}}
    mode='outlined'
    placeholderTextColor={'#949494'}
    returnKeyType={"next"}
    onChangeText={text => { }}
/>
</View>
{CategoryID!=0&&

<View style={{width:'43%',height:'100%',marginLeft:'1.5%'}}>
<TouchableOpacity onPress={()=> setSubCategoryIsvisible(true)} style={{position:'absolute',width:'100%',height:'100%',zIndex:9}}></TouchableOpacity>

<TextInput
    placeholder={SubCategoryName}
  numberOfLines={1}
    theme={{ roundness: 10 }}
    outlineColor={colors.light_grey}
    underlineColorAndroid={'rgba(0,0,0,0)'}
    underlineColor='transparent'
    value={selectedSubCategory}
    style={{ backgroundColor: colors.white,
      borderRadius: 15,
      borderColor:'gray',
      borderWidth:0.5,
      fontSize: 15,paddingLeft:10,}}
    mode='outlined'
    placeholderTextColor={'#949494'}
    returnKeyType={"next"}
    onChangeText={text => { }}
/>
</View>}
<TouchableOpacity 
onPress={()=>{  setSortbyIsvisible(true)}}
style={{width:'15%',marginLeft:'1.5%',height:'100%',justifyContent:'center'}}>
<MaterialIcons size={30} name="sort"color={'gray'} />
</TouchableOpacity>
</View>




</View>
         </View>
         <View style={{width:'100%',height:'67%', paddingHorizontal:10,paddingVertical:10}}>
         <FlatList
            data={list_items}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={item => item.ItemID}
            renderItem={({ item, }) =>  (
              <TouchableOpacity
              onPress={()=>{navigation.navigate('DetailsScreen', { ItemID: item.ItemID });}}
              style={{width:'45%',height:'auto',flexDirection:'column',marginHorizontal:8,borderRadius:10,
              backgroundColor:'white',
              shadowColor: Platform.OS === 'ios' ? '#56555596' : 'black',
              shadowOffset: {
                  width: 2,
                  height: 3
              },
              shadowRadius: 5,
              shadowOpacity: 1,
              elevation: 6,marginVertical:7}}>
                 <View style={{width:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}}>
          <TouchableOpacity onPress={()=>Add_Items(item.ItemID,item.Title_ar,item.Title_en,item.ImageID,isChecked=true)} style={{position:'absolute',right:15,top:15,zIndex:9,backgroundColor:'#ffffff45',width:30,height:30,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <MaterialIcons size={20} name="favorite-border"color={item.selected?'gray':'blue'} />
          </TouchableOpacity>
          <Image  source={{ uri:'http://findosaurs.com/Image/GetByID?ID='+item.ImageID }} style={{width:'100%' ,height:150,borderTopLeftRadius:10,borderTopRightRadius:10 }} />

                 </View>
                 <View style={{width:'100%',padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                  <Text numberOfLines={1} style={{fontSize:15,fontWeight:'900'}}>{item.Title_en}</Text>
                 </View>
              </TouchableOpacity>
          )}
            contentContainerStyle={styles.contentContainer}
          />
      

         </View>
        
         <Modal
                    isVisible={SortbyIsvisible}
                    hasBackdrop={true}
                    style={{ margin: 0 }}
                    animationType={"slide"}
                    onSwipeComplete={() => setSortbyIsvisible(false)}
                    swipeDirection='down'
                    onRequestClose={() => {
                      setSortbyIsvisible(false)
                    }}
                    transparent={true}>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>

                        <View style={{ width: '100%', height: '40%', backgroundColor: 'white', borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
<View style={{height:15,width:'100%',justifyContent: 'center',alignItems:'center'}}>
  <View style={{backgroundColor:'gray',height:2,width:40,borderRadius:20}}></View>
</View>
<View style={{paddingHorizontal:'4%'}}>
<FlatList

showsVerticalScrollIndicator={false}
data={Sort}
horizontal={false}
renderItem={({ item, }) => {
  let isChecked = selectedSort_id == item.id ? 'true' : 'false';
  return (
    <TouchableOpacity
    onPress={()=>{setselectedSorty_id(item.id),setselectedSorty(item.text)}}
    style={{width:'100%',height:30,borderBottomColor:colors.light_grey,borderBottomWidth:1.5,justifyContent: 'center'}}>
        <Text style={{ color: isChecked === 'true'?colors.blue:colors.gray, fontSize: 12 }}>{item.text} </Text>
      {isChecked === 'true'&&
      <View style={{position:'absolute',right:5,height:'100%',width:30,justifyContent:'center'}}>
      <MaterialIcons size={13} name="check"color={colors.blue} />
      </View>}
       
    </TouchableOpacity>
)}}
/>
<TouchableOpacity
    onPress={()=>setSortbyIsvisible(false)} style={{backgroundColor:colors.blue,height:40,width:'100%',marginTop:20,borderRadius:10,justifyContent:'center'}}>
  <Text style={{textAlign:'center',color:'white'}}>Apply</Text>
</TouchableOpacity>
</View>

                           

                        </View>

                    </View>








                </Modal>
                <Modal
                    isVisible={CategoriesIsvisible}
                    hasBackdrop={true}
                    style={{ margin:20 }}
                    animationType={"slide"}
                    onSwipeComplete={() => setCategoriesIsvisible(false)}
                    swipeDirection='down'
                    onBackdropPress={() => {
                        setCategoriesIsvisible(false)
                      }}
                    onRequestClose={() => {
                      setCategoriesIsvisible(false)
                    }}
                    transparent={true}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={{ width: '100%', paddingVertical:15, backgroundColor: 'white', borderRadius: 18,  }}>
<View style={{height:15,width:'100%',justifyContent: 'center',alignItems:'center'}}>
</View>
<View style={{paddingHorizontal:'4%'}}>
<TouchableOpacity
    onPress={()=>{setCategoryID(0),setCategoryName('All Categories'),setSubCategoryName('All SubCategories'),setSubCategoryID(''), setCategoriesIsvisible(false)}}
    style={{width:'100%',height:30,borderBottomColor:colors.light_grey,borderBottomWidth:1.5,justifyContent: 'center'}}>
        <Text style={{ color:CategoryID === 0?colors.blue:colors.gray, fontSize: 12 }}>All </Text>
      {CategoryID === 0&&
      <View style={{position:'absolute',right:5,height:'100%',width:30,justifyContent:'center'}}>
      <MaterialIcons size={13} name="check"color={colors.blue} />
      </View>}
       
    </TouchableOpacity>
<FlatList

showsVerticalScrollIndicator={false}
data={Categories_list}
horizontal={false}
renderItem={({ item, }) => {
  let isChecked = CategoryID == item.CategoryID ? 'true' : 'false';
  return (
    <TouchableOpacity
    onPress={()=>{setCategoryID(item.CategoryID),setCategoryName(item.Title_en),setSubCategoryName('All SubCategories'),setSubCategoryID(''), setCategoriesIsvisible(false)}}
    style={{width:'100%',height:30,borderBottomColor:colors.light_grey,borderBottomWidth:1.5,justifyContent: 'center'}}>
        <Text style={{ color: isChecked === 'true'?colors.blue:colors.gray, fontSize: 12 }}>{item.Title_en} </Text>
      {isChecked === 'true'&&
      <View style={{position:'absolute',right:5,height:'100%',width:30,justifyContent:'center'}}>
      <MaterialIcons size={13} name="check"color={colors.blue} />
      </View>}
       
    </TouchableOpacity>
)}}
/>

</View>

                           

                        </View>

                    </View>








                </Modal>
                
                <Modal
                    isVisible={SubCategoryIsvisible}
                    hasBackdrop={true}
                    style={{ margin:20 }}
                    animationType={"slide"}
                    onSwipeComplete={() => setSubCategoryIsvisible(false)}
                    swipeDirection='down'
                    onBackdropPress={() => {
                        setSubCategoryIsvisible(false)
                      }}
                    onRequestClose={() => {
                      setSubCategoryIsvisible(false)
                    }}
                    transparent={true}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={{ width: '100%', paddingVertical:15, backgroundColor: 'white', borderRadius: 18,  }}>
<View style={{height:15,width:'100%',justifyContent: 'center',alignItems:'center'}}>
</View>
<View style={{paddingHorizontal:'4%'}}>

<FlatList

showsVerticalScrollIndicator={false}
data={SubCategory_list}
horizontal={false}
renderItem={({ item, }) => {
  let isChecked = SubCategoryID == item.SubCategoryID ? 'true' : 'false';
  return (
    <TouchableOpacity
    onPress={()=>{setSubCategoryID(item.SubCategoryID),setSubCategoryName(item.Title_en), setSubCategoryIsvisible(false)}}
    style={{width:'100%',height:30,borderBottomColor:colors.light_grey,borderBottomWidth:1.5,justifyContent: 'center'}}>
        <Text style={{ color: isChecked === 'true'?colors.blue:colors.gray, fontSize: 12 }}>{item.Title_en} </Text>
      {isChecked === 'true'&&
      <View style={{position:'absolute',right:5,height:'100%',width:30,justifyContent:'center'}}>
      <MaterialIcons size={13} name="check"color={colors.blue} />
      </View>}
       
    </TouchableOpacity>
)}}
/>

</View>

                           

                        </View>

                    </View>








                </Modal>
       </SafeAreaView>

    );
}
const styles = StyleSheet.create({


  contentContainer: {
    paddingHorizontal: 0,
    paddingVertical:10,
   
  },
 
});