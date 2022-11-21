import React, { useEffect, useState } from 'react'
import { BackHandler, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { getProductDetail } from '../../Api/ProductAction'
import WarlineActivityIndicator from '../../Components/AcitivityIndicator'
import Types from '../../Redux/type'
import DetailProductImage from './DetailProductImage'
import DetailProductName from './DetailProductName'
import DetailProductPrice from './DetailProductPrice'
import DetailProductSpecs from './DetailProductSpecs'
import DetailDescription from './DetailDescription'
import Specification from './Specification'


const DetailProducts = ({route,navigation,productDetailData}) => {

    const {itemId}=route.params
    const dispatch=useDispatch()
    const {loading,productDetail}=productDetailData
    const [visibleModal,setVisibleModal]=useState(false)

    useEffect(()=>{
        dispatch({
            type:Types.LOADING_PRODUCT_DETAIL
        })
        getProductDetail(itemId,(response)=>{
            dispatch({
                type:Types.LOAD_PRODUCT_DETAIL,
                payload:response
            })
            dispatch({type:Types.FINISH_LOADING_DETAIL})
        })
        return ()=> dispatch({type:Types.EMPTY_PRODUCT_DETAIL})
    },[itemId])

    useEffect(()=>{
      const backAction =  BackHandler.addEventListener('hardwareBackPress',()=>{
        navigation.goBack()
        return true
      })
      return () => backAction.remove()
    },[])

  return (
    <View style={{flex:1,backgroundColor:'white'}} >
        {
            productDetail === null ? (
                <WarlineActivityIndicator/>
            )
            :
            (
            <React.Fragment>
               <DetailProductImage navigation={navigation} image={productDetail.images}/>
               <DetailProductName productName={productDetail.productName}/>
               <DetailProductPrice price={productDetail.price}/>
               <DetailProductSpecs onPressSpecs={()=>setVisibleModal(true)}/>
               <DetailDescription description={productDetail.description}/>
               <Specification visible={visibleModal} category={productDetail.categoryName} sku={productDetail.SKU} weight={productDetail.weight} onCloseModal={()=>setVisibleModal(false)}/>
            </React.Fragment>
             
            )
        }
     
    </View>
  )
}

const mapStateToProps =(state)=>{
    return {
        productDetailData:state.productDetail
    }
}

export default connect(mapStateToProps)(DetailProducts)