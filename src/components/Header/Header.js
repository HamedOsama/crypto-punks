import React from 'react'

import style from './Header.module.css'
import punkLogo from '../../assets/header/cryptopunk-logo.png'
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <img src={punkLogo} alt="Punk" className={style.punkLogo} />
      </div>
    </div>
  )
}

export default Header