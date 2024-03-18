import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'
import { Home } from './src/screens/Home'
import { AppContainer } from './App.styles'
import { ThemeProvider } from 'styled-components/native'
import { defaultTheme } from './src/styles/themes/default'

export default function App() {
  const [fontLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  })

  if (!fontLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Home />
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </AppContainer>
    </ThemeProvider>
  )
}
