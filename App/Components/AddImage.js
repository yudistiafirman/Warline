import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Default } from '../Utils/Default'
import Utils from '../Utils/Utils'
const AddImage = ({onAddImage}) => {
    
  return (
    <TouchableOpacity onPress={onAddImage} style={style.addImageBtnContainer}>
        <Icon name='pluscircleo' color="white" size={Utils.moderateScale(50)}/>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    addImageBtnContainer:{
        width:Utils.moderateScale(100),
        height:Utils.moderateScale(80),
        backgroundColor:Default.secondary,
        borderRadius:10,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default AddImage