import React, { useCallback, useMemo, useState } from 'react'
import { FlatList,StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import AddImage from '../../Components/AddImage'
import ImageWrapper from '../../Components/ImageWrapper'
import { style } from '../../GlobalStyles'
import AddProductImages from './AddProductImages'
import { SelectList } from 'react-native-dropdown-select-list'
import Utils from '../../Utils/Utils'
import { Default } from '../../Utils/Default'
import { TextInput } from 'react-native-paper'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
const AddProducts = () => {
    const [images,setImages]=useState(['dududu'])
    const [selected, setSelectedCategories] = useState("");
    const [productName,setProductName]=useState("")
    const [sku,setSku]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState('')

    const  onChangeProductName=(text)=>{
      if(text.length <=100){
       
        setProductName(text)
      
      }
    
}
    
    const onChangeSku=(text)=>{
      if(text.length <=50){
        setSku(text)
      }
    }

    const onChangeDescription =(text)=>{
      if(text.length <=500){
        setDescription(text)
      }
    }



    const onPublishProduct = ()=>{
      let disabled = !(productName.length || images.length  || sku.length  || price.length  || description.length) 
      console.log(disabled)
    }

    const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  
  return (
    <KeyboardAwareScrollView style={{flex:1,backgroundColor:'white'}}>
        <View style={{marginTop:10,marginLeft:10}}>
          <AddProductImages images={images} />
          <SelectList 
            setSelected={(val) => setSelectedCategories(val)} 
            data={data} 
            maxHeight={Utils.moderateScale(100)}
            save="value"
            placeholder="Categories"
            search={false} 
            boxStyles={styles.dropDownContainer}
            dropdownStyles={{width:Default.deviceWidth/1.3,marginBottom:10}}
            />
           
            <TextInput 
            style={[style.inputBox,styles.productInput]}
            mode='outlined'
            value={productName}
            onChangeText={onChangeProductName}
            label='Product Name'
            outlineColor={Default.secondary}
           />
            <Text style={styles.maximumInput}>{`${productName.length}/100`}</Text>

              <TextInput 
            style={[style.inputBox,styles.productInput]}
            mode='outlined'
            value={sku}
            onChangeText={onChangeSku}
            label='Stock Keeping Unit'
            outlineColor={Default.secondary}
           />
            <Text style={styles.maximumInput}>{`${sku.length}/50`}</Text>

            <TextInput 
            style={[style.inputBox,styles.productInput,{height:Utils.moderateScale(70)}]}
            mode='outlined'
            multiline
            value={description}
            onChangeText={onChangeDescription}
            label='Description'
            outlineColor={Default.secondary}
           />
             <Text style={styles.maximumInput}>{`${description.length}/500`}</Text>
            <TextInput 
            style={[style.inputBox,styles.productInput,{marginBottom:20}]}
            mode='outlined'
            label='Price'
            keyboardType='number-pad'
            outlineColor={Default.secondary}
           />
            
          <TouchableOpacity  onPress={onPublishProduct}  style={styles.publishButton}>
                <Text style={style.buttonText}>Publish</Text>
          </TouchableOpacity>
        
        </View>
    
    </KeyboardAwareScrollView>
  )
}

const styles= StyleSheet.create({
  dropDownContainer:{
    width:Default.deviceWidth/1.06,
    borderColor:Default.secondary,
    marginBottom:10,
    height:Utils.moderateScale(50)
  },
  productInput :{
    width:Default.deviceWidth/1.06,
    height:Utils.moderateScale(50),
 
  },
  publishButton:{
    width:Default.deviceWidth/1.06,
    height:Utils.moderateScale(50),
    backgroundColor:Default.primary,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  maximumInput :{
    textAlign:'right',
    marginRight:10
  }
})


export default AddProducts