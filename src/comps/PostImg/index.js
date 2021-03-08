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
    background-image:url(/BeatShareLogo.svg);
    background-repeat:no-repeat;
    background-position:center;
`;



const PostImg = ({img}) => {
    return (
        <ImageCont>
            <ImageBox  src={img} alt = " " />
        </ImageCont>
    );
}

PostImg.defaultProps = {
  img:"sampelCover.png"
}

export default PostImg;