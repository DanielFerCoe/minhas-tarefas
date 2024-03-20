import { TextProps } from 'react-native'
import { TextContainer } from './styles'

interface Props extends TextProps {
  bold?: boolean
  children: React.ReactNode
}

export function Text({ children, bold, ...rest }: Props) {
  return (
    <TextContainer bold={bold} {...rest}>
      {children}
    </TextContainer>
  )
}
