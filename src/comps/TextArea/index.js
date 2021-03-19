import React from 'react';
import styled from 'styled-components';



const TextField = styled.textarea`
display:flex;
justify-content:space-between;
background: #212121;
box-shadow: inset -2px -2px 7px rgba(255, 255, 255, 0.3), inset 2px 2px 4px #000000;
border-radius: 27px;
border-style:none;
padding:16px;
color:white;
margin-top:20px;
height:100px;
width:300px;
margin-bottom:20px;
outline:none;
font-family:'FuturaPTBook';
`;

const TextArea = ({text, onChange}) =>{

    return(
            <TextField defaultValue={text} onChange={onChange}/>
    );
}


TextArea.defaultProps = {
    text:"Type Something"
}

export default TextArea;