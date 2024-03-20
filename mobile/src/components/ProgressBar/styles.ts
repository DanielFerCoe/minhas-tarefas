import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const ProgressBarContainer = styled.View`
  width: 100%;
  height: 8px;
  border-radius: 12px;
  background-color: ${(props) => props.theme['gray-500']};
`

export const Progress = styled(Animated.View)`
  height: 8px;
  border-radius: 12px;
  background-color: ${(props) => props.theme['purple-600']};
`
