import React, { createContext, ReactNode, useCallback, useState } from 'react'
import { STORAGE_KEY } from '../const/app-const'
import { UserProps } from '@/entities/user.entities'
import { useRouter } from 'next/router'

const UserContext = createContext<UserConextProps>({} as UserConextProps)

type Props = {
  children: ReactNode
}

interface TokenProps {
  token: string
}

type UserType = Partial<UserProps & TokenProps>

const initUser: UserType = {
  _id: undefined,
  name: undefined,
  facebookId: undefined,
  avatar: undefined,
  gender: undefined,
  yOB: undefined,
  status: undefined,
  deleted: undefined,
  password: undefined,
  role: undefined,
  email: undefined,
  token: undefined
}

export interface UserConextProps {
  user: UserType
  update: (values: UserType) => void
  reset: () => void
  login: (token: string) => void
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<UserType>(initUser)

  const update = useCallback((newValue: UserType) => {
    setUser(newValue)
  }, [])

  const login = useCallback(
    (token: string) => {
      setUser({ ...user, token: token })
      sessionStorage.setItem(STORAGE_KEY.LOCAL_USER, token)
    },
    [user]
  )

  const reset = useCallback(() => {
    setUser(initUser)
    sessionStorage.removeItem(STORAGE_KEY.LOCAL_USER)
    router.push('/')
  }, [])

  return (
    <UserContext.Provider value={{ user, update, reset, login }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
