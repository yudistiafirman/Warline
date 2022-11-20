import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Default } from '../../Utils/Default'
import Utils from '../../Utils/Utils'
import Icon from 'react-native-vector-icons/AntDesign'
import DetailStyles from './DetailStyles'

const DetailProductSpecs = ({onPressSpecs}) => {
  return (
    <View style={[DetailStyles.specsContainer]}>
        <View style={{flex:0.5,alignItems:'flex-start'}}>
            <Text style={[DetailStyles.specsText]}>Specification</Text>
        </View>
        <View style={{flex:0.5}}>
            <TouchableOpacity onPress={onPressSpecs} style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={[DetailStyles.specsText]}>Categories, Sku, Weight</Text>
                <Icon name="right" size={Utils.moderateScale(20)} color="#111f27" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DetailProductSpecs