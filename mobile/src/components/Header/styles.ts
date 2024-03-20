import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { Text } from '../Text'
import { ButtonWithIcon } from '../ButtonWithIcon'

export const HeaderContainer = styled.View`
  padding: ${Constants.statusBarHeight}px 8px;
  background: ${(props) => props.theme['purple-900']};
`

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Content = styled.View``

export const WeekName = styled(Text)`
  font-size: 34px;
`

export const DateDisplay = styled(Text)`
  font-size: 16px;
`

export const AddButton = styled(ButtonWithIcon).attrs({ icon: 'plus' })`
  margin-top: 10px;
`
