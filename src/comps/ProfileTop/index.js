import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PFP from "../../comps/Pfp";
import { NavLink as Link } from 'react-router-dom';


const ProfileTopBox = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 325px;
    justify-self: center;
    background-color: #171717;
    border-radius: 0px 0px 30px 30px;
    background: #2F2F2F;
    box-shadow: inset 0px 0px 2px rgba(225, 225, 225, 0.3), inset 0px 4px 0px #171717;
`

const TopHalf = styled.div`
    display: flex; 
    flex-direction: row;
    // position: relative;
    width: 100%;
    height: 650px;
`

const PfpButton = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 40%;
    height: 225px;
    //background-color:blue;
    // position: relative;
`

const UserDesc = styled.div`
    display: flex; 
    flex-direction: column;
    width: 60%;
    height: 225px;
    //background-color:yellow;
    // position: relative;
`

const User = styled.h1`
    padding-top:35px;
    font-size:18px;
`;

const Bio = styled.p`
    width: 90%;
    padding-bottom:30px;
    font-size:11px;
`;

const UserInfo = styled.div`

`


const ProfileTop = ({user_name, description }) => {
    
    return (
        <ProfileTopBox>
            <TopHalf>
            <PfpButton>
                <PFP height='90px' width='90px'/>
            </PfpButton>
            <UserDesc>
               <User>{user_name}</User>
               <Bio>{description}</Bio>
            </UserDesc>
            </TopHalf>
            <UserInfo>

            </UserInfo>
        </ProfileTopBox>
    );
}

ProfileTop.defaultProps = {
    user_name:"Username",
    description:"Bio is going to be 255 characters, that gives users enoughs room to tell a little bit about themselves. Wow 255 characters is a lot, almost there, keep going, come on how much more do I have to write, im so close, what if I do the alphabet, abcdefjhijklmn"
}


export default ProfileTop;