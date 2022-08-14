import React from 'react'
import PunkCard from './PunkCard'

const Punklist = props => {
  return (
    <div>
      {props.punks.map(el => {
        return <PunkCard id={el.token_id} name={el.name} nftImageSrc={el.image_url} price={el.traits[0].value} />
      })}
    </div>
  )
}

export default Punklist