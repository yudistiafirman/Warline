import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

export const uploadImageToStorage=(path, name,onSuccess,onError)=> {
    let reference = storage().ref(name);
    let task = reference.putFile(path);
    task.then((response) => {
        onSuccess(response)
    }).catch((e) => {
        onError(e)
    })
}

export const getImageUrl = (fileName,onSuccess,onError)=>{
    let reference = storage().ref(fileName)
    let task = reference.getDownloadURL()
    task.then((response)=>{
        onSuccess(response)
    }).catch((error)=>{
        onError(error)
    })
}

export const getProductsCategory=(onSuccess,onError)=>{
    firestore().collection('category').get().then((response)=>{
        onSuccess(response)
    }).catch((err)=>{
        onError(err)
    })
}


export const postProducts = (body,onSuccess,onError)=>{
    firestore().collection('products').add(body).then((response)=>{
        onSuccess(response)
    }).catch((error)=>{
        onError(error)
    })
}

export const getAllProducts = (searchValue,lastDocument,onSuccess,onError)=>{
    console.log('ini search value',searchValue)
  let query =  firestore().collection('products').orderBy('createdAt','desc').startAt(searchValue)
    
  if(lastDocument !== undefined){
   query = query.startAfter(lastDocument)
  }
  
  query.limit(4).get().then(response=>{
    onSuccess(response)
  }).catch(error=>{
    onError(error)
  })
}

