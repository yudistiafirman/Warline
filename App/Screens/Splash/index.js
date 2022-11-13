import React, { useEffect, version } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { style } from '../../GlobalStyles'

export const Splash = ({navigation}) => {

useEffect(()=>{
    goToNextScreen()
 },[])

const goToNextScreen =()=>{
   setTimeout(()=>{
        navigation.navigate('Login')
    },2000)
 }

 return (
 <View style={style.container}>
    <Image source={require('../../Image/warline_splash.png')} style={{width:200}} resizeMode="contain" />   
 </View>
  )
}
