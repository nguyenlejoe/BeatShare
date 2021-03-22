import React, { useEffect, useState } from 'react';
import "../../App.scss";
import CommentInput from '../../comps/CommentInput';
import Comment from '../../comps/Comment';
import CommentCaption from '../../comps/CommentCaption';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';


const ViewPostComments = () => {
    
    const params = useParams();
    const history = useHistory();
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState("");

    // Post comment
    const PostComment = async(comment) => {
        let resp = await axios.post(`/api/comment/${params.id}`, {message:comment})
        console.log(resp.data)
        HandleComments()
    }

    // Grab information on current post
    const HandlePost = async() => {
        let resp = await axios.get(`/api/posts/${params.id}`)
        setPost(resp.data[0])
        console.log(post)
    }

    // Grab all comments attached to the post
    const HandleComments = async() => {
        let resp = await axios.get(`/api/comments/${params.id}`)
        setComments(resp.data.comments)
    }

    useEffect(()=>{
        HandleComments()
        HandlePost()
    },[])


    console.log(post.profile_picture)

    return (
        <div className="PostComments">
            <CommentCaption
                img={post.profile_picture}
                id={post.poster_id}
                userName={post.user_name}
                postCaption={post.description}
                onClick={()=>history.push('/HomePage')}
            />
            <CommentInput
             onComment={PostComment}
            />
            <Comment comments={comments}/>
        </div>
    )
}

export default ViewPostComments;