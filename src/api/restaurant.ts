import api from '@/libs/axios'

export interface IRestaurant {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  description: string
  managerId: string
}

export interface IRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

// const baseRoute = ''

export const restaurantAPI = {
  create: async (body: IRestaurantBody) => api.post('/restaurante', body),
}
