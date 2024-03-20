import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { Text } from '../Text'

export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const Checkedbox = styled(Animated.View)`
  height: 28px;
  width: 28px;
  border-radius: 8px;
`

export const CheckedBox = styled(Checkedbox)`
  align-items: center;
  justify-content: center;

  border: 2px solid ${(props) => props.theme['purple-600']};
  background-color: ${(props) => props.theme['purple-500']};
`

export const UncheckedBox = styled(Checkedbox)`
  border: 2px solid ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['gray-500']};
`

interface TaskTitleProps {
  lineThrough?: boolean
  checked?: boolean
}

export const TaskTitle = styled(Text)<TaskTitleProps>`
  line-height: 24px;
  margin-left: 12px;
  text-decoration: ${(props) => (props.lineThrough ? 'line-through' : 'none')};
  color: ${(props) =>
    props.checked ? props.theme['gray-300'] : props.theme['gray-100']};
`
