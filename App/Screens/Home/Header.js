import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { Default } from '../../Utils/Default'
import Utils from '../../Utils/Utils'

const Header = ({onSearch,searchValue,onSignOut,searchRef}) => {
  return (
        <View style={styles.headerContainer}>
            <Searchbar
            placeholder='Search'
            onChangeText={onSearch}
            value={searchValue}
            ref={searchRef}
            style={styles.searchBar}
            />
            <TouchableOpacity onPress={onSignOut} style={styles.signOutBtn}>
                    <Text style={{color:'#C28A60',fontWeight:'bold'}}>Sign Out</Text>
            </TouchableOpacity> 
        </View>
  )
}

const styles=StyleSheet.create({
    headerContainer:{
        backgroundColor:Default.primary,
        height:Utils.moderateScale(60),
        alignItems:'center',
        flexDirection:'row'
    },
    searchBar:{
        width:Utils.moderateScale(Default.deviceWidth/1.5),
        height:Utils.moderateScale(40),
        marginLeft:Utils.moderateScale(10),
        marginRight:Utils.moderateScale(20)
    },
    signOutBtn:{
        backgroundColor:Default.secondary,
        width:Utils.moderateScale(70),
        height:Utils.moderateScale(40),
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Header