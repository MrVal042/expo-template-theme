import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type stateKey = 'isNewUser' | 'isRegistered' | 'isDarkMode'
type ToasterVariant = 'info' | 'warning' | 'error' | 'success'

type IToaster = {
  message: string
  title?: string
  type: ToasterVariant
}

type AppState = {
  isRegistered: boolean
  isNewUser: boolean
  isDarkMode: boolean
  toaster: IToaster | null
  toggleState: (key: stateKey) => void
  setToast: (key: IToaster | null) => void
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      toaster: null,
      isNewUser: false,
      isDarkMode: false,
      isRegistered: false,

      setToast: (key) => set(() => ({ toaster: key })),
      toggleState: (key) => set((state) => ({ [key]: !state[key] })),
    }),
    {
      name: 'app@mrval',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isNewUser: state.isNewUser,
        isDarkMode: state.isDarkMode,
        isRegistered: state.isRegistered,
      }),
    }
  )
)

export default useStore
