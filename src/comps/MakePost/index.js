import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Input from "../Input";
import TextArea from "../TextArea";
import PostBtn from '../../comps/PostBtn';

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
`;

const MakePost = ({img, submitPost}) =>{

    const [postImage, setImage] = useState("");
    const [postSongName, setSongName] = useState("");
    const [postSongArtist, setSongArtist] = useState("");
    const [postDesc, setDesc] = useState("");

    return(
        <Container>
            <AlbumCover img={img}/>
            <Input text="Song Title" onChange={(e)=>setSongName(e.target.value)}/>
            <Input text="Artist Name"  onChange={(e)=>setSongArtist(e.target.value)}/>
            <TextArea text="Say something about it..."  onChange={(e)=>setDesc(e.target.value)}/>
            <PostBtn onClick={()=>{
                submitPost(postImage , postSongName , postSongArtist, postDesc)
            }}></PostBtn>
        </Container>
    );
}

MakePost.defaultProps = {

}

export default MakePost;