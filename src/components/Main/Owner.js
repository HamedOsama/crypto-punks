import React from 'react'

import style from './Owner.module.css'
const Owner = props => {
  return (
    <div className={style.ownerContainer}>
      <div className={style.profilePhotoContainer}>
        <img src="https://storage.googleapis.com/opensea-static/opensea-profile/8.png" alt="" className={style.profilePhoto} />
      </div>
      <div className={style.data}>
        <h4 className={style.accountNumber}>0x0071e0801938c1c7b2dd3fed3ff6f044d3f648e0</h4>
        <p className={style.username}>@hamed</p>
      </div>
    </div>
  )
}

export default Owner