import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';
import Post from '../../comps/Post';
import NavBar from "../../comps/NavBar";
import { motion } from 'framer-motion';
import "../../App.scss";


const pageTransition = {
    in:{
        opacity:1,
        y:0
    },
    out:{
        opacity:0,
        y:-100
    }
}

const Home = () => {
    const history = useHistory();
    const params = useParams();
    const [posts, setPosts] = useState([])
    const [myLikes, setLikes] = useState([])
    const [image, setImg] = useState()

    // Check browser for token
    const CheckStorage = async()=>{
        var resp = await axios.get("http://localhost:8080/api/authorize")
        console.log(resp.data);
            // If there is a token, send them to the homepage
            if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token"){
                history.push("/HomePage");
                console.log("Good token")
            }else{ // If there is no token or a bad one, send them back to the login page
                history.push("/LoginPage");
                console.log("Bad token")
            }
    
    }

    // Grab all posts from server
    const AllPosts = async() => {
        const resp = await axios.get("http://localhost:8080/api/posts")
        setPosts(...[resp.data.posts])
    }

    // Grab posts that the user have liked
    const MyLikes = async() => {
        const resp = await axios.post("http://localhost:8080/api/user/likes")
        setLikes(...[resp.data])
    }


    // Like a post
    const LikePost = async(postId) => {
        const resp = await axios.post(`http://localhost:8080/api/like/${postId}`)
        console.log(resp.data);
        AllPosts()
    }
    
    // Unlike a post
    const unLikePost = async(postId) => {
        const resp = await axios.delete(`http://localhost:8080/api/like/${postId}`)
        console.log(resp.data);
        AllPosts()
    }



    useEffect(()=>{
        CheckStorage()
        MyLikes()
        AllPosts()
    },[])

    // useEffect(()=>{
    //     MyLikes()
    // },[myLikes])

    console.log(posts)
    
    return (

        <div className="Home">
            <motion.div  className='Home' initial='out' animate='in' exit='out' variants={pageTransition}>
                <h1>BeatShare</h1>
            
           
 
            <div className="Content">
                {/* Display all posts */}
                {posts && posts.map((o, i)=>{
                    // Set all current posts to unliked
                    let likes = false;
                    // Loop through the users liked posts
                    if (myLikes || myLikes.length > 0) {
                        for(let i=0 ; i < myLikes.length; i++){
                            // If posts match, then set the state of the liked icon to true
                            if(o.id === myLikes[i].post_id){
                                likes = true;
                                break;
                            }
                        }
                    }
                    return <Post key={i}
                    // Click and check liked status and set the state
                    onLike={(liked)=>{
                        if(liked){
                            console.log(liked, "unliked")
                            unLikePost(o.id)
                        }else{
                            console.log(liked, "liked")
                            LikePost(o.id)
                        }
                    }}
                    userId={o.poster_id}
                    userProfileImg
                    user_name={o.user_name}
                    song_name={o.song_name}
                    song_artist={o.song_artist}
                    img_url={o.img_url}
                    postId={o.id}
                    description={o.description}
                    number_of_likes={o.number_of_likes}
                    likeState={likes}
                    img={o.profile_picture}
                    />
                })}
            </div>
            </motion.div>
            <div className="Nav">
                <NavBar select={0}/>
            </div>
      </div>
      

    );
}

export default Home;