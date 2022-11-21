/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './App/Navigator';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './App/Redux/Reducers'
import thunk from 'redux-thunk'
import * as Sentry from "@sentry/react-native"
import initSentry from './Sentry';

const store = createStore(rootReducers, applyMiddleware(thunk))

const App: () => Node = () => {
  initSentry()
  return (
    <Provider store={store}>
     <NavigationContainer>
       <SafeAreaView style={{flex:1}}>
          <AppRoutes/>
       </SafeAreaView>
      </NavigationContainer>
    </Provider>
 
  
  );
};



export default Sentry.wrap(App) ;
