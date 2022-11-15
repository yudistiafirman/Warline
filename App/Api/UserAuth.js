import auth from '@react-native-firebase/auth'


export const userAuth=(email,password,onSuccess,onError)=>{
    auth()
    .signInWithEmailAndPassword(email, password)
    .then((response)=>{
        onSuccess(response)
    }).catch((error)=>{
        onError(error)
    })
}