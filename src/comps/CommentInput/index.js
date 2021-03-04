import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const CommentCont = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin: 4% 0 2% 0;
`;

const InputCont = styled.div`
    display:flex;
    justify-content:space-between;
    background: #212121;
    box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.3), inset 4px 4px 4px #000000;
    border-radius: 27px;
    border-style:none;
    height:35px;
    width:83%;
    padding:0 5% 0 5%;
    color:white;
`

const PostButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const InputBox = styled.input`
    border-style:none;
    outline: none;
    background-color: transparent;
    color:white;
    width:85%;
`


//unLikeHeart
const CommentInput = ({}) => {

    return (
        <CommentCont>
            <InputCont placeholder="leave a comment">
                <InputBox type="text" placeholder="leave a comment"></InputBox>
                <PostButton>post</PostButton>
            </InputCont>
        </CommentCont>
    );
}

CommentInput.defaultProps = {
    caption:"This album is literally my life, I could listen to this song on repeat and never tired of it",
    numLikes:"69"
}

export default CommentInput;