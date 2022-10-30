import React, { useState, useEffect } from "react";
import { Pressable, Keyboard, View, TouchableHighlight,Text, ImageBackground, Image, Platform, KeyboardAvoidingView, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';

import { Checkbox, TextInput } from 'react-native-paper';

import i18n from "i18n-js";
import { translate } from "../../i18n";
import AntDesign from 'react-native-vector-icons/AntDesign';



import AppImage from "../../../imgs";

import { useDispatch, useSelector } from "react-redux";
import Modal from "react-native-modal";
import Toast from 'react-native-toast-message';
import { AppMetrics, colors, fonts, height } from "../../utils";
import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from "i18n-js";
import { useNetInfo } from '@react-native-community/netinfo'
export const SettingScreen  = ({ navigation }) => {

    
    return (
       <View style={{flex:1,alignItems:'center',paddingTop:20}}>
         <View style={{height:'20%',width:'90%', backgroundColor:'white',flexDirection:'column',padding:20, borderRadius: 10,
                shadowColor: Platform.OS === 'ios' ? '#56555596' : 'black',
                shadowOffset: {
                    width: 2,
                    height: 3
                },
                shadowRadius: 5,
                shadowOpacity: 1,
                elevation: 6,}}>
          <Text>Language </Text>
         </View>
       </View>

    );
}
