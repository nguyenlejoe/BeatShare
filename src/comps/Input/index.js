import React from 'react';
import styled from 'styled-components';



const TextInput = styled.input`
display:flex;
justify-content:space-between;
background: #212121;
box-shadow: inset -0.5px -1px 4px rgba(255, 255, 255, 0.3), inset 4px 4px 4px #000000;
border-radius: 27px;
border-style:none;
height:35px;
width:83%;
padding:0 5% 0 5%;
color:white;
margin-top:10px;
`;

const Input = ({text}) =>{

    return(
            <TextInput placeholder={text}/>
    );
}

Input.defaultProps = {
    text:"Type Something"
}

export default Input;