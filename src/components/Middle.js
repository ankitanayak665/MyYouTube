import React from 'react'
import ButtonList from './ButtonList'
import { useEffect, useState } from 'react'
import { api } from '../constants'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'

function Middle() {
  const [v,setv]=useState([])
  useEffect(()=>{
    getVideos()

  },[])
  const getVideos =async()=>{
    const data = await fetch(api);
    const json = await data.json();
    setv(json.items)
    // console.log(json.items[0])

  }
  return (
    <div className='grid grid-cols-3 gap-4  m-6 ml-30 p-5 content-normal'>
      {/* <ButtonList /> */}
      {/* <Videocard prop={v[0]}/> */}
      {v.map((i)=><Link to={"/watch?v="+ i.id}><Videocard key={i.id} prop={i}/></Link> )}
    </div>
  )
}

export default Middle
