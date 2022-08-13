import React from 'react'

import style from './Header.module.css'
import punkLogo from '../../assets/header/cryptopunk-logo.png'
import searchIcon from '../../assets/header/search.png'
import HeaderItems from './HeaderItems'
import HeaderActions from './HeaderActions'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <img src={punkLogo} alt="Punk" className={style.punkLogo} />
      </div>
      <div className={style.searchBar}>
        <div className={style.searchIconContainer}>
          <img src={searchIcon} alt="search icon" />
        </div>
        <input className={style.searchInput} type="text" placeholder='Collection, item or user...' />
      </div>
      <HeaderItems />
      <HeaderActions />
    </div>
  )
}

export default Header