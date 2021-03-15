import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Post from '../../comps/Post';
import NavBar from "../../comps/NavBar";
import "../../App.scss";



const Home = () => {
    const history = useHistory();
    const [posts, setPosts] = useState([])
    
    
    const CheckStorage = async()=>{
        var resp = await axios.get("http://localhost:8080/api/authorize")
        console.log(resp.data);
            if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token"){
                history.push("/HomePage");
                console.log("Good token")
            }else{
                history.push("/LoginPage");
                console.log("Bad token")
            }
    
    }

    const AllPosts = async() => {
        var resp = await axios.get("http://localhost:8080/api/posts")
        setPosts(...[resp.data.posts])
        console.log(posts);
    }

    
    const LikePost = async(postId) => {
        var resp = await axios.post(`http://localhost:8080/api/like/${postId}`)
        console.log(resp.data);
        AllPosts()
    }
    
     
    const unLikePost = async(postId) => {
        var resp = await axios.delete(`http://localhost:8080/api/like/${postId}`)
        console.log(resp.data);
        AllPosts()
    }


    useEffect(()=>{
        CheckStorage()
        AllPosts()
    },[])



    
    return (
        <div className="Home">
            <h1>BeatShare</h1>
            <div className="Content">
                {posts && posts.map((o)=>{
                    return <Post
                    onLike={(liked)=>{
                        if(liked){
                            console.log(liked, "unliked")
                            unLikePost(o.id)
                        }else{
                            console.log(liked, "liked")
                            LikePost(o.id)
                        }
                    }}
                    userProfileImg
                    user_name={o.user_name}
                    song_name={o.song_name}
                    song_artist={o.song_artist}
                    img_url={o.img_url}
                    postId={o.id}
                    description={o.description}
                    number_of_likes={o.number_of_likes}
                    />
                })}
            </div>
            <div className="Nav">
                <NavBar />
            </div>
      </div>

    );
}

export default Home;