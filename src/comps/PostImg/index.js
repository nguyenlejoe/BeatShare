import React from 'react';
import styled from 'styled-components';

const ImageCont = styled.div`
    width: 100%;
    height: 385px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ImageBox = styled.div`
    width:92%;
    height:92%;
    background-image:url(/${props => props.postimg ? props.postimg : "null"});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-color:black;

`;



const PostImg = ({img}) => {
    return (
        <ImageCont>
            <ImageBox postimg={img}/>
        </ImageCont>
    );
}

PostImg.defaultProps = {

}

export default PostImg;