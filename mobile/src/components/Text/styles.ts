import styled from 'styled-components/native'

interface TextContainerProps {
  bold?: boolean
}

export const TextContainer = styled.Text<TextContainerProps>`
  font-family: ${(props) => (props.bold ? 'InterBold' : 'InterRegular')};
  color: ${(props) => props.theme['gray-100']};
`
