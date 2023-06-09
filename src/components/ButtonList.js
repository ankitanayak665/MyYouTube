import React from 'react'
import Button from './Button'

function ButtonList() {
    const list=["All","Music","Kapil Sharma","Dramedy","T-series","Bollywood Music","Trailers","Auditions","India pop music","Dramedy"]
  return (
    <div className='m-3'>
        {
            list.map((i)=>(<Button prop={i}/>))
        }
       
    </div>
  )
}

export default ButtonList
