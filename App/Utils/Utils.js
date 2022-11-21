import { Dimensions, Platform } from "react-native"
import { Default } from "./Default"

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const scale = size => width / guidelineBaseWidth * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor
const getPlatformPath = (media)=>{
    return media.uri
  }
const getFileName=(name, path)=> {
    if (name != null) { return name }

    if (Platform.OS === "ios") {
        path = "~" + path.substring(path.indexOf("/Documents"));
    }
    return path.split("/").pop();
}

const formatText=(text,maxlength)=>{
    let result = ''
    if(text.length > maxlength){
        result = text.slice(0,maxlength) + '...'
    }else{
        result = text
    }
    return result
    
}

const formatCurrency=(price)=>{
    let formatted= Number(price).toLocaleString('id-ID',{style:'currency',currency:'IDR'})

     formatted = formatted.slice(0,-3)
  
    const slicedTExt = formatText(formatted,16)
    return slicedTExt
}


const Utils = {
    moderateScale,
    getPlatformPath,
    getFileName,
    formatText,
    formatCurrency
}

export default Utils