import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View,Text,TouchableOpacity } from 'react-native';
import AddButton from '../../Components/AddButton';
import { style } from '../../GlobalStyles';

const HomeScreen =({navigation})=>{

    const onSignOut = () =>{
      auth().signOut().then(()=>{
        console.log('user sign out')
        AsyncStorage.removeItem('isLogin')
        navigation.navigate('Login')
      })
   
    }
      return <View style={{flex:1}}>
          <Text>HomeScreen</Text>
          <TouchableOpacity onPress={onSignOut}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
          <AddButton onPress={()=>navigation.navigate('AddProducts')} />
      </View>
  }

export default HomeScreen
  