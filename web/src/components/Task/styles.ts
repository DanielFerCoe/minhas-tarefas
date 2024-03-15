import styled from 'styled-components'

export const TaskContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme['gray-500']};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};
`

export const DeleteButton = styled.button`
  cursor: pointer;
  line-height: 0;
  background: transparent;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;

    svg {
      color: ${(props) => props.theme['gray-700']};

      &:hover {
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }

  svg {
    color: ${(props) => props.theme['gray-300']};

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.danger};
    }
  }
`

export const DialogContainer = styled.div`
  margin-top: 1.284rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    text-align: justify;
    line-height: 1.7;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    gap: 0.5rem;
    padding: 1rem;
    margin-top: 0.5rem;

    background-color: transparent;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.danger};
    color: ${(props) => props.theme.danger};
    font-size: 0.875rem;
    cursor: pointer;
    transition:
      0.6s background,
      0.6s color;

    &:hover {
      background-color: ${(props) => props.theme.danger};
      color: ${(props) => props.theme['gray-100']};
    }
  }
`
