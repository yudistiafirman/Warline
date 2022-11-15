import React from 'react'
import { FlatList, Text, View } from 'react-native'
import AddImage from '../../Components/AddImage'
import ImageWrapper from '../../Components/ImageWrapper'
import { Default } from '../../Utils/Default'
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
        renderItem={({item,index})=> <ImageWrapper onRemoveImage={onRemoveImage} src={item}/>}
        />
   </View>
   <Text style={{color:Default.textColor,fontWeight:'500',marginVertical:20}}>Add maximum 5 photos</Text>
  </View>
  )
}

export default AddProductImages