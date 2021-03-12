import React from 'react';
import PostImg from '../../comps/PostImg';
import styled from 'styled-components';

const Container = styled.div`
//background-color:white;
width:150px;
height:180px;
margin:10px;
`

const PostCont = styled.div`
display:flex;
`;

const Info = styled.p`
font-size:12px;
`;
let fakeProfileposts = [
    {
        id:1,
        img_url:"SPYAIR.jpg",
        songName:"イマジネーシヨン",
        songArtist:"SPYAIR"
    },
    {
        id:2,
        img_url:"twice.png",
        songName:"YES or YES",
        songArtist:"Twice"
    }
]

const ProfilePost = ({posts}) => {
    return(
        <Container>
        {posts && posts.map(o=><PostCont> 
            
            <PostImg width="150px" height="150px" img={o.img_url} borderRadius={"10px"}/>
            <Info songName={o.song_name}></Info>
            <Info songArtist={o.song_artist}></Info>
            
            </PostCont>)}

        </Container>
    )
}

ProfilePost.defaultProps = {
    posts:fakeProfileposts,
    songName:"Song Name",
    songArtist:"Song Artist"
}

export default ProfilePost;