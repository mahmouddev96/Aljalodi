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
export const WishlistScreen  = ({ navigation }) => {

    
    return (
       <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
       
          <Text style={{textAlign:'center',color:'black'}}>Favourite !!</Text>
      
       </View>

    );
}
