import React from 'react'

import style from './HeaderActions.module.css'
import theme from '../../assets/header/theme-switch.png'
const HeaderActions = () => {
  return (
    <div className={style.HeaderActions}>
      <div className={style.themeContainer}>
        <img src={theme} alt="Theme" className={style.theme} />
      </div>
      <button className={style.primaryBtn}>Get In</button>
    </div>
  )
}

export default HeaderActions