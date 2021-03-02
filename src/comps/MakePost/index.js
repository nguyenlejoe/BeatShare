import React from 'react';
import styled from 'styled-components';

// Images
import AlbumDefault from '../../images/addpost.png';


const AlbumCover = styled.div`
width:320px;
height:320px;
background-image:url("${props=>props.img ? props.img : AlbumDefault}");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
margin:15px;
border-radius:7px;
&:hover{
    width:310px;
    height:310px;
}
`;

const MakePost = ({img}) =>{

    return(
        <div>
            <AlbumCover img={img}/>

        </div>
    );
}

MakePost.defaultProps = {

}

export default MakePost;