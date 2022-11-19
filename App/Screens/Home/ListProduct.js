import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Default } from '../../Utils/Default'
import Utils from '../../Utils/Utils'

const ListProduct = ({item}) => {
    
  return (
    <TouchableOpacity style={styles.productContainer}>
        <View style={styles.imageContainer}>
            <Image 
             source={{uri:item.images}} 
             style={styles.image} 
             resizeMode='cover'
             />
        </View>
        <View style={{flex:0.2,justifyContent:'center'}}>
            <Text  style={{margin:5,fontSize:14,fontWeight:'500'}}>{Utils.formatText(item.productName,39)}</Text>
        </View>
        <View style={{flex:0.2,justifyContent:'flex-end'}}>
            <Text style={{fontSize:20,margin:5,color:'#BB883E'}}>{Utils.formatCurrency(item.price)}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  productContainer:{
    backgroundColor:'white',
    width:Utils.moderateScale(Default.deviceWidth/2.2),
    height:Utils.moderateScale(Default.deviceHeight/2.5),
    margin:5
  },
  imageContainer:{
    flex:0.6
  },
  image:{
    flex:1
  }
})

export default ListProduct