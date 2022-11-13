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
const App: () => Node = () => {

  return (
    <NavigationContainer>
       <SafeAreaView style={{flex:1}}>
          <AppRoutes/>
       </SafeAreaView>
    </NavigationContainer>
  
  );
};



export default App;
