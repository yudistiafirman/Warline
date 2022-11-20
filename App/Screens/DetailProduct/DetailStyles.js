import { StyleSheet } from "react-native"
import { Default } from "../../Utils/Default"
import Utils from "../../Utils/Utils"


const DetailStyles=StyleSheet.create({
    imageContainer : {
        width:Default.deviceWidth,
        height:Default.deviceHeight/2.2,
        backgroundColor:'white'
    },
    specsContainer : {
        height:Utils.moderateScale(40),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:Default.secondary,
        marginBottom:Utils.moderateScale(10)
    },
    specsText:{
        marginLeft:Utils.moderateScale(5),
        fontSize:14,
        fontWeight:'500',
        color:'#111f27'
    },
    centeredView: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height:Utils.moderateScale(300)
      }
})

export default DetailStyles