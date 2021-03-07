import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
width: 100%;


`

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


const Comment = ({comments}) => {

    return (
        <Container>
           {comments && comments.map((o)=>
            <CommentCont>
                <UserCont><b>{o.user_name}</b></UserCont>
                <CommentBox> {o.message}</CommentBox>
            </CommentCont>)} 
        </Container>
    );
}

Comment.defaultProps = {
    userName:"User4563 ",
    userComment:"i love this song!"
}

export default Comment;