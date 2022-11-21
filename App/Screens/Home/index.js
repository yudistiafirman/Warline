import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View,Text,TouchableOpacity, FlatList, Alert, BackHandler } from 'react-native';
import AddButton from '../../Components/AddButton';
import { style } from '../../GlobalStyles';
import Header from './Header';
import ListProduct from './ListProduct';
import { Default } from '../../Utils/Default';
import { getAllProducts, getImageUrl } from '../../Api/ProductAction';
import { useCallback, useEffect, useRef, useState } from 'react';
import WarlineActivityIndicator from '../../Components/AcitivityIndicator';
import Utils from '../../Utils/Utils';
import * as Sentry from "@sentry/react-native";
const HomeScreen =({navigation})=>{

  const [lastDocument, setLastDocument] = useState();
  const [productData, setProductData] = useState([])
  const [loading,setLoading]=useState(false)
  const [refreshing,setRefreshing]=useState(false)
  const [search,setSearch]=useState('')
  const searchRef = useRef()



  useEffect(()=>{
    getAllProductsData()
  },[])
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const getAllProductsData =()=>{
    setLoading(true)
    getAllProducts(search,lastDocument,(response)=>{
      if(response.docs.length > 0){
        setLastDocument(response.docs[response.docs.length-1])
        createProductsData(response.docs)
      }
   
    },(error)=>{
      console.log(error)
    })
  }

  const createProductsData = (response)=>{
    let tempData = []
    response.forEach((v,i)=>{
       tempData.push(v._data)
    })
    if(productData.length > 0 ){
      const join = productData.concat(tempData)
      setProductData(join)
      setLoading(false)
      setRefreshing(false)
    }else{
      setProductData(tempData)
      setLoading(false)
      setRefreshing(false)
    }
  }

  const handleRefresh =useCallback(()=>{
    setRefreshing(true)
    searchRef.current.clear()
    getAllProducts(search,undefined,(response=>{
      if(response.docs.length > 0){
       
        setLastDocument(response.docs[response.docs.length-1])
        const dataAfterRefreshed = response.docs.map((v,i)=> v._data)
        setProductData(dataAfterRefreshed)
        setRefreshing(false)
      }
    }),(err)=>{
      console.log(err)
    })
  },[refreshing])

  const handleOnEndList=()=>{
    getAllProducts(search,lastDocument,(response=>{
      if(response.docs.length > 0){
        setLastDocument(response.docs[response.docs.length-1])
        createProductsData(response.docs)
      }
    }),(err)=>{
      console.log(err)
    })
  }

  const onSearch =(text)=>{
    getAllProducts(text,undefined,(response)=>{
      if(response.docs.length > 0){
        setLastDocument(response.docs[response.docs.length-1])
        const dataAfterRefreshed = response.docs.map((v,i)=> v._data)
        setProductData(dataAfterRefreshed)
     
      }
    })

  }
    const onSignOut = () =>{
      auth().signOut().then(()=>{
        console.log('user sign out')
        AsyncStorage.removeItem('isLogin')
        navigation.navigate('Login')
      })
   
    }

    const goToDetailProduct =(id)=>{
      navigation.navigate('DetailProduct',{itemId:id})
    }
      return (
      <View style={{flex:1,backgroundColor:'#DCFFFF'}}>
        <Header onSearch={onSearch} searchRef={searchRef}  onSignOut={onSignOut}/>
        {
          loading ? 
          (
            <WarlineActivityIndicator/>
          ):(
      
           <FlatList  
            data={productData} 
            refreshing={refreshing} 
            onRefresh={handleRefresh}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{height: Utils.moderateScale(5)}} />}
            onEndReached={handleOnEndList}
            keyExtractor={(item)=>item.id}
            contentContainerStyle={{alignItems:'center'}}
            renderItem={({item,index})=><ListProduct onPress={goToDetailProduct} idx={index} item={item}/>} 
            />
        
           
          )
        }
       
        <AddButton onPress={()=>navigation.navigate('AddProducts')} />
      </View>
      )
  }

export default HomeScreen
  