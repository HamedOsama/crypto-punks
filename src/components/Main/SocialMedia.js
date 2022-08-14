import React from 'react'

import style from './SocialMedia.module.css'
import instagram from '../../assets/owner/instagram.png'
import twitter from '../../assets/owner/twitter.png'
import more from '../../assets/owner/more.png'
function SocialMedia() {
  return (
    <ul className={style.socialMediaContainer}>
      <li className={style.socialMedia}>
        <a href="#1" className={style.link}>
          <img src={instagram} alt="instagram" />
        </a>
      </li>
      <li className={style.socialMedia}>
        <a href="#1" className={style.link}>
          <img src={twitter} alt="instagram" />
        </a>
      </li>
      <li className={style.socialMedia}>
        <a href="#1" className={style.link}>
          <img src={more} alt="instagram" />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia