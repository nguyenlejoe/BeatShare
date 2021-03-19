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
margin:15px;
border-radius:7px;
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
      

        let resp = await axios.post("http://localhost:8080/api/create_post", data)
        console.log(resp.data)
        history.push("/HomePage")
    }



    return(
        <Container onSubmit={HandlePost}>
            <AlbumCover img={img}/>
            <input type="file" accept="image/*" filename={postImage} onChange={e => setImage(e.target.files[0])}></input>
            <Input text="Song Title" onChange={(e)=>setSongName(e.target.value)}/>
            <Input text="Artist Name"  onChange={(e)=>setSongArtist(e.target.value)}/>
            <TextArea text="Say something about it..."  onChange={(e)=>setDesc(e.target.value)}/>
            <PostBtn type="submit"/>
        </Container>
    );
}

MakePost.defaultProps = {

}

export default MakePost;