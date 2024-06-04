import { atom } from 'recoil'
import { Movie } from '../../typing'
import { User } from '../../typing'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie  | null>({
  key: 'movieState',
  default: null,
})

export const userState = atom<User|null>({
  key: 'userState',
  default: {
    email: "",
    suscribed: false,
  },
})