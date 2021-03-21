import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProfileIcon from "../../comps/ProfileIcon"
import ProfileUser from "../../comps/ProfileUser"
import PFP from "../../comps/Pfp";
import { NavLink as Link } from 'react-router-dom';
import Button from "../../comps/Button"


const ProfileTopBox = styled.div`
    display: flex; 
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 200px;
    top: 0px;
    margin: 0px;
`


const PfpButton = styled.div`
    display: flex; 
    position: relative;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align: center;
    top: 50px;
    color: lightblue;
    text-decoration: underline;
    cursor: pointer;
`


const Username = styled.p`
    display: flex; 
    position: relative;
    font-size: 30px;
    justify-self: center;
    align-self: center;
    margin-top: 35px;
`



const EditTop = ({username, img}) => {
    
    return (
        <ProfileTopBox>
            <PfpButton>
                <PFP height='110px' width='110px' img={img}/>
                <p>Edit Profile Picture</p>
            </PfpButton>
                    <Username> {username} </Username>
        </ProfileTopBox>
        
    );
}

EditTop.defaultProps = {
    username: "@Username",
    bio: "insert bio here"
}


export default EditTop;