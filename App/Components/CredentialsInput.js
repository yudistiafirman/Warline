import React from 'react'
import { StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper'
import { style } from '../GlobalStyles'
import { Default } from '../Utils/Default'
import Utils from '../Utils/Utils'

const CredentialsInput = (props) => {
    let label = props.label
    let placeholder = props.placeholder
    let keyboardType = props.keyboardType
    let onChangeText = props.onChangeText
    let secureTextEntry = props.secureTextEntry
    let value = props.value
    let styles = props.styles

  return (
    <TextInput
    style={styles}
    mode='outlined'
    label={label}
    value={value}
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


export default CredentialsInput