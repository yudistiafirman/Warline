import React from 'react'
import { ImageBackground,TouchableOpacity } from 'react-native'
import { Default } from '../../Utils/Default'
import Utils from '../../Utils/Utils'
import Icon from 'react-native-vector-icons/AntDesign'
import DetailStyles from './DetailStyles'

const DetailProductImage = ({image,navigation}) => {
  return (
 <ImageBackground style={DetailStyles.imageContainer} resizeMode="contain" source={{uri:image&&image}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
         <Icon name="arrowleft" color={Default.primary} size={Utils.moderateScale(30)}/>
    </TouchableOpacity>
</ImageBackground>
  )
}

export default DetailProductImage