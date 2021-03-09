import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PFP from "../../comps/Pfp"
import { NavLink as Link } from 'react-router-dom';


const ProfileTopBox = styled.div`
    display: flex; 
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 650px;
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
    height: 85%;
`

const PfpButton = styled.div`
    display: flex; 
    flex-direction: column;
    width: 40%;
    height: 100%;
    // position: relative;
`

const UserDesc = styled.div`
    display: flex; 
    flex-direction: column;
    width: 60%;
    height: 100%;
    // position: relative;
`

const UserInfo = styled.div`

`


const ProfileTop = ({Username, Desc }) => {
    
    return (
        <ProfileTopBox>
            <TopHalf>
            <PfpButton>
                <PFP />
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