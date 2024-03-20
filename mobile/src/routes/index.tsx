import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { RoutesContainer } from './styles'

export function Routes() {
  return (
    <RoutesContainer>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: 'none' },
        }}
      >
        <AppRoutes />
      </NavigationContainer>
    </RoutesContainer>
  )
}
