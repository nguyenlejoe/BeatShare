import React, { useEffect, useState } from 'react';
import "../../App.scss";
import CommentInput from '../../comps/CommentInput';
import Comment from '../../comps/Comment';
import PostTitle from '../../comps/PostTitle';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

const ViewPostComments = (props) => {
    
    const params = useParams();

    const [comments, setComments] = useState([]);
    const [post, setPost] = useState([]);

    const HandlePost = async() => {
        let resp = await axios.get(`http://localhost:8080/api/posts/${params.id}`)
        setPost(resp.data.posts)
        console.log(post)
    }

    const HandleComments = async() => {
        let resp = await axios.get(`http://localhost:8080/api/comments/${params.id}`)
        setComments(resp.data.comments)
    }

    useEffect(()=>{
        HandleComments()
        HandlePost()
    },[])


    return (
        <div className="PostComments">
            <PostTitle
          
            />
            <CommentInput/>
            <Comment comments={comments}/>
        </div>
    )
}

export default ViewPostComments;