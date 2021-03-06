import React from 'react';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

const TitleCont = styled.div`
    width: 100%;
    display:flex;
    align-items:left;
    flex-direction: column;
`;

const Title = styled.div`
font-size:14px;
height:20px;
margin-left: 78px;
margin-top: -5px;
color: gray;
`

const Avatar = styled.div`
    width: 48px;
    height: 46px;
    background: #2F2F2F;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.51), -2px -2px 12px rgba(255, 255, 255, 0.19), 0px 0px 22px 5px rgba(0, 0, 0, 0.19), inset 0px 1px 10px rgba(255, 255, 255, 0.2);
    border-radius: 221px;
    margin: 0 20px 0 20px;
    background-image:url(/${props => props.bgimg ? props.bgimg : "null"});
    background-position:50% 75%; 
    background-size:60%;
    background-repeat:no-repeat;
`

const PostTitle = ({user, songName, songArtist, userProfileImage, id,img}) => {
    return (
        <TitleCont>
            <UserAvatar 
            username = {user}
            id = {id}
            img={img}
            />
            {/* <Avatar bgimg={userProfileImage}/> */}
            <Title>posted about <b>{songName}</b> by <b>{songArtist}</b></Title>
        </TitleCont>
    );
}

PostTitle.defaultProps = {
    user:"User4567",
    songName:"Sicko Mode",
    songArtist:"Bobby Shmurda",
    userProfileImage:"cameraIcon.svg"
}

export default PostTitle;