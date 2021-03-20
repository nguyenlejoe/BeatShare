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
    width:15%;
    margin-left:20px;
`;

const CaptionCont= styled.div`
    width:68%;
    min-height:50px;
    max-height:300px;
    padding: 5px 0 0 15px;
`



const LikeCounter = styled.div`
    font-weight:100;
`

const LikeButton = styled.div`
    width:40px;
    height:38px;
    background-image:url(/unLikeHeart.svg);
    background-position:50% 25%;
    background-repeat:no-repeat;
    transition:background-image,0.5s;
    

    
    ${props => props.active === true && css`
        background-image:url(/likedHeart.svg);   
    `}
    
`

const PostCaption = ({caption, numLikes, onLike, likeState}) => {

    // State for liked
    const [liked, setLiked] = useState(likeState);

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