import React from 'react';
import styled from 'styled-components';
import Post from '../Post';
import UserAvatar from '../../comps/UserAvatar';

const CaptionCont = styled.div`
width: 100%;
height: 180px;
background: linear-gradient(180deg, #2F2F2F 0%, #1E1E1E 100%);
box-shadow: inset 0px 4px 12px rgba(255, 255, 255, 0.25);
border-radius: 0px 0px 30px 30px;
display:flex;
justify-content:center;
align-items:center;
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

const PostCaption = styled.div`
    width:63%;
    height:17px;
    b{
        margin-right:10px;
    }
`

const BackButton = styled.img`
    width:40px;
    height:40px;
    position: fixed;
    left:10px;
    top:10px;
`

const CommentCaption = ({userProfile, userName, postCaption, onClick, id}) => {
    return (
        <CaptionCont>
            <BackButton src="/backBtn.svg" onClick={onClick}></BackButton>
            <UserAvatar 
            username={userName}
            id={id}
            />
            <PostCaption>
            {postCaption}
            </PostCaption>
        </CaptionCont>
    );
}

export default CommentCaption;