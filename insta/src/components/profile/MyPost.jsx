import React from "react"


const MyPost = ({post}) => {
    return (
      <div> 
        <div style={{paddingTop:"2vh",paddingBottom:"2vh",borderTop:"1px solid grey",marginTop:"5vh",textTransform:"uppercase",display:"flex",justifyContent:"center",gap:"5vh"}}>
            <span>Posts</span>
            <span>Reels</span>
            <span>Tagged</span>
        </div> 
        <div style={{cursor:"pointer",width:"60vh",display:"grid",gridTemplateColumns:"auto auto auto",columnGap:"1vh",rowGap:"1vh"}}>
         {
         post.map((ele)=>{
           return <img src={`${ele.postImages[0]}`} alt="" style={{width:"300px",height:"300px",objectFit:"cover"}}/>
         })}
        </div>
     </div>  
    )
}

export default MyPost