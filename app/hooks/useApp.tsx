import { useTheme } from '@constants'
import { AppRoute, useRootNavigationProp } from '@navigation'
import { useNavigation } from '@react-navigation/native'
import { useAppStore } from '@store'

export default function useApp() {
  const { colors, isDarkMode } = useTheme()
  const appStore = useAppStore()
  const navigation =
    useNavigation<useRootNavigationProp<AppRoute, AppRoute, 'Tabs'>>()

  return {
    ...appStore,
    navigation,
    colors,
    isDarkMode,
  }
}
