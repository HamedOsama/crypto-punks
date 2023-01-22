import React, { useState, useContext } from 'react'

import style from './SocialMedia.module.css'
import instagram from '../../assets/owner/instagram.png'
import github from '../../assets/owner/github-copy.png'
import more from '../../assets/owner/more.png'
import ThemeContext from '../../store/theme-context'
function SocialMedia() {
  // const [currentTheme, setCurrentTheme] = useState(document.lastChild.dataset.theme);
  // setCurrentTheme(document.lastChild.dataset.theme);
  const themeCtx = useContext(ThemeContext)
  const iconClass = themeCtx.currentTheme === 'light' ? 'light' : '';
  return (
    <ul className={style.socialMediaContainer}>
      <li className={style.socialMedia}>
        <a href="https://www.instagram.com/hamed_prvv/" rel='noreferrer' target={'_blank'} className={style.link}>
          <img className={iconClass} src={instagram} alt="Instagram" />
        </a>
      </li>
      <li className={style.socialMedia}>
        <a href="https://github.com/HamedOsama" rel='noreferrer' target={'_blank'} className={style.link}>
          <img className={iconClass} src={github} alt="Github" />
        </a>
      </li>
      <li className={style.socialMedia}>
        {/* <a href="##" className={style.link}> */}
        <div className={style.link}>
          <img className={iconClass} src={more} alt="More" />
        </div>
        {/* </a> */}
      </li>
    </ul>
  )
}

export default SocialMedia