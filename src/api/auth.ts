import api from '@/libs/axios'

export interface SignInBody {
  email: string
}

// const baseRoute = ''

export const authAPI = {
  signIn: (body: SignInBody) => api.post('/authenticate', body),
}
