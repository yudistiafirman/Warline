import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { style } from '../GlobalStyles'
import { Default } from '../Utils/Default'
import Utils from '../Utils/Utils'
const CredentialsButton = (props) => {
    let onPress= props.onPress
    let buttonText=props.buttonText
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={style.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: Default.deviceWidth/1.3,
        borderRadius: 3,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor:Default.primary,
        height: Utils.moderateScale(43)
      }
})

export default CredentialsButton