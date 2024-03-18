import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const HeaderContainer = styled.View`
  padding: ${Constants.statusBarHeight}px 8px;
  background: ${(props) => props.theme['purple-900']};
`

export const WeekName = styled.Text`
  color: ${(props) => props.theme['gray-100']};
  font-size: 34px;
  font-family: 'InterBold';
`

export const DateDisplay = styled.Text`
  color: ${(props) => props.theme['gray-100']};
  font-size: 16px;
  font-family: 'InterRegular';
`
