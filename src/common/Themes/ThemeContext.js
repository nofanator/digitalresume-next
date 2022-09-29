import { createContext } from 'react'
import { getTheme, themes } from './themes'

const defaultTheme = getTheme(themes.dark)
const ThemeContext = createContext(defaultTheme)

export default ThemeContext
