import { Dimensions } from "react-native"
import { Default } from "./Default"

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const scale = size => width / guidelineBaseWidth * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

const Utils = {
    moderateScale,
}

export default Utils