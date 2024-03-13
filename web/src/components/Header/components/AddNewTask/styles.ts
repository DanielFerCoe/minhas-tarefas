import styled from 'styled-components'

export const AddNewTaskContainer = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    gap: 0.5rem;
    padding: 1rem;
    margin-top: 0.5rem;

    background-color: ${(props) => props.theme.yellow};
    border-radius: 8px;
    color: ${(props) => props.theme['purple-900']};
    font-size: 0.875rem;
    cursor: pointer;
    transition: 0.6s background;

    &:hover {
      background-color: ${(props) => props.theme.blue};
    }
  }
`
