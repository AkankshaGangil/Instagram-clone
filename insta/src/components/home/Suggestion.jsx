import React from "react";
 import suggestionData from "../../data/suggestion"
 import "../../styles/suggestion.css"
const Suggestion = () => {
    return (
<div style={{width:"15vw", marginTop:"5vh",marginRight:"10vh"}}>
    {
        suggestionData.map(user=>{
           return<div style={{ marginTop:"1vbh",   border:"1px solid white", height:"100px",display:"flex",justifyContent:"space-between",alignItems:"center",margin:"10px"}}>
            <div style={{height:"100px" , display:"flex" , flexDirection:"column",justifyContent:"center",gap:"10px"} }>
            <span>{user.username}</span>
            <img src={`${user.profilepic}`} width="40px" height="40px" style={{borderRadius:"50%"}}alt=""/>
           </div>

           <span className="followLink">Follow</span>
           </div>
        })
    }
</div>

    )
}
export default Suggestion