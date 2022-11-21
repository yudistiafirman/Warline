import Types from "../type";
import { Alert } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userAuth } from "../../Api/UserAuth";
import crashlytics from '@react-native-firebase/crashlytics'
import * as Sentry from '@sentry/react-native'
export const onChangeEmail = (text)=>({type:Types.CHANGE_EMAIL,payload :text })

export const onChangePassword = (text)=> ({type:Types.CHANGE_PASSWORD,payload:text})

export const onLogin = (email,password,navigation)=> {
    return (dispatch)=>{
        dispatch({
            type : Types.LOADING
        })
        userAuth(email,password,(response)=>{
                dispatch({type:Types.AUTH_SUCSESS,payload:response.user.uid})
                setAttributesToCrashLytics(response.user.uid,response.user.email)
                setAttributesToSentry(response.user.uid,response.user.email)
                AsyncStorage.setItem('isLogin','true')
                navigation.navigate('Home')
        },(error)=>{
            dispatch({type:Types.ERROR_LOGIN})
                if(error.code ==='auth/user-not-found')Alert.alert('The email not connected with any accounts')
                if(error.code === 'auth/invalid-email')Alert.alert('The email address badly formatted')
                if(error.code === 'auth/wrong-password')Alert.alert('The password is Invalid')
                console.log(error)
                Sentry.captureMessage(error)
        })

    }
}

const setAttributesToCrashLytics = (userId,email)=>{
    crashlytics().setUserId(userId)
    crashlytics().setAttributes({email:email})
}

const setAttributesToSentry = (userId,email)=>{
    Sentry.setUser({ id: userId, email: email })
}

