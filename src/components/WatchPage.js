import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';


function WatchPage() {
    const [searchParams] = useSearchParams();
    const Key = searchParams.get("v")
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());

    },[])
    
  return (
    <div>
        <iframe 
        width="1000"
        height="500"
        src={'https://www.youtube.com/embed/'+ Key}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
      
    </div>
  )
}

export default WatchPage
