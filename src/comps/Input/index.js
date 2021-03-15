import React from 'react';
import styled from 'styled-components';



const TextInput = styled.input`
display:flex;
justify-content:space-between;
background: #212121;
box-shadow: inset -2px -2px 7px rgba(255, 255, 255, 0.3), inset 2px 2px 4px #000000;
border-radius: 27px;
border-style:none;
height:35px;
width:250px;
padding:0 5% 0 5%;
color:white;
margin-top:10px;
`;

const Input = ({text, onChange}) =>{

    return(
            <TextInput placeholder={text} onChange={onChange}/>
    );
}

Input.defaultProps = {
    text:"Type Something"
}

export default Input;