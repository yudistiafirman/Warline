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
    <View>
      <View style={{flexDirection:'row'}}>
      <AddImage onAddImage={onAddImage}/>
       <FlatList
        horizontal
        data={images}
        renderItem={({item,index})=> <ImageWrapper onRemoveImage={()=>onRemoveImage(index)} src={Utils.getPlatformPath(item).value}/>}
        />
   </View>
   <Text style={{color:Default.textColor,fontWeight:'500',marginVertical:20}}>Add maximum 5 photos</Text>
  </View>
  )
}

export default AddProductImages