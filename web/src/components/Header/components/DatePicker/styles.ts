import styled from 'styled-components'

export const DatePickerContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;

    border-radius: 8px;
    background-color: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme['gray-100']};
    transition: 0.6s background;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['purple-700']};
    }
  }
`
