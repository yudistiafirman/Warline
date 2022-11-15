import { StyleSheet } from "react-native";
import { Default } from "../Utils/Default";
import Utils from "../Utils/Utils";

export const style= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      inputBox: {
        width: Default.deviceWidth/1.3,
        fontSize: Utils.moderateScale(14),
        color: Default.textColor,
  
      },
      buttonText: {
        fontSize: Utils.moderateScale(15),
        lineHeight: Utils.moderateScale(22),
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center'
      }
})