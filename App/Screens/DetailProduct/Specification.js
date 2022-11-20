import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { Default } from '../../Utils/Default'
import DetailStyles from './DetailStyles'
import Modal from 'react-native-modal'
import Utils from '../../Utils/Utils'
import Icon from 'react-native-vector-icons/AntDesign'

const Specification = ({visible,onCloseModal,category,sku,weight}) => {

        const spesification = [
            {
                title:"Category",
                value:category ? category : ""
            },
            {
                title:"SKU",
                value:sku ? sku : ""
            },
            {
                title:"Weight",
                value:weight?weight:""
            }
        ]

        const renderSpecificationItem = (item)=>{
            return (
                <View style={{height:Default.deviceWidth/7,borderBottomWidth:1,flexDirection:'row',justifyContent:'center',alignItems:'center',borderBottomColor:Default.secondary}}>
                <View style={{flex:0.5}}>
                    <Text style={DetailStyles.specsText}>{item.title}</Text>
                </View>
                <View style={{flex:0.5}}>
                     <Text style={[DetailStyles.specsText,{color:'#6fa2be'}]}>{item.value}</Text>
                </View>
            </View>
            )
        }
  return (
    <Modal
     isVisible={visible}
     onBackButtonPress={onCloseModal}
     onBackdropPress={onCloseModal}
    useNativeDriver
    deviceHeight={Default.deviceHeight}
    style={{justifyContent:'flex-end',margin:0}}
    >
    <View style={[DetailStyles.centeredView]}>
           <View style={{flex:0.6,borderWidth:1,justifyContent:'center',alignItems:'center',flexDirection:'row',borderBottomColor:Default.secondary}}>
                <Text style={[DetailStyles.specsText]}>Specification</Text>
                <Icon onPress={onCloseModal} name="close" style={{left:Default.deviceWidth/3}} size={Utils.moderateScale(20)}/>
           </View>
        <FlatList
          data={spesification}
          renderItem={({item,index})=>renderSpecificationItem(item)}
          keyExtractor={(item,index)=>index.toString()}
        />
    </View>
    </Modal>
  )
}

export default Specification