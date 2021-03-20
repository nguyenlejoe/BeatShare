import React, { useEffect } from 'react';
import NavBar from "../../comps/NavBar";
import MakePost from "../../comps/MakePost";
import PostBtn from '../../comps/PostBtn';
import axios from 'axios';
import '../../App.scss';
import {Link, useHistory} from 'react-router-dom';

// Images
import Back from '../../imgs/back.png';

const Post = () => {

    const history = useHistory()

    
    // Check browser for token
    const CheckStorage = async()=>{
        var resp = await axios.get("http://localhost:8080/api/authorize")
        console.log(resp.data);
            // If there is a token, send them to the homepage
            if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token"){
                console.log("Good token")
            }else{ // If there is no token or a bad one, send them back to the login page
                history.push("/LoginPage");
                console.log("Bad token")
            }
    
    }


    useEffect(()=>{
        CheckStorage()
    }, [])


    return (
        <div className="Post_Main">
            <div className="Back">
                <Link to='/HomePage'><img src={Back} /></Link>
            </div>
            <div className="Post-info">
                <MakePost />
            </div>
            <div className="Nav">
                <NavBar select={1}/>
            </div>
        </div>
    );
}

export default Post;