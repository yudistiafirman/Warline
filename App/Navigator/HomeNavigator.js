import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import { Text, TouchableOpacity, View } from 'react-native'
import {Default} from '../Utils/Default'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Tab = createBottomTabNavigator()


const HomeScreen =({navigation})=>{

  const onSignOut = () =>{
    auth().signOut().then(()=>{
      console.log('user sign out')
      AsyncStorage.removeItem('isLogin')
      navigation.navigate('Login')
    })
 
  }
    return <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={onSignOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
    </View>
}


const SettingsScreen =()=>{
    return <View>
    <Text>SettingsScreen</Text>
</View>
}

const HomeNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Products') {
          iconName =  'shopping-store';
        } else if (route.name === 'Add Products') {
          iconName = 'shopping-basket-add';
        }

        // You can return any component that you like here!
        return <FontistoIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: Default.primary,
      tabBarInactiveTintColor:'gray',
      headerShown:false
    })}
  >
    <Tab.Screen name="Products" component={HomeScreen} />
    <Tab.Screen name="Add Products" component={SettingsScreen} />
  </Tab.Navigator>
  )
}

export default HomeNavigator