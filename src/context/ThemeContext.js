import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // custom logic

  return (
    <ThemContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemContext.Provider>
  )
}
