import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

// Images
import HomeBtn from "../../images/home.png";
import PostBtn from "../../images/post.png";
import ProfileBtn from "../../images/profile.png";

// Images Selected
import HomeSelect from "../../images/home_selected.png";
import PostSelect from "../../images/post_selected.png";
import ProfileSelect from "../../images/profile_selected.png";

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
display:${props=>props.display ? props.display : "flex"}
`;

const NavBar = ({ display }) => {
    
    const [selected, setSelected] = useState(0);

    return (
        <NavCont>
            <NavLink to="/">
                <Tab>
                    <Icon src={HomeBtn} display={selected === 0 ? "none" : "flex"}/>
                    <Icon src={HomeSelect} display={selected === 0 ? "flex" : "none"}/>
                    Home
                </Tab>
            </NavLink>
            
            <NavLink to="/PostPage">
                <Tab>
                    <Icon src={PostBtn} display={selected === 1 ? "none" : "flex"}/>
                    <Icon src={PostSelect} display={selected === 1 ? "flex" : "none"}/>           
                    Post
                </Tab>
            </NavLink>

            <NavLink to="/AccountPage">
                <Tab>
                    <Icon src={ProfileBtn} display={selected === 3 ? "none" : "flex"}/>
                    <Icon src={ProfileSelect} display={selected === 3 ? "flex" : "none"}/>                 
                    Profile
                </Tab>
            </NavLink>
        </NavCont>
    );
}

export default NavBar;