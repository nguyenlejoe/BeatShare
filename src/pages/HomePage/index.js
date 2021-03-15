import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';
import Post from '../../comps/Post';
import NavBar from "../../comps/NavBar";
import "../../App.scss";



const Home = () => {
    const history = useHistory();
    const params = useParams();
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
        setPosts(resp.data.posts)
        console.log(posts);
    }

    // const GetUser = async () => {
    //     let resp = await axios.get(`http://localhost:8080/api/user/${params.id}`)
    //     setUser(resp.data[0])
    //     console.log(resp);
    // }

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
                <NavBar select={0}/>
            </div>
      </div>

    );
}

export default Home;