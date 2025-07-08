import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoadApp } from '@navigation'

const queryClient = new QueryClient()

SplashScreen.preventAutoHideAsync()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadApp
        onReady={() => SplashScreen.hideAsync()}
        linking={{ enabled: true, prefixes: ['helloworld://'] }}
      />
    </QueryClientProvider>
  )
}
