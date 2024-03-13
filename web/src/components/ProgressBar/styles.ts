import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  height: 0.75rem;
  width: 100%;
  margin-top: 1rem;

  border-radius: 0.75rem;
  background-color: ${(props) => props.theme['gray-500']};

  transition: 1s all;

  .progress {
    height: 0.75rem;
    margin-top: 1rem;

    border-radius: 0.75rem;
    background-color: ${(props) => props.theme['purple-600']};
    transition: 1s all;
  }
`
