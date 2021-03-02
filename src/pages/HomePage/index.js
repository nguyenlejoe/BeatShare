import React from 'react';
import Post from '../../comps/Post';
import NavBar from "../../comps/NavBar";
import "./home.scss";

const Home = () => {
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