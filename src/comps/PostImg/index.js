import React from 'react';
import styled from 'styled-components';

const ImageCont = styled.div`
    width: 100%;
    height: 385px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ImageBox = styled.img`
    width:93%;
    height:93%;
    // background-image:url(/${props => props.postimg ? props.postimg : "null"});
    border-radius:10px;
    background-color:black;

`;



const PostImg = ({img}) => {
    return (
        <ImageCont>
            <ImageBox onerror='this.src="sampelCover.png"' src={img}/>
        </ImageCont>
    );
}

PostImg.defaultProps = {
  img:"sampelCover.png"
}

export default PostImg;