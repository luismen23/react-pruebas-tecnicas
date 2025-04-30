import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'Yazman Rodríguez',
    email: 'yazman@gmail.com',
    initials: 'YR',
    github: 'midudev',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'jd@gmail.com',
    initials: 'JD',
    github: 'luismen23',
  },
  {
    id: '3',
    name: 'Chupapikas',
    email: 'haakon@gmail.com',
    initials: 'HD',
    github: 'andersontr15',
  },
]

export type UserId = string

export interface User {
  name: string
  email: string
  initials: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

// usamos IIFE inmediatly invoked function expression, la funcione se auto llama y se ejecuta al instante
// retornando un valor de inmediato
const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  if (persistedState) {
    return JSON.parse(persistedState).users
  }
  return DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID
      return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    },
  },
})

export default usersSlice.reducer
export const { addNewUser, deleteUserById } = usersSlice.actions
