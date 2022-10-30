import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useState } from 'react';
import Theme from '../utils/theme';
import { AppRoutes } from './types/NavigationTypes';
import  {DetailsScreen}  from '../Screens/Details/Index'
import { ExploreScreen } from '../Screens/Search/Index';
import { ProfileScreen } from '../Screens/Settings/Index';
import { RewardsScreen } from '../Screens/Wishlistscreen/Index';
import { navigationRef } from './RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomNavigator } from './BottomNavigator'
const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={Theme} ref={navigationRef}>
        <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"BottomNavigator"}>
        <AppStack.Screen name="BottomNavigator" component={BottomNavigator} options={{ swipeEnabled: false, gestureEnabled: false, selectedtab: 2 }} />
        <AppStack.Group screenOptions={{ presentation: 'modal' }}>
        <AppStack.Screen name="DetailsScreen" component={DetailsScreen} />
        </AppStack.Group>
                </AppStack.Navigator >
      </NavigationContainer >



    </SafeAreaProvider >


  );
};

export default AppNavigator;