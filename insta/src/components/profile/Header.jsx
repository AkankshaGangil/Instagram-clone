import React from "react"
import "../../styles/header.css"
import SavedStatus from "./SavedStatus";
// import SettingsIcon from '@mui/icons-material/Settings';
 
const Header=({myInfo})=>{
    return(
      
         <div style={{display:"flex",flexDirection:"column",marginTop:"10vh",width:"100%"}}>
           
           <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10vh",gap:"10vh"}}>
            <img style={{ height:"25vh",width:"25vh",borderRadius:"50%" ,objectFit:"cover"        }}  src={`${myInfo.profilepic}`} alt=""/>
            <div>
            <div style={{height:"80px",gap:"20px",display:"flex",alignItems:"center"}}>
                <span style={{fontSize:'20px'}}>{myInfo.username}</span>
                <span className="buttons"> Edit Profile</span>
                <span className="buttons">View Archieve</span>
                {/* <span><FontAwesomeIcon icon="fa-solid fa-gear" /></span> */}
           </div>
           <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
              <span>{myInfo.post} posts</span>
              <span>{myInfo.followers} Followers</span>
              <span>{myInfo.following} Following</span>
           </div>
           <div style={{marginTop:"20px",marginLeft:"20px"}}>
               {myInfo.name}
           </div>
           <p style={{marginLeft:"20px"}}>
            {myInfo.Bio}
           </p>

           </div>
         </div>
        <SavedStatus savedStatus={myInfo.savedStatus}/>
       </div>
    )
}

export default Header