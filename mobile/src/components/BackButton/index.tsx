import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'
import { defaultTheme } from '../../styles/themes/default'

export function BackButton() {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <ArrowLeft size={32} color={defaultTheme['gray-100']} />
    </TouchableOpacity>
  )
}
