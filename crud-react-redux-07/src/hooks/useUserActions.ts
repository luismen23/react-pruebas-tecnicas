import { addNewUser, deleteUserById, UserId } from '@/store/users/slice'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const handleAddUser = ({ name, email, github, initials }) => {
    dispatch(addNewUser({ name, email, github, initials }))
  }

  const handleDeleteUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { handleDeleteUser, handleAddUser }
}
