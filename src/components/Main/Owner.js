import React from 'react'

import style from './Owner.module.css'
const Owner = ({ ownerAccount, ownerProfilePhoto }) => {
  return (
    <div className={style.ownerContainer}>
      <div className={style.profilePhotoContainer}>
        <img src={ownerProfilePhoto} alt="" className={style.profilePhoto} />
      </div>
      <div className={style.data}>
        <h4 className={style.accountNumber}>{ownerAccount}</h4>
        <p className={style.username}>@hamed</p>
      </div>
    </div>
  )
}

export default Owner