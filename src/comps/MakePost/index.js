import React from 'react';
import styled from 'styled-components';

import Input from "../Input";
import TextArea from "../TextArea";

// Images
import AlbumDefault from '../../images/addpost.png';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const AlbumCover = styled.div`
width:320px;
height:320px;
background-image:url("${props=>props.img ? props.img : AlbumDefault}");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
margin:15px;
border-radius:7px;
&:hover{
    width:310px;
    height:310px;
}
`;

const MakePost = ({img}) =>{

    return(
        <Container>
            <AlbumCover img={img}/>
            <Input text="Song Title"/>
            <Input text="Artist Name"/>
            <TextArea text="Say something about it..."/>
            

        </Container>
    );
}

MakePost.defaultProps = {

}

export default MakePost;