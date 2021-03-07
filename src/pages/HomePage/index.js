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
                history.push("/");
                console.log("Good token")
            }else{
                history.push("/LoginPage");
                console.log("Bad token")
            }
    
    }

    const AllPosts = async() => {
        var resp = await axios.get("http://localhost:8080/api/posts")
        setPosts(resp.data.posts)
        console.log(posts);
    }

    useEffect(()=>{
        CheckStorage()
        AllPosts()
    },[])

console.log(posts);
    
    return (
        <div className="Home">
            <h1>BeatShare</h1>
            <Post posts={posts}></Post>
            <div className="Nav">
                <NavBar />
            </div>
      </div>

    );
}

export default Home;