import React from "react";
import { obj as statusObj } from "../../data/statusData";
import "../../styles/status.css"
const Status = () => {
    return(
        <div className='statusContainer'>
         {
            statusObj.map(obj=>{
                return<div style={{display:"flex",flexDirection:"column",gap:"10px",borderRadius:"50%",alignItems:"center"}}>
                <img style={{border:"4px solid pink   ", borderRadius:"50%"}} width="50px" height="50px"  src={`${obj.profilepic}`} alt="Profilepic"/>
                <span>{obj.username}</span>
                </div>
            })
         }   
        </div>
    )
}
export default Status