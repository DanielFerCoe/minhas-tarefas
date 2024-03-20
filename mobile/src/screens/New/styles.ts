import styled from 'styled-components/native'
import { Text } from '../../components/Text'

export const NewContainer = styled.View`
  padding: 32px 8px;
  flex: 1;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Title = styled(Text).attrs({ bold: true })`
  font-size: 24px;
  line-height: 36px;
`

export const Label = styled(Text).attrs({ bold: true })`
  margin-top: 24px;
  margin-bottom: 8px;
  flex: 1;
  line-height: 24px;
`

export const TextInput = styled.TextInput`
  height: 48px;
  padding-left: 16px;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  border: 2px solid ${(props) => props.theme['gray-500']};
  border-radius: 8px;
`

export const CheckboxsContainer = styled.TouchableOpacity`
  gap: 8px;
`

export const SubmitButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 48px;
  margin-top: 24px;

  background-color: ${(props) => props.theme['purple-500']};
  border-radius: 8px;
`
