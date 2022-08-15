import React from 'react';


const ThemeContext = React.createContext({
  currentTheme: 'dark',
  changeThemeHandler: () => { }
})

export default ThemeContext;