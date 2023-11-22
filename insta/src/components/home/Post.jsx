import React from "react";
import "../../styles/post.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {obj as postObject} from "../../data/postData"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
const Post = () => {
    return(
        <div className="postContainer">
         {
            postObject.map(postData=>{
                return<div style={{border:"1px solid gray",padding:"10px 5px 5px",marginBottom:"10px"}} >
                    <div class="postHeader">
                     <img src={`${postData.profilepic}`} width="30px" height="30px" style={{borderRadius:"50%"}} alt=""/>   
                  
                  <li style={{listStyle:"none",display:"flex",gap:"50vh"}}> 
                      <span>{postData.username}</span>
                      <span><MoreHorizOutlinedIcon/></span>
                   </li>
                   </div>

                   <div className="postMain">
                    <img  width="100%" src={`${postData.postpic}`} alt=""/>
                   <span><span><FavoriteBorderOutlinedIcon />{postData.likes}</span> likes</span>
                   <span style={{color:"gray",marginBottom:"20px"}}>{postData.aboutpost}</span>
                   
                   </div>

                   <div>
                    {
                        postData.Comments.map(Comment=>{
                            return<div style={{marginBottom:'12px'}}>
                                <div style={{display:"flex" , gap:"4px",alignItems:"center"}}>
                                <img width="20px" height="20px" style={{borderRadius:"50%"}} src={`${Comment.profilepic }`} alt=""/>
                                <span>{Comment.username}</span>
                                <span>{Comment.Comment}</span>
                                </div>
                                <span style={{color:"grey",fontSize:"6px",marginLeft:"20px",marginTop:'10px'}}>{Comment.likes}likes</span>
                                </div>
                        })
                    }
                   </div>
                   </div>
            })
            } 
        </div>
    )
}
export default Post