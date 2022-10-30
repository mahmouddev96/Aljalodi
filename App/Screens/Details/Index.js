import React, { useState, useEffect,useRef } from "react";
import { Pressable, Keyboard, View, Linking, TouchableHighlight,Text, ImageBackground, Image, Platform, KeyboardAvoidingView, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, TouchableWithoutFeedback, Alert } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from "i18n-js";
import { translate } from "../../i18n";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppImage from "../../../imgs";
import { useDispatch, useSelector } from "react-redux";
import { DetailsAction } from '../../Redux/actions/Details';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import { useNetInfo } from '@react-native-community/netinfo'
import { AppMetrics, colors, fonts, height } from "../../utils";
export const DetailsScreen  = ({ navigation,route }) => {
  const { ItemID } = route?.params;
  const dispatch = useDispatch()
  const Data = useSelector(state => state.DetailsReducer?.data)
    const loading = useSelector(state => state.DetailsReducer?.loading)
  useEffect(() => {
 
    dispatch(DetailsAction(ItemID))


}, [ItemID])
  const Date=(CreatedOn)=>{
let time=CreatedOn?.split('T')[1]
let date=CreatedOn?.split('T')[0]

return(
  <Text>{time?.split(':')[0]}:{time?.split(':')[1]} | {date?.split(':')[0]}</Text>
)
  }


    return (
       <SafeAreaView  style={{ width: '100%', height: '100%', backgroundColor: 'white' }} edges={['top']}>
 {loading &&
        <View style={{
          width: AppMetrics.screenWidth, height: AppMetrics.screenHeight, justifyContent: 'center', backgroundColor: 'rgba(52,52,52,0.5)', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 9
        }}>
          <ActivityIndicator style={{ opacity: 1 }} size="large" color={colors.blue} />
        </View>
      }
      {console.log('Data',Data)}
       {typeof Data !== 'undefined' && Data !== null&& Data.length > 0 &&
<View>
{Data?.map((item) => {
                                return (
        <View>
           <View style={{width:'100%',height:150,}}>
           <TouchableOpacity onPress={()=>navigation.goBack()} style={{position:'absolute',left:10,top:15,zIndex:9,backgroundColor:'#ffffff45',width:30,height:30,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
<MaterialIcons size={25} name="keyboard-arrow-left"color={'black'} />

</TouchableOpacity>
<Image resizeMode='contain' source={{ uri:'http://findosaurs.com/Image/GetByID?ID='+item.ImageID }} style={{width:'100%' ,height:'100%', }} />

           </View>
           
       <View style={{flexDirection:'column',padding:'4%'}}>
       <View style={{backgroundColor: 'orange', alignSelf: 'flex-start',paddingHorizontal:12 }}>
 <Text style={{color: '#ffffff'}}>
 {item.CategoryTextEn}
 </Text>
</View>
<View style={{paddingVertical:'4%' }}>
 <Text style={{color: 'black',fontWeight:'900',fontSize:19}}>
 {item.Title_en}
 </Text>
</View>
<View style={{ }}>
 <Text style={{color: 'gray',fontSize:12}}>

 {Date(item.CreatedOn)}
 </Text>
</View>
<View style={{alignItems: 'center',width:'100%',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-between',width:'50%' }}>
{item.Facebook!=''&&<MaterialIcons size={19} name="facebook"color={'black'} />}
{item.Twitter!=''&&<AntDesign size={19} name="twitter"color={'black'} />}
{item.Instagram!=''&&<AntDesign size={19} name="instagram"color={'black'} />}
{item.Mobile!=''&&<Entypo size={19} name="mobile"color={'black'} onPress={()=>Linking.openURL(`tel:${item.Mobile}`)}/>}
{item.Phone!=''&&<AntDesign size={19} name="phone"color={'black'} onPress={()=>Linking.openURL(`tel:${item.Phone}`)}/>}
</View>
</View>

<View style={{ paddingVertical:'3%'}}>
 <Text style={{color: 'black',fontSize:12}}>
 {item.Info_en}
 </Text>
</View>
       </View>
        </View>
         
      
       ) })}
   
</View>
}
 
       </SafeAreaView>

    );
}
