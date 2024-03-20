import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { ThemeProvider } from 'styled-components/native'
import { TasksInDayProvider } from './src/contexts/TasksInDayContext'

import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'

import { AppContainer } from './App.styles'
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
      <TasksInDayProvider>
        <AppContainer>
          <Routes />
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
        </AppContainer>
      </TasksInDayProvider>
    </ThemeProvider>
  )
}
