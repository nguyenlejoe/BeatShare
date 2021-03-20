import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProfileIcon from "../../comps/ProfileIcon"
import ProfileUser from "../../comps/ProfileUser"
import PFP from "../../comps/Pfp";
import { NavLink as Link } from 'react-router-dom';
import Button from "../../comps/Button"


const ProfileTopBox = styled.div`
    display: flex; 
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 230px;
    top: 0px;
    background-color: #161616;
    border-radius: 0px 0px 30px 30px;
    background: #2F2F2F;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.51), -2px -2px 12px rgba(255, 255, 255, 0.19), 0px 0px 22px 5px rgba(0, 0, 0, 0.19), inset 0px 1px 10px rgba(255, 255, 255, 0.2);
`


const PfpButton = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align: center;
    width: 40%;
    height: 230px;
    //background-color:blue;
    // position: relative;
`


const Username = styled.p`
    display: flex; 
    flex-direction: row;
    position: relative;
    top: 20%;
    font-size: 30px;
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