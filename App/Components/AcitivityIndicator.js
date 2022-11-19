import React from 'react'
import { View,ActivityIndicator } from 'react-native'
import { Default } from '../Utils/Default'

const WarlineActivityIndicator = () => {
  return (
        <View style={{flex:1,justifyContent:'center'}}>
            <ActivityIndicator size="large" color ={Default.primary}/>
        </View>
  )
}

export default WarlineActivityIndicator