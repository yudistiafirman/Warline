import { Dimensions, Platform } from "react-native"
import { Default } from "./Default"

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const scale = size => width / guidelineBaseWidth * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor
const getPlatformPath = ({path, uri})=>{
    return Platform.select({
      android: { "value": path },
      ios: { "value": uri }
  })
  }
const getFileName=(name, path)=> {
    if (name != null) { return name; }

    if (Platform.OS === "ios") {
        path = "~" + path.substring(path.indexOf("/Documents"));
    }
    return path.split("/").pop();
}
const Utils = {
    moderateScale,
    getPlatformPath,
    getFileName
}

export default Utils