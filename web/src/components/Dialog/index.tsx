import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Close, Content, Overlay, Title } from './styles'

interface DialogComponentProps {
  title: string
  children: React.ReactNode
}

export function DialogComponent({ title, children }: DialogComponentProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} aria-label="Fechar" />
        </Close>

        <Title>{title}</Title>

        {children}
      </Content>
    </Dialog.Portal>
  )
}
