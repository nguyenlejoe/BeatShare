import React, {useState, useEffect} from 'react';
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
justify-content:space-between;
align-items:center;
border-radius:4px;
box-shadow: inset 0px 0px 2px rgba(225, 225, 225, 0.3), inset 0px 4px 0px #171717;
`;

const Tab = styled.div`
margin-left:30px;
margin-right:30px;
color:white;
display:flex;
flex-direction:column;
align-items:center;
`;

const NavLink = styled(Link)`
display:flex;
flex-direction:column;
align-items:center;
text-decoration:none;
&:hover{
    opacity: 75%;
    transition: opacity, 0.5s;
}
`;

const Icon = styled.img`
height:25px;
width:22.7px;
`;

const NavBar = ({ focused, display }) => {
    
    const [selected, setSelected] = useState(0);

    const pageNumber = () => {
        setSelected(focused);
    }

    useEffect(()=>{
        pageNumber()
    },[]);

    return (
        <NavCont>
            <NavLink to="/">
                <Tab>
                    <Icon src={HomeBtn} style={{display: selected == 1 ? "none" : "flex"}} onClick={()=>{
                        setSelected(1)
                    }}/>
                    <Icon src={HomeSelect} style={{display: selected == 1 ? "flex" : "none"}} onClick={()=>{
                        setSelected(1)
                    }}/>
                    Home
                </Tab>
            </NavLink>
            
            <NavLink to="/PostPage">
                <Tab>
                    <Icon src={PostBtn} style={{display: selected == 2 ? "none" : "flex"}} onClick={()=>{
                        setSelected(2)
                    }}/>
                    <Icon src={PostSelect} style={{display: selected == 2 ? "flex" : "none"}} onClick={()=>{
                        setSelected(2)
                    }}/>           
                    Post
                </Tab>
            </NavLink>

            <NavLink to="/AccountPage">
                <Tab>
                    <Icon src={ProfileBtn} style={{display: selected == 3 ? "none" : "flex"}} onClick={()=>{
                        setSelected(3)
                    }}/>
                    <Icon src={ProfileSelect} style={{display: selected == 3 ? "flex" : "none"}} onClick={()=>{
                        setSelected(3)}}/>                 
                    Profile
                </Tab>
            </NavLink>
        </NavCont>
    );
}


export default NavBar;