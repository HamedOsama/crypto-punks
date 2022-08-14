import React from 'react'

import style from './SocialMedia.module.css'
import instagram from '../../assets/owner/instagram.png'
import github from '../../assets/owner/github.png'
import more from '../../assets/owner/more.png'
function SocialMedia() {
  return (
    <ul className={style.socialMediaContainer}>
      <li className={style.socialMedia}>
        <a href="https://www.instagram.com/hamed_prvv/" rel='noreferrer' target={'_blank'} className={style.link}>
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li className={style.socialMedia}>
        <a href="https://github.com/HamedOsama" rel='noreferrer' target={'_blank'} className={style.link}>
          <img src={github} alt="Github" className={style.invert} />
        </a>
      </li>
      <li className={style.socialMedia}>
        {/* <a href="##" className={style.link}> */}
        <div className={style.link}>
          <img src={more} alt="More" />
        </div>
        {/* </a> */}
      </li>
    </ul>
  )
}

export default SocialMedia