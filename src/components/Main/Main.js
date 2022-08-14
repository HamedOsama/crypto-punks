import React from 'react'

import style from './Main.module.css'
import Owner from './Owner'
import OwnerPhoto from '../../assets/owner/punkhead.png'
import SocialMedia from './SocialMedia'
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.nftContainer}>
        <img src={OwnerPhoto} alt="" className={style.nft} />
      </div>
      <div className={style.currentData}>
        <div className={style.header}>
          <h1>
            Laser Punk <span className={style.id}>.#0</span>
          </h1>
        </div>
        <div className={style.ownerData}>
          <Owner />
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Main