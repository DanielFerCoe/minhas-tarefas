import styled from 'styled-components'

export const TaskContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
 
  background: ${props => props.theme['gray-500']};
  border-radius: 8px;
  border: 1px solid ${props => props.theme['gray-400']};
`