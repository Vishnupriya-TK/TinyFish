import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const loginWithGoogle = () => {
    const mockUser = {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      picture: null,
      profileComplete: true
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return mockUser
  }

  const updateProfile = (profileData) => {
    const updatedUser = { ...user, ...profileData, profileComplete: true }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
