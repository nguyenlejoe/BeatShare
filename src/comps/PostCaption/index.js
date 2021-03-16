import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const PostCont = styled.div`
    width: 100%;
    display:flex;
`;

const LikeCont = styled.div`
    display:flex;
    flex-direction:column; 
    align-items:center;
    justify-content:center;
    width:22%;
`;

const CaptionCont= styled.div`
    width:70%;
    padding: 5px 0 0 15px;
`

const LikeCounter = styled.div`

`

const LikeButton = styled.div`
    width:40px;
    height:38px;
    background-image:url(/unLikeHeart.svg);
    background-position:80% 50%;
    background-repeat:no-repeat;

    
    ${props => props.active === true && css`
        background-image:url(/likedIcon.svg);   
    `}
    
`

//unLikeHeart
const PostCaption = ({caption, numLikes, onLike}) => {

    const [liked, setLiked] = useState(false);

    return (
        <PostCont>
            <LikeCont>
                <LikeButton active={liked} onClick={()=>{
                    if(!liked){
                        setLiked(true)
                    }else{
                        setLiked(false)
                    }
                    onLike(liked)
                }}/>
                <LikeCounter>{numLikes} Likes</LikeCounter>
            </LikeCont>
            <CaptionCont>{caption}</CaptionCont>
        </PostCont>
    );
}

PostCaption.defaultProps = {
    caption:"This album is literally my life, I could listen to this song on repeat and never tired of it",
    numLikes:"69"
}

export default PostCaption;