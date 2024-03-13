import styled from 'styled-components'

export const SummaryTasksContainer = styled.div`
  margin-top: 2rem;

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`
export const InfosTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-size: 0.875rem;
  font-weight: bold;

  .label {
    color: ${(props) => props.theme['purple-500']};
  }

  .counter {
    padding: 0.25rem 0.5rem;

    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: bold;
  }
`
