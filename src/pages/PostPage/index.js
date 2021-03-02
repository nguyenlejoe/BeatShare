import React from 'react';
import NavBar from "../../comps/NavBar";
import MakePost from "../../comps/MakePost";

import './post.scss';

// Images
import Back from '../../images/back.png';

const Post = () => {
    return (
        <div className="Main">
            <div className="Back">
                <img src={Back} />
            </div>
            <div className="Post-info">
                <MakePost />
            </div>

            <div className="Nav">
                <NavBar />
            </div>
        </div>
    );
}

export default Post;