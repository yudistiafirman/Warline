import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'
import * as Sentry from '@sentry/react-native'
export const uploadImageToStorage=(path, name,onSuccess,onError)=> {
    let reference = storage().ref(name);
    let task = reference.putFile(path);
    task.then((response) => {
        onSuccess(response)
    }).catch((e) => {
        Sentry.captureMessage(e)
        onError(e)
    })
}

export const getImageUrl = (fileName,onSuccess,onError)=>{
    let reference = storage().ref(fileName)
    let task = reference.getDownloadURL()
    task.then((response)=>{
        onSuccess(response)
    }).catch((error)=>{
        Sentry.captureMessage(error)
        onError(error)
    })
}

export const getProductsCategory=(onSuccess,onError)=>{
    firestore().collection('category').get().then((response)=>{
        onSuccess(response)
    }).catch((err)=>{
        Sentry.captureMessage(err)
        onError(err)
    })
}


export const postProducts = (body,onSuccess,onError)=>{
    firestore().collection('products').add(body).then((response)=>{
        onSuccess(response)
    }).catch((error)=>{
        Sentry.captureMessage(error)
        onError(error)
    })
}

export const getAllProducts = (searchValue,lastDocument,onSuccess,onError)=>{

  let query =  firestore().collection('products').where('productName',">=",searchValue).orderBy('productName','asc')    
  if(lastDocument !== undefined){
   query = query.startAfter(lastDocument)
  }
  
    query.get().then(response=>{
    onSuccess(response)
  }).catch(error=>{
    Sentry.captureMessage(error)
    onError(error)
  })
}


export const getProductDetail = (id,onSuccess,onError)=>{
    firestore().collection('products').where('id','==',id).get().then((response)=>{
        onSuccess(response.docs[0].data())
    }).catch((err)=>{
        Sentry.captureMessage(err)
        onError(err)
    })
}
