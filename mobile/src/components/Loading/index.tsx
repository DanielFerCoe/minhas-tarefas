import { View, ActivityIndicator } from 'react-native'
import { defaultTheme } from '../../styles/themes/default'

interface LoadingProps {
  align?: 'center' | 'flex-start' | 'flex-end'
}

export function Loading({ align = 'center' }: LoadingProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: align,
        alignItems: 'center',
        backgroundColor: defaultTheme['gray-600'],
      }}
    >
      <ActivityIndicator color={defaultTheme['purple-500']} />
    </View>
  )
}
