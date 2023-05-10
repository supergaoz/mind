import type { User } from '../type/user'
export const useUser = () => {
  const cureentUser = useState('userInfo', () => ({
    name: 'gauss',
    family: 'gao',
    middle: 'D',
  }))

  const setUser = (user: User) => {
    cureentUser.value = user
  }

  const getUser = () => {
    return cureentUser.value
  }
  
  return {
    setUser,
    getUser
  }
}