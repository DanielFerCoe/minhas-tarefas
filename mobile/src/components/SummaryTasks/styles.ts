import styled from 'styled-components/native'
import { Text } from '../Text'

export const SummaryTasksContainer = styled.View`
  margin-bottom: 32px;
`
export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`

export const InfosTasks = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 8px;

  font-size: 14px;
  font-weight: bold;
`

export const Label = styled(Text)`
  color: ${(props) => props.theme['purple-500']};
  font-size: 11px;
`

export const Counter = styled(Text)`
  padding: 4px 8px;
  background: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 16px;
  font-size: 9px;
`
