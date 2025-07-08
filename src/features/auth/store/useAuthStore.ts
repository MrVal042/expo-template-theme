// import { Role } from '@utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { securedStore } from '@store'

export enum Role {
  Buyer = 'Buyer',
  Seller = 'Seller',
  Guest = 'Guest',
  Admin = 'Admin',
}
type AuthState = {
  user: UserInfo | null
  accessToken: string | null
  autoLogin: boolean

  login: (payload: { user: UserInfo; token: string }) => void
  logout: () => void
  toggleAutoLogin: () => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      autoLogin: false,
      accessToken: null,

      login: ({ user, token }) =>
        set({
          user: { ...user, displayName: `${user.firstName} ${user.lastName}` },
          accessToken: token,
        }),
      logout: () => set({ user: null, accessToken: null, autoLogin: false }),
      toggleAutoLogin: () => set((state) => ({ autoLogin: !state.autoLogin })),
    }),
    {
      name: 'auth@mrval',
      storage: securedStore,
      partialize: (state) => ({
        user: state.user
          ? {
              id: state.user.id,
              email: state.user.email,
              firstName: state.user.firstName,
              lastName: state.user.lastName,
              role: state.user.role,
              // add other properties that need to be secured
            }
          : null,
        accessToken: state.accessToken,
        autoLogin: state.autoLogin,
      }),
    }
  )
)

export default useAuthStore
