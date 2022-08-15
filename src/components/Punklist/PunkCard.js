import React from 'react'

import style from './PunkCard.module.css'
import currency from '../../assets/weth.png'
const PunkCard = ({ name, id, nftImageSrc, price, selectPunkHandler }) => {
  return (
    <div className={`${style.card} nftCard`} onClick={selectPunkHandler} id={id}>
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