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
padding-bottom:250px;
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

const Delete = styled.div`
border-radius:100%;
background-color:#000000;
width:25px;
height:25px;
padding:2px;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.51), -2px -2px 12px rgba(255, 255, 255, 0.19), 0px 0px 22px 5px rgba(0, 0, 0, 0.19), inset 0px 1px 10px rgba(255, 255, 255, 0.2);
color:#FFFFFF;
justify-content:center;
text-align:center;
display:${props=>props.display ? props.display : 'none'};
position:relative;
top:20px;
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

const ProfilePost = ({posts, display, onClick}) => {
    return(
        <Container>
            
        {posts && posts.map(o=>
        <PostCont> 
            <Delete display={display} onClick={onClick}>x</Delete>
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