import React from 'react'
import { View,Text, StyleSheet, KeyboardAvoidingView, Image } from 'react-native'
import CredentialsButton from '../../Components/CredentialsButton'
import CredentialsInput from '../../Components/CredentialsInput'
import { style } from '../../GlobalStyles'
import { Default } from '../../Utils/Default'

const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <KeyboardAvoidingView behavior='padding'>
  
        <Image source={require('../../Image/warline_logo.png')} style={{width:300,height:200}} resizeMode="contain"/>
        <CredentialsInput
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
        />
        <CredentialsInput
        label="Password"
        placeholder="Password"
        secureTextEntry
        />
        <CredentialsButton onPress={()=> navigation.navigate('Home')} buttonText="Login"/>
      
      </KeyboardAvoidingView>
       
    </View>
  )
}


export default Login