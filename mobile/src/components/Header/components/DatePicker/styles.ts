import styled from 'styled-components/native'
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react-native'

export const DatePickerContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 16px;
`

export const Picker = styled.TouchableOpacity`
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
