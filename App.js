import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {configureStore as createStore} from '@reduxjs/toolkit';
import mainReducer from './src/redux/reducers/mainReducer';
import { NativeRouter} from 'react-router-native';
import Index from './Index';
import Navbar from './src/component/Navbar/Navbar'
/* import{NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; */

const reduxStore=createStore({reducer:mainReducer});

export default function App() {
  return (

    <Provider store={reduxStore}>
    <NativeRouter>
      <Index/>
      <Navbar/>
    </NativeRouter>
    </Provider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text:{
     fontSize:30,
     fontWeight: 'bold'
  }
});
