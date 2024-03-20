import { LucideArrowLeft, LucideArrowRight, Plus } from 'lucide-react-native'
import styled from 'styled-components/native'

export const ButtonWithIconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  padding: 6px;
  border-radius: 8px;
  background-color: ${(props) => props.theme['purple-500']};
`

export const ArrowLeftIcon = styled(LucideArrowLeft)`
  color: ${(props) => props.theme['gray-100']};
`

export const ArrowRightIcon = styled(LucideArrowRight)`
  color: ${(props) => props.theme['gray-100']};
`

export const PlusIcon = styled(Plus)`
  color: ${(props) => props.theme['gray-100']};
`
