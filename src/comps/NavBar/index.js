import React, {useState} from 'react';
import styled from 'styled-components';

const NavCont = styled.div`
width:100%;
height:79px;
background-color:#282828;
display:flex;
justify-content:center;
align-items:center;
`;

const Tab = styled.div`
margin-left:20px;
margin-right:20px;
color:white;
`;

const NavBar = () => {
    return (
        <NavCont>
            <Tab>Home</Tab>
            <Tab>Post</Tab>
            <Tab>Profile</Tab>
        </NavCont>
    );
}

export default NavBar;