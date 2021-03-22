import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Input from "../Input";
import TextArea from "../TextArea";
import PostBtn from '../../comps/PostBtn';
import {Link, useHistory} from 'react-router-dom';
// Images
import AlbumDefault from '../../imgs/addpost.png';

const Container = styled.form`
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
    margin: 35px 0px -15px 0px;
    border-radius:7px;
`;

const PostInput = styled.input`
    display:none;
`;

const InputPost = styled.input`
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
    outline:none;
    font-family:'FuturaPTBook';
`;

const BigInput = styled.textarea`
    display:flex;
    justify-content:space-between;
    background: #212121;
    box-shadow: inset -2px -2px 7px rgba(255, 255, 255, 0.3), inset 2px 2px 4px #000000;
    border-radius: 27px;
    border-style:none;
    padding:16px;
    color:white;
    margin-top:10px;
    height:100px;
    width:250px;
    margin-bottom:15px;
    outline:none;
    font-family:'FuturaPTBook';
`
const Title = styled.div`
    display: flex;
    position: relative;
    margin: 10px 0px -5px -200px;
`;

const Label = styled.label`
`;

const MakePost = ({img, submitPost, submit}) =>{
    const history = useHistory()
    const [postImage, setImage] = useState();
    const [postSongName, setSongName] = useState("");
    const [postSongArtist, setSongArtist] = useState("");
    const [postDesc, setDesc] = useState("");
    
    
    const HandlePost = async event => {

        event.preventDefault()

        const data = new FormData()
        data.append('image', postImage)
        data.append('description', postDesc)
        data.append('song_name', postSongName)
        data.append('song_artist', postSongArtist)
      

        let resp = await axios.post("/api/create_post", data)
        console.log(resp.data)
        history.push("/HomePage")
    }



    return(
        <Container onSubmit={HandlePost}>
            
            <PostInput id='file-input' type="file" accept="image/*" filename={postImage} onChange={e => setImage(e.target.files[0])}></PostInput>
            <Label for='file-input'><AlbumCover img={img}/></Label>
            <Title>Song Title</Title>
            <InputPost placeholder="Song Title" onChange={(e)=>setSongName(e.target.value)}/>
            <Title>Artist Name</Title>
            <InputPost placeholder="Artist Name"  onChange={(e)=>setSongArtist(e.target.value)}/>
            <Title>Caption</Title>
            <BigInput placeholder="Say something about it..."  onChange={(e)=>setDesc(e.target.value)}/>
            <PostBtn type="submit"/>
        </Container>
    );
}

MakePost.defaultProps = {

}

export default MakePost;