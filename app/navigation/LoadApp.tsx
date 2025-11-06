// LoadApp.tsx
import { useTheme } from '@constants'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'
import Toaster from './Toaster'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useAuth } from '@features'

type IPros = {
  onReady?: () => void
  linking?: LinkingOptions<ReactNavigation.RootParamList>
}

export default function LoadApp({ onReady, linking }: IPros) {
  const { user } = useAuth()
  const isAuthenticated = !!user
  const { isDarkMode, rBackground, colors } = useTheme()

  const statusBarBackground = useAnimatedStyle(() => ({
    backgroundColor: rBackground.backgroundColor,
    height: 0,
  }))

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={colors} linking={linking} onReady={onReady}>
        <SafeAreaProvider>
          <Animated.View style={statusBarBackground} />
          <StatusBar
            style={isDarkMode ? 'light' : 'dark'}
            animated={true}
            translucent
          />
          {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
          <Toaster />
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
