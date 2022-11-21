import React, { useEffect } from 'react'
import { View,Text, StyleSheet, KeyboardAvoidingView, Image, Alert, BackHandler } from 'react-native'
import CredentialsButton from '../../Components/CredentialsButton'
import CredentialsInput from '../../Components/CredentialsInput'
import { style } from '../../GlobalStyles'
import { Default } from '../../Utils/Default'
import {onChangeEmail,onChangePassword,onLogin} from '../../Redux/Actions/userActions'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { TextInput } from 'react-native-paper'
const Login = ({navigation,onChangeEmail,onChangePassword,onLogin,user}) => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


  return (
    <View style={style.container}>
      <KeyboardAvoidingView behavior='padding'>
  
        <Image source={require('../../Image/warline_logo.png')} style={{width:300,height:200}} resizeMode="contain"/>
        <TextInput
        style={[style.inputBox,{marginBottom:10}]}
        label="Email"
        mode='outlined'
        value={user.email}
        onChangeText={onChangeEmail}
        placeholder="Email"
        keyboardType="email-address"
        />
        <TextInput
        style={[style.inputBox,{marginBottom:10}]}
        label="Password"
        mode='outlined'
        value={user.password}
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