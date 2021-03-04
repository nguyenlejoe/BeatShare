import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


const ProfileIconBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 100%;
    position: relative;

`

const Icon = styled.div`
    display: flex; 
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 85%;
`

const IconText = styled.div`
    display: flex; 
    flex-direction: column;
    width: 40%;
    height: 100%;
    position: relative;
    background-color: yellow;
`

const IconTitle = styled.div`
    display: flex; 
    flex-direction: column;
    width: 60%;
    height: 100%;
    position: relative;
    background: blue;
`




const ProfileIcon = ({img, text, title }) => {
    
    return (
        <ProfileIconBox>
            <Icon> {img} </Icon>
            <IconText>{text}</IconText>
            <IconTitle>{title}</IconTitle>
        </ProfileIconBox>
    );
}

ProfileIcon.defaultProps = {

}


export default ProfileIcon;