import styled from 'styled-components/native'

export const AppContainer = styled.View`
  flex: 1;
  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-100']};
`
