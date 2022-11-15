import React from 'react'
import { Splash } from '../Screens/Splash'
import Login from '../Screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/Home'
import AddProducts from '../Screens/AddProduct'


const Stack = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash}/>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen 
        name="AddProducts" 
        options={{title:"Add Product",headerBackTitleVisible:false}} 
        component={AddProducts}  />
     </Stack.Navigator>
  )
}

export default AppRoutes