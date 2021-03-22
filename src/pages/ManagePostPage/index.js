import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import NavBar from "../../comps/NavBar";
import ProfilePost from '../../comps/ProfilePost';
import "../../App.scss";
import {CSSTransition} from 'react-transition-group';

// images
import Back from '../../imgs/back.png';



const ManagePost = () => {
    const params = useParams();
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [postId, setID] = useState('');

    const GetPosts = async() => {
        var resp = await axios.get("/api/myposts")
        setPosts(resp.data.posts)
        console.log(posts);
    }

    const DeletePost = async(postId)=>{
        console.log(postId)
        let resp = await axios.delete(`/api/posts/${postId}`)
        console.log(resp.data);
        GetPosts();
    }

    useEffect(()=>{
        GetPosts();
    },[])

    
    return (
        <div className="Main_Manage">

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
                    setOpen(true)
                    setID(o.id)
                    console.log(postId)
                }}
                // display='inline'
                />
                )}
                
            </div>
            
            <CSSTransition in={open}
        timeout={300}
        classNames="delete"
        unmountOnExit
        onExited={() => setOpen(false)}
        >
            <div className='delete_post'>
                <h2>Delete Post</h2>
                <p>Are you sure?</p>
                
                <div className="delete_options">
                    <p onClick={() => {
                        // DeletePost(postId)
                        setOpen(false)
                        }}>Cancel</p>
                    <p style={{color:'red', marginLeft:'70px'}} onClick={() => {
                        DeletePost(postId)
                        setOpen(false) 
                        // setOpen(!open)
                    }}
                        >Delete</p>
                </div>
            </div>
            </CSSTransition>
            

            <div className="Nav">
                <NavBar select={2}/>
            </div>
           

        </div>

    );
}

export default ManagePost;