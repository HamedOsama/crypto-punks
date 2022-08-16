import React, { useEffect, useState } from 'react'
import Typist from 'react-typist';

import style from './Main.module.css'
import Owner from './Owner'
import SocialMedia from './SocialMedia'
const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[selectedPunk])
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [selectedPunk, punkListData]);
  console.log(activePunk.id)
  return (
    <div className={style.main}>
      <div className={style.nftContainer}>
        <img src={activePunk.image_original_url} alt="" className={style.nft} />
      </div>
      <div className={style.currentData}>
        <div className={style.header}>
          <Typist key={activePunk.id} cursor={{ show: false }}>
            <h1>
              {activePunk.name} <span className={style.id}>.#{activePunk.token_id}</span>
            </h1>
          </Typist >
        </div>
        <div className={style.ownerData}>
          <Owner ownerAccount={activePunk.owner.address} ownerProfilePhoto={activePunk.owner.profile_img_url} />
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Main