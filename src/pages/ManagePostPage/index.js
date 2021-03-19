import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from "../../comps/NavBar";
import ProfilePost from '../../comps/ProfilePost';
import "../../App.scss";

// images
import Back from '../../images/back.png';



const ManagePost = () => {
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('main');
    const [posts, setPosts] = useState([]);

    const GetPosts = async() => {
        var resp = await axios.get("http://localhost:8080/api/myposts")
        setPosts(resp.data.posts)
        console.log(posts);
    }

    useEffect(()=>{
        GetPosts();
    },[])

    
    return (
        <div className="Main">

            <div className="Back">
                <Link to='/AccountPage'><img src={Back} /></Link>
            </div>

            <div className='manage_posts'>
                <ProfilePost display='flex' posts={posts} onClick={() => setOpen(!open)}/>
            </div>

            
            {open ? (
            <div className='delete_post'>
                <h2>Delete Post</h2>
                <p>Are you sure?</p>
                <div className="delete_options">
                    <p onClick={() => setOpen(!open)}>Cancel</p>
                    <p style={{color:'red', marginLeft:'70px'}}>Delete</p>
                </div>
            </div>
            ) : null }   

            <div className="Nav">
                <NavBar select={2}/>
            </div>
           

        </div>

    );
}

export default ManagePost;