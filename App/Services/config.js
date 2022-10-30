import { Platform } from "react-native";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from "@react-native-async-storage/async-storage";

let googleconfig = {
    //scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '463464854012-0uqmdavsjkhu4oijoiql9o85nqd2gjbe.apps.googleusercontent.com',
    androidClientId: '463464854012-0jftqo72jq6n53atisp5atqlh6ivarkk.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '463464854012-p7j4ooj2ina1rksvublvpe47j67a2olu.apps.googleusercontent.com',
}

const PATH = "path";
const USERINFO = "UserInfo"
const USERID = "UserId"

export const ASYNC_SET_PATH = (val) => AsyncStorage.setItem(PATH, val)
export const ASYNC_GET_PATH = () => AsyncStorage.getItem(PATH);

export const ASYNC_SET_USERINFO = (val) => AsyncStorage.setItem(USERINFO, val)
export const ASYNC_GET_USERINFO = async () => {
    let info = await AsyncStorage.getItem(USERINFO);
    return JSON.parse(info);
}



export const googleConfig = GoogleSignin.configure(googleconfig)

export const youtubeApiKey = Platform.OS === 'ios' ? "AIzaSyBAqBHMnWf2NsiT5EKqNWC79F-x1WdhZsQ" : "AIzaSyC-LGPPBccsGG72FWbqmzbqglgDn4eQRXo";