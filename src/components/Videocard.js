import { useState } from "react";
import { Link } from "react-router-dom";

function Videocard({prop}) {
  // const [snippet,setsnippet]= useState("")
   if (prop){
    let {snippet, statistics}= prop;
    let {channelTitle, title, thumbnails}=snippet;
    console.log(prop,"**")

   }
    return  (
      <div> {prop &&
        <div className=" m-2 "> 
        <img className=" w-full rounded-lg" alt="thumbnail" src={prop?.snippet?.thumbnails?.medium.url}/>
        <ul>
          <li className ="font-bold p-1">{prop?.snippet?.title}</li>
          <li>{prop?.snippet?.channelTitle}</li>
          <li>{prop?.statistics?.viewCount}</li>
        </ul>
      </div>
}
    </div>
    )
  
  
  
  

// if(snippet== null) return
  
  
}

export default Videocard
