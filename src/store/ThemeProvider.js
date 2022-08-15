import React, { useState } from 'react'

import ThemeContext from './theme-context';

const ThemeProvider = props => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const changeThemeHandler = () => {
    document.lastChild.dataset.theme = `${currentTheme === 'dark' ? 'light' : 'dark'}`
    setCurrentTheme(`${currentTheme === 'dark' ? 'light' : 'dark'}`)
  }
  const themeContext = {
    currentTheme,
    changeThemeHandler
  }
  return <ThemeContext.Provider value={themeContext}>
    {props.children}
  </ThemeContext.Provider>
}

export default ThemeProvider

