import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Sidebar() {
  const appItems =useSelector((store)=>store.app.isMenuOpen)
  if(!appItems) return null;
  return (
    <div className='w-1/3 divide-y text-left'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li className='pb-1'>Subscription</li>
      </ul>
      <ul className='pt-1'>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch</li>
        <li className='pb-1'>Liked Videos</li>
        </ul>
        <ul className='pt-1'>
            <li>Subscriptions</li>
            <li>AJ Star</li>
        </ul>
    </div>
  )
}

export default Sidebar
