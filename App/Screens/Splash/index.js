import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, version } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { style } from '../../GlobalStyles'

export const Splash = ({navigation}) => {

useEffect(()=>{
   setTimeout(()=>{
      goToNextScreen()
   },2000)
 },[])

 const goToNextScreen = async () => {
   const isLogin = await AsyncStorage.getItem('isLogin')
   if(isLogin){
      navigateToHomePage()
   }else{
      navigateToLoginPage()
   }
 }

 const navigateToHomePage = () => navigation.navigate('Home')
 const navigateToLoginPage = () => navigation.navigate('Login')

 return (
 <View style={style.container}>
    <Image source={require('../../Image/warline_splash.png')} style={{width:200}} resizeMode="contain" />   
 </View>
  )
}
