import React, { useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Post from '../../comps/Post';
import NavBar from "../../comps/NavBar";
import "../../App.scss";


const Home = () => {
    const history = useHistory;
    
    const CheckStorage = async()=>{
        var token = await sessionStorage.getItem("token");
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            var resp = await axios.get("http://localhost:8080/verify")
                console.log("verification", resp.data);
                if(resp.data ==='expired'){
                   
                    // setShow(false)
                    
                    history.push("/StartPage");
                } else {
                    // GetData();
                }
        }
    }

    useEffect(()=>{
        CheckStorage()
    },[])

    return (
        <div className="Home">
            <h1>BeatShare</h1>
            <Post></Post>
            <div className="Nav">
                <NavBar />
            </div>
      </div>

    );
}

export default Home;