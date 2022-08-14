import React from 'react'

import style from './PunkCard.module.css'
import nftIMG from '../../assets/punk.jpg'
import currency from '../../assets/weth.png'
const PunkCard = ({ name, id, nftImageSrc, price }) => {
  return (
    <div className={style.card}>
      <div className={style.nftImgContainer}>
        <img src={nftImageSrc} alt="NFT" className={style.nftImg} />
      </div>
      <div className={style.nftData}>
        <h2 className={style.name}>{name}</h2>
        <p className={style.id}>.#{id}</p>
        <div className={style.priceContainer}>
          <div className={style.currencyHolder}>
            <img src={currency} alt="currency" className={style.currency} />
          </div>
          <p className={style.priceValue}>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default PunkCard