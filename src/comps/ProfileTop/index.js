import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PFP from "../../comps/Pfp"
import { NavLink as Link } from 'react-router-dom';


const ProfileTopBox = styled.div`
    display: flex; 
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 600px;
    justify-self: center;
    background-color: #161616;
    border-radius: 0px 0px 30px 30px;
    background: #2F2F2F;
    box-shadow: inset 20px 20px 60px #282828,
                inset -20px -20px 60px #363636;
`

const TopHalf = styled.div`
    display: flex; 
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 85%;
`

const PfpButton = styled.div`
    display: flex; 
    flex-direction: column;
    width: 40%;
    height: 100%;
    position: relative;
    background-color: yellow;
`

const UserDesc = styled.div`
    display: flex; 
    flex-direction: column;
    width: 60%;
    height: 100%;
    position: relative;
    background: blue;
`

const UserInfo = styled.div`

`


const ProfileTop = ({Username, Desc }) => {
    
    return (
        <ProfileTopBox>
            <TopHalf>
            <PfpButton>

            </PfpButton>
            <UserDesc>
               
            </UserDesc>
            </TopHalf>
            <UserInfo>

            </UserInfo>
        </ProfileTopBox>
    );
}

ProfileTop.defaultProps = {

}


export default ProfileTop;