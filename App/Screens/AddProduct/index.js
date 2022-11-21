import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert, FlatList,Platform,StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import AddImage from '../../Components/AddImage'
import ImageWrapper from '../../Components/ImageWrapper'
import { style } from '../../GlobalStyles'
import AddProductImages from './AddProductImages'
import { SelectList } from 'react-native-dropdown-select-list'
import Utils from '../../Utils/Utils'
import { Default } from '../../Utils/Default'
import { TextInput } from 'react-native-paper'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {launchImageLibrary} from 'react-native-image-picker';
import { utils } from '@react-native-firebase/app'
import { getImageUrl, getProductsCategory, postProducts, uploadImageToStorage } from '../../Api/ProductAction'
import uuid from 'react-native-uuid'
import firestore from '@react-native-firebase/firestore'
import Spinner from 'react-native-loading-spinner-overlay/lib'

const AddProducts = ({navigation}) => {
    const [images,setImages]=useState(null)
    const [selected, setSelectedCategories] = useState('')
    const [productName,setProductName]=useState('')
    const [sku,setSku]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [weight,setWeight]= useState('')
    const [imageUrl,setImageUrl]=useState([])
    const [loading,setLoading]=useState(false)
    const [category,setCategory]=useState([])


    const onChangeProductName=(text)=>{ if(text.length <=100)setProductName(text) }
    
    const onChangeSku=(text)=>{ if(text.length <=50) setSku(text) }

    const onChangeDescription =(text)=>{  if(text.length <=500) setDescription(text)}
    
    const onChangeWeight = (text)=> {if(text.length <= 10)setWeight(text)}

    useEffect(()=>{
      getProductsCategory((response)=>{
     
            const categoryData = response.docs.map((val,index)=> {
              return  {key:index.toString(),value:val.data().category_name,categoryId:val._ref._documentPath._parts[1]}
              
            })
            setCategory(categoryData)
      },(err)=>{
        console.log(err)
      })
    },[])

    const onAddImage = ()=>{
      var options = {
        title: 'Select Image',
        customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Library' },
        ],
        storageOptions: {
            skipBackup: true, // do not backup to iCloud
            path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
        },
        mediaType:'photo',
        selectionLimit:1
       
    };
    launchImageLibrary(options, response => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
          
            setImages(response.assets[0])
        }
      })
    }

    const onRemoveImage=()=>{
        
        setImages(null)
    }
   
    const onPublishProduct =  ()=>{
      try {
        if(!images)  throw(`Product's image cannot be empty`)
        if(selected.length < 1)  throw(`Product's category cannot be empty`)
        if(productName.length < 1) throw(`Product's name cannot be empty`)
        if(sku.length <  1)  throw(`Product's Stock Keeping Unit cannot be empty`)
        if(description.length < 1)  throw(`Product's description cannot be empty`)
        if(price.length <  1) throw(`Product's price cannot be empty`)
        setLoading(true)
        let path = Utils.getPlatformPath(images).value
        let fileName = Utils.getFileName(images.fileName)
        let filterCategory = category.filter((v,i)=>v.value === selected)
        let body ={
          id:uuid.v4(),
          categoryId: filterCategory[0].categoryId,
          categoryName:selected,
          productName: productName,
          SKU:sku,
          description:description,
          price:price,
          images:'',
          weight:weight,
          createdAt:firestore.FieldValue.serverTimestamp()
        }
        uploadImageToStorage(path,fileName,(response)=>{
          getImageUrl(response.metadata.name,(response)=>{
              body.images = response
              postProducts(body,(response)=>{
                setLoading(false)
                Alert.alert('Success', 'New Products successfull added', [
                  { text: 'OK', onPress: () => navigation.goBack() }
                ])
              },(error)=>{
                console.log(error)
                Alert.alert('Failed', 'Something went wrong', [
                  { text: 'OK', onPress: () => navigation.goBack() }
                ])
              })
          },(error)=>{
            console.log(error)
            Alert.alert('get image url failed')
          })
        },(error)=>{
          console.log(error)
          Alert.alert('upload File to Storage Failed')
        })
      } catch (error) {
        Alert.alert(error)
      }
    }

  
  return (
    <KeyboardAwareScrollView style={{flex:1,backgroundColor:'white'}}>
        <View style={{marginVertical:10,marginLeft:10}}>
          <AddProductImages onRemoveImage={onRemoveImage} onAddImage={onAddImage} images={images} />
          <SelectList 
            setSelected={(val) => setSelectedCategories(val)} 
            data={category} 
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
            style={[style.inputBox,styles.productInput]}
            mode='outlined'
            multiline
            value={weight}
            onChangeText={onChangeWeight}
            label='Weight/g'
            keyboardType='number-pad'
            outlineColor={Default.secondary}
           />
             <Text style={styles.maximumInput}>{`${weight.length}/10`}</Text>
            <TextInput 
            style={[style.inputBox,styles.productInput,{marginBottom:20}]}
            mode='outlined'
            value={price}
            onChangeText={(value)=>setPrice(value)}
            label='Price'
            keyboardType='number-pad'
            outlineColor={Default.secondary}
           />
            
          <TouchableOpacity  onPress={onPublishProduct}  style={styles.publishButton}>
                <Text style={style.buttonText}>Publish</Text>
          </TouchableOpacity>
          <Spinner
            visible={loading}
            textContent={'Please Wait...'}
            textStyle={{ color: 'white' }}
          />
        
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