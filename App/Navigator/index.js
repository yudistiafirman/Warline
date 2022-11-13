import React from 'react'
import { Splash } from '../Screens/Splash'
import Login from '../Screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './HomeNavigator'

const Stack = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen   name="Splash" component={Splash}/>
        <Stack.Screen   name="Login" component={Login}/>
        <Stack.Screen name = "Home" component={Home}/>
    </Stack.Navigator>
  )
}

export default AppRoutes