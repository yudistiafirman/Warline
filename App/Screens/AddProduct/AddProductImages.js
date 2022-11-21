import React from 'react'
import { FlatList, Platform, Text, View } from 'react-native'
import AddImage from '../../Components/AddImage'
import ImageWrapper from '../../Components/ImageWrapper'
import { Default } from '../../Utils/Default'
import Utils from '../../Utils/Utils'
const AddProductImages = (props) => {
    let onAddImage= props.onAddImage
    let images = props.images
    let onRemoveImage = props.onRemoveImage

  return (
  
    <View style={{flexDirection:'row',marginBottom:20}}>
      <AddImage onAddImage={onAddImage}/>
        {
          images &&  <ImageWrapper onRemoveImage={onRemoveImage} src={Utils.getPlatformPath(images)}/>
        }
     
   </View>
   

  )
}

export default AddProductImages