import styled from 'styled-components'

export const EmptyTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 6rem 1rem;
  gap: 1rem;

  .infoContainer {
    line-height: 1.4;
    font-weight: bold;
    text-align: center;

    p + p {
      font-size: 0.875rem;
      font-weight: 100;
    }
  }
`
