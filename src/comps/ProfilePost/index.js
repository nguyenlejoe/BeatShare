import React from 'react';
import PostImg from '../../comps/PostImg';
import styled from 'styled-components';

const Container = styled.div`
//background-color:white;
width:150px;
height:180px;
margin:10px;
`

const Info = styled.p`
font-size:12px;
`;
let fakeProfileposts = [
    {
        id:1,
        img_url:"SPYAIR.jpg",
        songName:"イマジネーシヨン",
        songArtist:"SPYAIR"
    }
]
const ProfilePost = ({posts, title, artist}) => {
    return(
        <Container>
        {posts && posts.map(o=><div> 
            
            <PostImg width="150px" height="150px" img={o.img_url} borderRadius={"10px"}/>
            <Info songName={o.song_name}></Info>
            <Info songArtist={o.song_artist}></Info>
            
            </div>)}

        </Container>
    )
}

ProfilePost.defaultProps = {
    posts:fakeProfileposts,
    songName:"Song Name",
    songArtist:"Song Artist"
}

export default ProfilePost;