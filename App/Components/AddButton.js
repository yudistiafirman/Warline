import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Default } from '../Utils/Default'
import Utils from '../Utils/Utils'

const AddButton = ({onPress}) => {

   

  return (
    <TouchableOpacity style={styles.buttonContainer}    onPress={onPress}>
        <Icon name='pluscircleo' color={Default.primary} size={50} />
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer : {
        position:'absolute',
        bottom : 50,
        right: 30
    }
})

export default AddButton