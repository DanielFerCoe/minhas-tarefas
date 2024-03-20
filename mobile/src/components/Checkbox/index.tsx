import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { ZoomIn, ZoomOut } from 'react-native-reanimated'

import {
  CheckedBox,
  UncheckedBox,
  CheckboxContainer,
  TaskTitle,
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  checked?: boolean
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <CheckboxContainer activeOpacity={0.7} {...rest}>
      {checked ? (
        <CheckedBox entering={ZoomIn} exiting={ZoomOut}>
          <Feather name="check" size={20} />
        </CheckedBox>
      ) : (
        <UncheckedBox />
      )}

      <TaskTitle lineThrough={checked}>{title}</TaskTitle>
    </CheckboxContainer>
  )
}
