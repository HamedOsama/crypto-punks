import React, { useEffect, useState } from 'react'

import style from './HeaderActions.module.css'
import theme from '../../assets/header/theme-switch.png'
const HeaderActions = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  // useEffect(() => {
  //   document.documentElement.style.setProperty('--main-color', `${currentTheme === 'dark' ? '#fff' : '#000'}`)
  //   document.documentElement.style.setProperty('--sec-color', `${currentTheme === 'dark' ? '#a1a5b0' : '#1d1d1d'}`)
  //   document.documentElement.style.setProperty('--main-background-color', `${currentTheme === 'dark' ? '#000' : '#fff'}`)
  //   document.documentElement.style.setProperty('--sec-background-color', `${currentTheme === 'dark' ? '#1c1c1e' : '#f5f5f5'}`)
  //   document.documentElement.style.setProperty('--input-color', `${currentTheme === 'dark' ? '#eee' : '#1d1d1d'}`)

  // }, [currentTheme]);
  const changeThemeHandler = () => {
    document.lastChild.dataset.theme = `${currentTheme === 'dark' ? 'light' : 'dark'}`
    setCurrentTheme(`${currentTheme === 'dark' ? 'light' : 'dark'}`)
  }
  return (
    <div className={style.HeaderActions} onClick={changeThemeHandler}>
      <div className={style.themeContainer}>
        <img src={theme} alt="Theme"
          className={`${style.theme} ${currentTheme === 'light' ? 'light' : ''} 
        `} />
      </div>
      <button className={style.primaryBtn}>Get In</button>
    </div>
  )
}

export default HeaderActions