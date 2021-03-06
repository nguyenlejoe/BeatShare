import React, { useEffect } from 'react';
import NavBar from "../../comps/NavBar";
import MakePost from "../../comps/MakePost";
import PostBtn from '../../comps/PostBtn';
import axios from 'axios';
import '../../App.scss';
import {Link, useHistory} from 'react-router-dom';
import { motion } from 'framer-motion';

// Images
import Back from '../../imgs/back.png';

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

const Post = () => {

    const history = useHistory()

    
    // Check browser for token
    const CheckStorage = async()=>{
        var resp = await axios.get("/api/authorize")
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
        <motion.div  initial='out' animate='in' exit='out' variants={pageTransition}>
           
            <div className="Post-info">
                <MakePost />
            </div>

        </motion.div>
            <div className="Nav">
                <NavBar select={1}/>
            </div>
        </div>
    );
}

export default Post;