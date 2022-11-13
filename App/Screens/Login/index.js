import React from 'react'
import { View,Text, StyleSheet, KeyboardAvoidingView, Image } from 'react-native'
import CredentialsButton from '../../Components/CredentialsButton'
import CredentialsInput from '../../Components/CredentialsInput'
import { style } from '../../GlobalStyles'
import { Default } from '../../Utils/Default'
import {onChangeEmail,onChangePassword} from '../../Redux/Actions/userActions'
import { connect } from 'react-redux'
const Login = ({navigation,onChangeEmail,onChangePassword,user}) => {

  const onLogin = ()=>{
    console.log('email',user.email)
    console.log('password',user.password)
  }
  return (
    <View style={style.container}>
      <KeyboardAvoidingView behavior='padding'>
  
        <Image source={require('../../Image/warline_logo.png')} style={{width:300,height:200}} resizeMode="contain"/>
        <CredentialsInput
        label="Email"
        value={user.email}
        onChangeText={onChangeEmail}
        placeholder="Email"
        keyboardType="email-address"
        />
        <CredentialsInput
        label="Password"
        value={user.passwrod}
        onChangeText={onChangePassword}
        placeholder="Password"
        secureTextEntry
        />
        <CredentialsButton onPress={onLogin} buttonText="Login"/>
      
      </KeyboardAvoidingView>
       
    </View>
  )
}
const mapDispatchToProps ={
  onChangeEmail,onChangePassword
}

const mapStateToProps =(state)=> {
  return {
      user :state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)