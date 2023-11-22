import React from "react";
import "../../styles/sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const SideBar = () => {
    return(
        <div className="sidebarcontainer">
            <ul>
                <li><img width="130px"   src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" alt=""/></li>
                
                <li><span > <HomeOutlinedIcon/></span>Home</li>
                <li><span><SearchIcon/></span>Search</li>
                <li><span><ExploreOutlinedIcon/></span>Explore</li>
                <li><span><VideoLibraryOutlinedIcon/></span>Reels</li>
                <li><span><ChatOutlinedIcon /></span>Messages</li>
                <li><span><FavoriteBorderIcon/></span>Notification</li>
                <li><span><AddCircleOutlineIcon/></span>Create</li>
                <li><span></span>Profile</li>
            </ul>
        </div>
    )
}
export default SideBar