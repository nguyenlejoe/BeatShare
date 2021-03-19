import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import NavBar from "../../comps/NavBar";
import ProfilePost from '../../comps/ProfilePost';
import "../../App.scss";

// images
import Back from '../../imgs/back.png';



const ManagePost = () => {
    const params = useParams();
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('main');
    const [posts, setPosts] = useState([]);
    const [postId, setID] = useState('');

    const GetPosts = async() => {
        var resp = await axios.get("http://localhost:8080/api/myposts")
        setPosts(resp.data.posts)
        console.log(posts);
    }

    const DeletePost = async(postId)=>{
        console.log(postId)
        let resp = await axios.delete(`http://localhost:8080/api/posts/${postId}`)
        console.log(resp.data);
        GetPosts();
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
                {posts && posts.map(o=>
                <ProfilePost 
                img_url={o.img_url}
                song_artist={o.song_artist}
                song_name={o.song_name}
                onClick={()=>{
                    setOpen(!open)
                    setID(o.id)
                    console.log(postId)
                }}
                display='flex'
                />
                )}
                
            </div>
            
            {open ? (
            <div className='delete_post'>
                <h2>Delete Post</h2>
                <p>Are you sure?</p>
                <div className="delete_options">
                    <p onClick={() => {
                        // DeletePost(postId)
                        setOpen(!open)
                        }}>Cancel</p>
                    <p style={{color:'red', marginLeft:'70px'}} onClick={() => {
                        DeletePost(postId) 
                        setOpen(!open)
                    }}
                        >Delete</p>
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