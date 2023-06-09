import React from 'react'
import { img,hamburger} from '../constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
    //const img ="https://images.indianexpress.com/2021/06/YouTube-logo.jpg"
    const dispatch = useDispatch();
    const toggleMenuHandler =()=>{
      dispatch(toggleMenu())
    }
  return (
    <div className='flex'>
      < img className="  h-12" alt="hamburger" src={hamburger}  onClick={toggleMenuHandler}/>

      <img className=" pl-1 h-12" alt="logo" src={img} />
      <input className=" mt-3 h-10 rounded-l-full ml-60 w-1/3 border border-gray-400" type='text'></input>
      <button className='h-10 mt-3 rounded-r-full bg-gray-100 border border-grey-400'>search</button>
    </div>
  )
}

export default Header
