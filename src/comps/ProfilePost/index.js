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
/* align-items:center; */
margin-left:25%;
margin-right:50%;
padding-bottom:25px;
`

const PostCont = styled.div`
`;

const SinglePost = styled.div`
display:inline;
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

const ProfilePost = ({posts, display, onClick, onDelete, img_url, song_name, song_artist}) => {
    return(
        <Container onClick={onClick}>
            
        
        
            <Delete display={display} >x</Delete>
            <SinglePost>
                <PostImg 
                width="150px" 
                height="150px" 
                img={img_url} 
                borderRadius="7px" 
                boxShadow='inset -8px 8px 29px #1d1d1d,
                inset 8px -8px 29px #333333;'
                margin='20px'
                />
                <SongName songName={song_name}></SongName>
                <SongArtist songArtist={song_artist}/>
            </SinglePost>

            
            

        </Container>
    )
}

ProfilePost.defaultProps = {
    posts:fakeProfileposts
}

export default ProfilePost;