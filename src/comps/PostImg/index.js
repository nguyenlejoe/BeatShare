import React from 'react';
import styled from 'styled-components';

const ImageCont = styled.div`
    width: ${props=>props.width ? props.width : '100%'};
    height: ${props=>props.height ? props.height : '385px'};
    display:flex;
    align-items:center;
    justify-content:center;
    
  
`;

const ImageBox = styled.img`
    width:${props=>props.width ? props.width : '95%'};;
    height:${props=>props.height ? props.height : '95%'};
    background-image:url(/BeatShareLogo.svg);
    background-repeat:no-repeat;
    background-position:center;
    background-size:contain;
    border-radius: ${props=>props.borderRadius ? props.borderRadius : '10px'};
`;



const PostImg = ({img, width, height, borderRadius}) => {
    return (
        <ImageCont width={width} height={height} >
            <ImageBox  src={img} alt = " " borderRadius={borderRadius}/>
        </ImageCont>
    );
}

PostImg.defaultProps = {
  img:"sampelCover.png"
}

export default PostImg;