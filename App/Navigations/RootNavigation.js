import { createNavigationContainerRef } from '@react-navigation/native';
import { Alert } from 'react-native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    // Alert.alert(name)
    navigationRef.navigate(name, params);
  }else{
    Alert.alert('Error')
  }
}