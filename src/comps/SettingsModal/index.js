import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


const ModalBox = styled.div`
    display: flex; 
    flex-direction: column;
    position: absolute;
    width: 200px;
    height: 35%;
    justify-self: center;
    top: 10%;
    right: 30px;
    background-color: #161616;
    border-radius: 30px;
    background: #2F2F2F;
    box-shadow: inset 20px 20px 60px #282828,
                inset -20px -20px 60px #363636;
`;

const SectionBox = styled.div`
    height: 25%;
    width: 80%;
    display: flex; 
    position: relative;
    align-items: center;
    margin-left: 20%;
    cursor: pointer;
`
const Line = styled.hr`
    width: 80%;
    border: 1px solid #282828;
    display: flex; 
`

const SettingsModal = ({text }) => {
    
    return (
        <ModalBox>
            <SectionBox onClick={onclick}> Log Out </SectionBox>
            <Line></Line>
            <SectionBox onClick={onclick}> Edit Profile </SectionBox>
            <Line></Line>
            <SectionBox onClick={onclick}> View Likes </SectionBox>
            <Line></Line>
            <SectionBox onClick={onclick}> Settings </SectionBox>
        </ModalBox>
    );
}

SettingsModal.defaultProps = {
    text: "default",
    onclick: "default",
}


export default SettingsModal;