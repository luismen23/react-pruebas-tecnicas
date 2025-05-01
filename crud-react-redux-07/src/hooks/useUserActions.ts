import { addNewUser, deleteUserById, UserId, User } from '@/store/users/slice'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const addUser = ({ name, email, github, initials }: User) => {
    dispatch(addNewUser({ name, email, github, initials }))
  }

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { deleteUser, addUser }
}
