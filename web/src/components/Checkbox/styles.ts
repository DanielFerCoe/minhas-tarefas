import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  button[role='checkbox'] {
    display: flex;
    align-items: center;

    gap: 1rem;
    background-color: transparent;

    .indicator {
      border: 2px solid ${(props) => props.theme['gray-400']};
      border-radius: 0.5rem;
      background: ${(props) => props.theme['gray-500']};

      transition: 0.5s all;

      &:hover {
        border: 2px solid ${(props) => props.theme['gray-400']};
        background: ${(props) => props.theme['gray-600']};
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 1.3rem;
        width: 1.3rem;

        svg {
          color: ${(props) => props.theme['gray-100']} !important;
        }
      }
    }

    .title {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.4;
      color: ${(props) => props.theme['gray-100']};
      text-align: justify;
      transition: 0.5s all;
    }

    &[data-state='checked'] {
      .indicator {
        background-color: ${(props) => props.theme['purple-600']};
        border: 2px solid ${(props) => props.theme['purple-500']};

        &:hover {
          background-color: ${(props) => props.theme['purple-700']};
          border: 2px solid ${(props) => props.theme['purple-600']};
        }
      }

      .emptyIndicator {
        display: none;
      }

      .title {
        color: ${(props) => props.theme['gray-300']};
      }

      .title.lineThrough {
        text-decoration: line-through;
      }
    }
  }
`
