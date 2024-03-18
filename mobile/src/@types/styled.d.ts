import 'styled-components/native'
import { defaultTheme } from '../styles/themes/default'

declare module 'styled-components/native' {
  type ThemeType = typeof defaultTheme
  export interface DefaultTheme extends ThemeType {}
}
