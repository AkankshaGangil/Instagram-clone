import React from "react";
import "../../styles/sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import StorageIcon from '@mui/icons-material/Storage';

const SideBar = () => {
    return(
   <div className="sidebarcontainer">
            <ul>
                <li><img width="130px"   src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" alt=""/></li>
                
                <button className="side_button"><HomeOutlinedIcon/><span > Home</span></button>
                <button className="side_button"><SearchIcon/><span>Search</span></button>
                <button className="side_button"><ExploreOutlinedIcon/><span>Explore</span></button>
                <button className="side_button"><VideoLibraryOutlinedIcon/><span>Reels</span></button>
                <button className="side_button"><ChatOutlinedIcon /><span>Messages</span></button>
                <button className="side_button"><FavoriteBorderIcon/><span>Notification</span></button>
                <button className="side_button"><AddCircleOutlineIcon/><span>Create</span></button>
                <button className="side_button" style={{position:"fixed", bottom:"3px"}}><StorageIcon/><span>More</span></button>
            </ul>
        </div>
    )
}
export default SideBar
