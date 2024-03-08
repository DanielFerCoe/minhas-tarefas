import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  label {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  input {
    padding: 1rem;
    margin-bottom: 2rem;

    background: ${props => props.theme['gray-600']};
    border: 2px solid ${props => props.theme['gray-400']};
    color: ${props => props.theme['gray-300']};
    border-radius: 8px;

    &:focus {
      border-color: ${props => props.theme['purple-500']};
      color: ${props => props.theme['gray-100']};
      offset: 2px;
    }
  }
`

export const CheckboxsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-top: 0.5rem;
`

export const Submit = styled.button.attrs({ type: 'submit' })`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  padding: 1rem;
  gap: 0.75rem;

  border-radius: 8px;
  font-weight: 600;
  background: ${props => props.theme['yellow']};
  cursor: pointer;

  transition: 0.6s background;

  &:hover {
    background: ${props => props.theme['blue']};
  }
`