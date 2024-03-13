import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
`

export const Content = styled(Dialog.Content)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -15%);

  padding: 2.5rem;
  background: ${(props) => props.theme['gray-500']};
  border-radius: 16px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 28rem;
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background: transparent;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['gray-200']};
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.4rem;
  line-height: 1.25;
  font-weight: 800;
`
