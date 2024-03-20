import { TouchableOpacityProps } from 'react-native'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ButtonWithIconContainer,
  PlusIcon,
} from './styles'

interface ButtonWithIconProps extends TouchableOpacityProps {
  icon?: 'arrow-right' | 'arrow-left' | 'plus'
}

export function ButtonWithIcon({
  icon: iconProps = 'plus',
  ...rest
}: ButtonWithIconProps) {
  const icon = {
    'arrow-right': <ArrowRightIcon size={16} />,
    'arrow-left': <ArrowLeftIcon size={16} />,
    plus: <PlusIcon size={16} />,
  }

  return (
    <ButtonWithIconContainer {...rest} activeOpacity={0.7}>
      {icon[iconProps]}
    </ButtonWithIconContainer>
  )
}
