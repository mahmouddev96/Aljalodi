import React, { useEffect, useState } from 'react';
import { SafeAreaView, AppState, View, Text, StyleSheet, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react'
import theme from './App/utils/theme';
import AppNavigator from './App/Navigations/AppNavigator';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { translate } from "./app/i18n";
import { chinHeight, colors, fonts } from './App/utils';
import { useNetInfo } from '@react-native-community/netinfo'
import * as RootNavigation from './App/Navigations/RootNavigation';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { store, persistor } from './App/Redux/store/store';
let userName = "d2FubmE=";
let userpassword = "d2FubmExMjM=";
let startTime = Date.now();
let updatedStartTime = Date.now();
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={theme}>
          <AppNavigator />
          </PaperProvider>
      </PersistGate>
      </ReduxProvider>
  );
};

export default App;


const styles = StyleSheet.create({
  noInternetContent: {
    height: 45 + chinHeight,
    paddingTop: chinHeight,
    paddingHorizontal: '5%',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
  }
})


