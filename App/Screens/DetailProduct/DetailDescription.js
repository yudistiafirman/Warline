import { Text, View } from 'react-native'
import ViewMoreText from 'react-native-view-more-text'
import { Default } from '../../Utils/Default'
import Utils from '../../Utils/Utils'
import DetailStyles from './DetailStyles'

const DetailDescription = ({description}) => {
  return (
    <View style={{backgroundColor:Default.secondary,paddingBottom:Utils.moderateScale(5)}}>
      <Text style={[DetailStyles.specsText,{marginTop:Utils.moderateScale(5),marginBottom:Utils.moderateScale(5)}]}>Description</Text>
      <View>
          <Text style={[DetailStyles.specsText,{color:'#6fa2be'}]}>{description && description}</Text>
      </View>
    </View>
  )
}

export default DetailDescription