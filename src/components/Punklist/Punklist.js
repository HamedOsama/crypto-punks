import React from 'react'
import PunkCard from './PunkCard'
import style from './Punklist.module.css'
const Punklist = props => {
  const changePunkHandler = (e) => {
    const target = e.target.closest('.nftCard')
    props.setSelectedPunk(target.id)
    // console.log(target.id);
  }
  return (
    <div className={style.punkList}>
      {props.punks.map(el => {
        return <PunkCard
          key={el.id}
          id={el.token_id}
          name={el.name}
          nftImageSrc={el.image_original_url}
          selectPunkHandler={changePunkHandler}
          price={el.traits[0].value} />
      })}
    </div>
  )
}

export default Punklist