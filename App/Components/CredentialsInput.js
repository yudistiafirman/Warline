import React from 'react'
import { StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper'
import { Default } from '../Utils/Default'
import Utils from '../Utils/Utils'

const CredentialsInput = (props) => {
    let label = props.label
    let placeholder = props.placeholder
    let keyboardType = props.keyboardType
    let onChangeText = props.onChangeText
    let secureTextEntry = props.secureTextEntry

  return (
    <TextInput
    style={styles.inputBox}
    mode='outlined'
    label={label}
    placeholder={placeholder}
    placeholderTextColor='#B9BBC2'
    underlineColor='rgba(0,0,0,0)'
    selectionColor={Default.primary}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    onChangeText={onChangeText}
    />
 
  )
}

const styles = StyleSheet.create({
    inputBox: {
        width: Default.deviceWidth/1.4,
        fontSize: Utils.moderateScale(14),
        color: '#333',
        marginBottom:20,
    
      }
})

export default CredentialsInput