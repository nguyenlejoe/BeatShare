import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
display:flex;
width:205px;
height:45px;
border-radius:30px;
background: linear-gradient(180deg, #2F2F2F 0%, #1E1E1E 100%);
box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 1), -2px -2px 12px 0px rgba(255, 255, 255, 0.3), 0px 1px 4px 0px rgba(255, 255, 255, 0.25) inset;
align-items:center;
justify-content:center;
color:white;
border:none;
outline:none;
`
const Button = ({text, onClick}) =>{

    return(
        <Btn onClick={onClick}>
           <p> {text} </p>
        </Btn>
    );
}

Button.defaultProps = {
text: "this is a button"
}

export default Button;