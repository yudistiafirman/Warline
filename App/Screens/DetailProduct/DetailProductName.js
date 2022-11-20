import React from 'react'
import { Text, View } from 'react-native'

const DetailProductName = ({productName}) => {
  return (
<View style={{justifyContent:'center'}}>
    <Text style={{margin:5,fontSize:20,fontWeight:'500'}}>{productName && productName}</Text>
</View>
  )
}

export default DetailProductName