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
export const searchState = atom({
  key: 'searchState',
  default: false,

})
export const searchResult = atom<Movie[]|null>({
  key: 'searchResult',
  default: null,

})

export const userState = atom<User|null>({
  key: 'userState',
  default: {
    email: "",
    suscribed: false,
  },
})
