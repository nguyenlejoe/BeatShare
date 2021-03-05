import React from 'react';
import styled from 'styled-components';

import Input from "../Input";
import TextArea from "../TextArea";

// Images


const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const AlbumCover = styled.div`
width:320px;
height:320px;
background-image:url("${props=>props.img ? props.img : AlbumCover}");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
margin:15px;
border-radius:7px;
`;

const MakePost = ({img}) =>{

    return(
        <Container>
            <AlbumCover src="AddAlbum.svg"/>
            <Input text="Song Title"/>
            <Input text="Artist Name"/>
            <TextArea text="Say something about it..."/>
            

        </Container>
    );
}

MakePost.defaultProps = {

}

export default MakePost;