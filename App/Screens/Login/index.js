import React from 'react'
import { View,Text, StyleSheet, KeyboardAvoidingView, Image } from 'react-native'
import CredentialsButton from '../../Components/CredentialsButton'
import CredentialsInput from '../../Components/CredentialsInput'
import { style } from '../../GlobalStyles'
import { Default } from '../../Utils/Default'
import {onChangeEmail,onChangePassword,onLogin} from '../../Redux/Actions/userActions'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
const Login = ({navigation,onChangeEmail,onChangePassword,onLogin,user}) => {




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
        <CredentialsButton onPress={()=>onLogin(user.email,user.password,navigation)} buttonText="Login"/>
        <Spinner 
        visible={user.loading}
        textContent={'Please Wait...'}
        textStyle={{ color: 'white' }}
        />
      </KeyboardAvoidingView>
       
    </View>
  )
}
const mapDispatchToProps ={
  onChangeEmail,onChangePassword,onLogin
}

const mapStateToProps =(state)=> {
  return {
      user :state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)