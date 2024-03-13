import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 12.5rem;
  background-image: ${(props) =>
    css`
      linear-gradient(
        to right, 
        ${props.theme['purple-900']}, 
        ${props.theme['purple-700']})
    `};

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    max-width: 46rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 3rem;
    font-weight: bold;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  .date {
    font-size: 1.5rem;
  }
`
