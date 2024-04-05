import api from '@/libs/axios'

import { IRestaurant } from './restaurant'

interface IProfile {
  id: string
  name: string
  email: string
  phone: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

// const baseRoute = ''

export const meAPI = {
  findMe: async () => (await api.get<IProfile>('/profile')).data,
  findMeRestaurant: async () =>
    (await api.get<IRestaurant>('/managed-restaurant')).data,
}
