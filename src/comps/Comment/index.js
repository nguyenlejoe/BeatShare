import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const CommentCont = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    margin: 4% 0 2% 0;
`;

const UserCont = styled.div`
    width:20%;
`

const CommentBox = styled.div`
    width:70%;
`


const Comment = ({userName, userComment}) => {

    return (
        <CommentCont>
            <UserCont><b>{userName}</b></UserCont>
            <CommentBox> {userComment}</CommentBox>
        </CommentCont>
    );
}

Comment.defaultProps = {
    userName:"User4563 ",
    userComment:"i love this song!"
}

export default Comment;