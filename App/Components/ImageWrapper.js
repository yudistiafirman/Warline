import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import Utils from '../Utils/Utils'
import Icon from 'react-native-vector-icons/AntDesign'
import { Default } from '../Utils/Default'

const ImageWrapper = ({src,onRemoveImage}) => {
  return (
    <ImageBackground style={style.imageContainer} resizeMode="cover" source={{ uri: src }}>
        <TouchableOpacity style={style.closeCircle} onPress={onRemoveImage}>
            <Icon name='closecircleo' size={Utils.moderateScale(20)} color='white'/>
        </TouchableOpacity>
    </ImageBackground>
  )
}

const style=StyleSheet.create({
    imageContainer:{
        width:Utils.moderateScale(100),
        height:Utils.moderateScale(80),
        borderRadius:10,
        borderWidth:1,
        marginRight:10,
        borderColor:'gray',
        overflow:'hidden'
    },
    closeCircle:{
        width:Utils.moderateScale(20),
        height:Utils.moderateScale(20),
        borderRadius:Utils.moderateScale(20),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Default.secondary,
        position:'absolute',
        right:5,
        top:5
    }

})

export default ImageWrapper