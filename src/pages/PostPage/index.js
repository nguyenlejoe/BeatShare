import React from 'react';
import NavBar from "../../comps/NavBar";
import MakePost from "../../comps/MakePost";
import PostBtn from '../../comps/PostBtn';
import axios from 'axios';
import '../../App.scss';
import {Link, useHistory} from 'react-router-dom';

// Images
import Back from '../../images/back.png';

const Post = () => {

    const history = useHistory()

    // Create posts
    const HandlePost = async(songImg, songName, songArtist, songDesc) => {
        let resp = await axios.post("http://localhost:8080/api/create_post", {
            img_url: songImg,
            song_name:songName,
            song_artist:songArtist,
            description:songDesc
        })
        
        history.push("/HomePage")
        console.log(resp.data)
    }

    return (
        <div className="Post_Main">
            <div className="Back">
                <Link to='/HomePage'><img src={Back} /></Link>
            </div>
            <div className="Post-info">
                <MakePost 
                submitPost={HandlePost}
                />
            </div>
            <div className="Nav">
                <NavBar select={1}/>
            </div>
        </div>
    );
}

export default Post;