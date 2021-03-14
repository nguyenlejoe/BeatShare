import React from 'react';
import PostImg from '../../comps/PostImg';
import SongName from '../../comps/ProfilePost/SongName';
import SongArtist from '../../comps/ProfilePost/SongArtist';
import styled from 'styled-components';

const Container = styled.div`
//background-color:white;
width:150px;
height:180px;
margin:10px;
display:grid;
grid-template-columns:150px 150px;
align-items:center;
margin-left:25%;
margin-right:50%;
`

const PostCont = styled.div`
`;

const SinglePost = styled.div`
display:flex;
flex-direction:column;
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
    },
    {
        id:3,
        img_url:"ep.jpeg",
        songName:"Freaks and Geeks",
        songArtist:"Childish Gambino"
    }
]

const ProfilePost = ({posts}) => {
    return(
        <Container>
        {posts && posts.map(o=>
        <PostCont> 
            
            <SinglePost>
                <PostImg width="150px" height="150px" img={o.img_url} borderRadius="7px"/>
                <SongName songName={o.song_name}></SongName>
                <SongArtist songArtist={o.song_artist}/>
            </SinglePost>

            
            </PostCont>)}

        </Container>
    )
}

ProfilePost.defaultProps = {
    posts:fakeProfileposts
}

export default ProfilePost;