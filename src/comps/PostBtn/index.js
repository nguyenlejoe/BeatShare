import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
display:flex;
width:205px;
height:45px;
color:white;
border-radius:30px;
background: linear-gradient(86.64deg, #7209B7 6.62%, #4361EE 107.17%);
box-shadow: -2px -2px 12px 0px rgba(255, 255, 255, 0.5), 0px 4px 12px 2px rgba(0, 0, 0, 1), 0px 1px 10px 0px rgba(255, 255, 255, 0.6) inset ;
align-items:center;
justify-content:center;
margin-bottom:20px;
border:none;
outline:none;
`
const PostBtn = ({onClick}) =>{

    return(
        <Btn onClick={onClick}>
           <p> Post </p>
        </Btn>
    );
}

PostBtn.defaultProps = {

}

export default PostBtn;