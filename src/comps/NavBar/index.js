import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

// Images
import HomeBtn from "../../images/home.png";
import PostBtn from "../../images/post.png";
import ProfileBtn from "../../images/profile.png";

const NavCont = styled.div`
width:100%;
height:79px;
background-color:#282828;
display:flex;
justify-content:center;
align-items:center;
`;

const Tab = styled.div`
margin-left:35px;
margin-right:35px;
color:white;
display:flex;
flex-direction:column;
align-items:center;
`;

const NavLink = styled(Link)`
`;

const Icon = styled.img`
height:25px;
width:22.7px;
`;

const NavBar = () => {
    return (
        <NavCont>
            <NavLink to="/">
                <Tab>
                    <Icon src={HomeBtn} />
                    Home
                </Tab>
            </NavLink>
            
            <NavLink to="/PostPage">
                <Tab>
                    <Icon src={PostBtn} />                    
                    Post
                </Tab>
            </NavLink>

            <NavLink to="/AccountPage">
                <Tab>
                    <Icon src={ProfileBtn} />                     
                    Profile
                </Tab>
            </NavLink>
        </NavCont>
    );
}

export default NavBar;