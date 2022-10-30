import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { Alert, I18nManager } from 'react-native'
import { getAppName, getAppPassword, setAppName, setAppPassword } from "../../../App";
import * as RootNavigation from '../../Navigations/RootNavigation';
import { useNetInfo } from '@react-native-community/netinfo'

const BASE_URL = "http://api.findosaurs.com";
const expiredTokenObj = "Token Expired!"
const suspendUserObj = "Unautherise User!"



export const secureAxiosRequest = async (path, method, body) => {
   
    const response = await axios({
        url: `${BASE_URL}/${path}`,
        method,
        ...(body) && { data: body },
        headers: {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',

        }
    });
  
    if (response.data.status_code === 401) {
        Alert.alert(response.data.status_code)

    } else {

        if (typeof response.data !== 'undefined') {
            return response.data;
        } else {
            return response;
        }
    }
}





