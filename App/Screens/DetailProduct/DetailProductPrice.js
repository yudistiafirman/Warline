import React from 'react'
import { Text, View } from 'react-native'
import Utils from '../../Utils/Utils'

const DetailProductPrice = ({price}) => {
  return (
<View style={{justifyContent:'flex-end'}}>
    <Text style={{fontSize:22,margin:5,color:'#BB883E'}}>{Utils.formatCurrency(price && price)}</Text>
</View>
  )
}

export default DetailProductPrice