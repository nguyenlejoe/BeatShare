import React from 'react';
import styled from 'styled-components';
import PostTitle from '../../comps/PostTitle';
import PostImg from '../../comps/PostImg';
import PostCaption from '../../comps/PostCaption';
import CommentInput from '../../comps/CommentInput';
import Comment from '../../comps/Comment';
import {Link} from 'react-router-dom';
import axios from 'axios';


const PostCont = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:5px;

    hr{
        width:90%;
        border: 1px solid rgba(255, 255, 255, 0.09);
    }

    
`

const AllComments = styled.div`
    margin:4% 0 1% 7%;
    font-size:14px;
    color: blue;
`
// Default test posts
let fakePosts = [
    {
        id:1,
        user_id:1,
        user_name:"Rocky",
        img_url:"sampleCover.png",
        description:"Omg i love this song",
        songName:"Sicko Mode",
        songArtist:"Bobby Shmurda",
        commentCount: 7
    },
    {
        id:2,
        user_id:2,
        user_name:"Justin",
        img_url:"sampleCover2.png",
        description:"I hate this song!",
        songName:"Gang",
        songArtist:"IcejjFish",
        commentCount: 2
    },
    {
        id:3,
        user_id:2,
        user_name:"Kai",
        img_url:"sampleCover3.png",
        description:"This album is literally my life, I could listen to this song on repeat and never tired of it",
        songName:"Blonde",
        songArtist:"Frank Ocean",
        commentCount: 3
    }
]


const Post = ({userId, img, onLike, userProfileImg,user_name,song_name,song_artist,img_url, postId, description, number_of_likes, likeState}) => {


    return (
            <PostCont>
                <PostTitle
                    userProfileImage={userProfileImg}
                    user={user_name}
                    songName={song_name}
                    songArtist={song_artist}
                    id={userId}
                    img={img}
                />
                <PostImg
                    img={img_url} 
                />
                <PostCaption
                    user={user_name}
                    caption={description}
                    numLikes={number_of_likes}
                    onLike={onLike}
                    likeState={likeState}
                />
                <Comment/>
                    <AllComments>
                        <Link style={{ textDecoration: 'none' , color: 'lightblue'}} to={{ pathname: "/Post/Comments/" + postId }}>
                            View All Comments
                        </Link>
                    </AllComments>  
                <hr/>
            </PostCont>
    );
}

Post.defaultProps = {
    posts:fakePosts
}

export default Post;