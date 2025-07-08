import { api } from '@services'
import { useAuth } from './store'

type LoginModel = {
  email: string
  password: string
}

export default function useAuthService() {
  const setUser = useAuth((s) => s.login)
  const login = async ({ email, password }: LoginModel) => {
    const res = await api.post('/login', { email, password })
    setUser({ user: res.data.user, token: res.data.user })
  }
  return { login }
}
