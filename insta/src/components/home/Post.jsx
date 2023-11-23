import React from "react";
import "../../styles/post.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {obj as postObject} from "../../data/postData"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
const Post = () => {
    return(
        <div className="postContainer">
         {
            postObject.map(postData=>{
                return<div style={{padding:"10px 5px 5px",marginBottom:"10px"}} >
                    <div class="postHeader">
                     <img src={`${postData.profilepic}`} width="30px" height="30px" style={{borderRadius:"50%"}} alt=""/>   
                  
                  <li style={{listStyle:"none",display:"flex",gap:"50vh"}}> 
                      
                      <div><span>{postData.username}</span>
                      <span style={{color:"gray"}}>{postData.timespamp}</span>
                      </div>
                      <div>
                      <span ><MoreHorizOutlinedIcon/></span>
                      </div>
                   </li>
                   </div>

                   <div className="postMain">
                    <img  width="100%" src={`${postData.postpic}`} style={{borderRadius:'5px'}} alt=""/>
                   
                <div className="postFooter_Icon">
                   <div><FavoriteBorderOutlinedIcon className="postIcon" />
                    <ChatBubbleOutlineIcon className="postIcon"/>
                   <SendOutlinedIcon className="postIcon"/>
                   </div>
                    <div>
                        < BookmarkBorderOutlinedIcon className="postIcon"/>
                    </div>
                </div>   
                    <span style={{color:"lightgray"}}>{postData.likes} people likes this post</span>
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
