import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


const SureModal = styled.div`
    display: flex; 
    align-items: center;
    justify-item:center;
    flex-direction: column;
    position: absolute;
    width: 40%;
    height: 20%;
    justify-self: center;
    top: 40%;
    background-color: #2F2F2F;
    border-radius: 30px;
    background: #2F2F2F;
    box-shadow: inset 20px 20px 60px #282828,
                inset -20px -20px 60px #363636;
`;
const TextBox = styled.div`
    display: flex; 
    align-items: center;
    justify-item:center;
    padding: 5px;
    width: 90%;
    height: 60%;

`;
const ButtonBox = styled.div`
    display: flex; 
    width: 100%;
    height: 40%;
`;

const YouSure = ({ }) => {
    
    return (
        <SureModal>
            <TextBox> Are you sure you want to go back without saving your changes?</TextBox>
            <ButtonBox>

            </ButtonBox>
        </SureModal>
    );
}


export default YouSure;