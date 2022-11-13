import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Default } from '../Utils/Default'
import Utils from '../Utils/Utils'
const CredentialsButton = (props) => {
    let onPress= props.onPress
    let buttonText=props.buttonText
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: Default.deviceWidth/1.4,
        borderRadius: 3,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor:Default.primary,
        height: Utils.moderateScale(43)
      },
      buttonText: {
        fontSize: Utils.moderateScale(15),
        lineHeight: Utils.moderateScale(22),
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center'
      }
})

export default CredentialsButton