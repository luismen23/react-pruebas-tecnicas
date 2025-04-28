import { createSlice } from '@reduxjs/toolkit'

export interface User {
  name: string
  email: string
  initials: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
