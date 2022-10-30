import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, Image, TouchableHighlight,Text, View, Platform, BackHandler, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomBarNavigation } from '../components/BottomNavigator/BottomBar';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigationState, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SearchScreen } from '../Screens/Search/Index';
import { SettingScreen } from '../Screens/Settings/Index';
import { WishlistScreen } from '../Screens/Wishlistscreen/Index';
import  {HomeScreen}  from '../Screens/home/App'
import { styles } from './BottomNavigator-style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppImage from '../../imgs';
import { AppMetrics, colors } from '../utils';
//import { translate } from "../i18n";

import { useNavigation } from '@react-navigation/native';
StatusBar.setBarStyle('dark-content');
import { useSelector } from "react-redux";

import I18n from 'i18n-js';
import Modal from "react-native-modal";
import { Alert } from 'react-native';
export const BottomNavigator = (props) => {

    const [show, setshow] = useState(true);
    const [screenName, setScreenName] = useState('title1');
    //  const [show, setshow] = useState(true)
    const [hasPlanMangmnet, sethasPlanMangmnet] = useState(false)
    const [islogged, setIslogged] = useState(false);
    const [IsAna, setIsAna] = useState()
    const [showAlertBack, setshowAlertBack] = useState(false);
    const [EnabledAlert, setEnabledAlert] = useState(false);


    const BASEnavigation = useNavigation();
    const userBundleData = useSelector(state => state?.userBundle?.data)

    const state = useNavigationState(state => state);
    const route = useRoute();
    let selectedtabb = '' + route.params?.selectedtab;
    
    const [selectedtab, setselectedtab] = useState(selectedtabb);

    const backAction = () => {
        AlertToBack();
        return true;
    };
    function AlertToBack() {
        if (route.name === "BottomNavigator") {
            setshowAlertBack(true)
        }


    }
    useEffect(() => {

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, [])

    useEffect(() => {
        if (selectedtabb !== selectedtab) {
            BASEnavigation.reset({
                index: 0,
                routes: [{ name: 'BottomNavigator' }],
            });
        }
        setselectedtab(selectedtabb)

    }, [selectedtabb])


    const home = useCallback(() => <HomeScreen  {...props} updateScroll={setshow} />, [show])
    const _renderIcon = (routeName, selectTab) => {
        let icon = '';
        let title = '';

        switch (routeName) {
            case 'title1':
                {
                    icon = 'home';
                    icon_selected = AppImage.Home_Icon;
                    title = 'home'
                    break;
                }
            case 'title2':
                {
                    icon = 'search';
                    icon_selected = AppImage.Explore;
                    title = 'Search'
                    break;
                }
            case 'title3':
                {
                    icon = 'favorite-border';
                    icon_selected = AppImage.Rewards_Icon;
                    title = 'Favourite'
                    break;
                }
            case 'title4':
                {
                    icon ='settings',
                        icon_selected = AppImage.Profile_Icone;
                    title = 'Setting'
                    break;
                }
        }

        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {routeName === selectTab ?
                      <MaterialIcons name={icon} size={30} color="blue" /> :
                      <MaterialIcons name={icon} size={30} color="gray" />}

                <Text style={{ color: routeName === selectTab ? 'blue' : 'gray', textAlign: 'center', marginTop: 0, fontSize: 13, }}>{title}</Text>
            </View >
        );
    };
    const [DetailsIsvisible, setDetailsIsvisible] = useState(false);
   
    return (

        <View
            style={[styles.container]}
        >   
                 <StatusBar barStyle={"dark-content"} backgroundColor= 'transparent' />

            <BottomBarNavigation.Navigator
                setScreenName={setScreenName}
                height={60}
                circleWidth={0}
                bgColor="white"
                // borderTopLeftRight={true}
                strokeWidth={0}
                initialRouteName={selectedtab === "2" ? "title3" : selectedtab === "1" ? "title2" : "title1"}
                isVisible={show}
                tabBar={({ routeName, selectTab, navigation }) => {
                    return (
                        <TouchableHighlight
                            underlayColor={Platform.OS === 'ios' ? "transparent" : ''}
                            activeOpacity={0.2}
                            onPress={() => {
                               
                                    navigation(routeName)
                                
                            }}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderTopColor:colors.light_grey,borderTopWidth:0.5 }}>
                            {_renderIcon(routeName, selectTab)}
                        </TouchableHighlight>
                    );
                }}>
                <BottomBarNavigation.Screen
                    name="title1"
                    position="left"
                    component={home}
                    onPress={() => { console.log('homePressed') }}
                />
                <BottomBarNavigation.Screen
                    name="title2"
                    component={() => <SearchScreen setScreenName={setScreenName}  updateScroll={setshow} {...props} />}
                    position="left"
                />
                <BottomBarNavigation.Screen
                    name="title3"
                    component={() => <WishlistScreen setScreenName={setScreenName}  updateScroll={setshow} {...props} />}
                    position="right"
                />
                <BottomBarNavigation.Screen
                    name="title4"
                    component={() => <SettingScreen setScreenName={setScreenName}  updateScroll={setshow} {...props} />}
                    position="right"
                />
            </BottomBarNavigation.Navigator>
            
        </View>
    );
};



