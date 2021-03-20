import React from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
    display:flex;
    align-items:center;

`

const Avatar = styled.img`
    width: 48px;
    height: 46px;
    background: #2F2F2F;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.51), -2px -2px 12px rgba(255, 255, 255, 0.19), 0px 0px 22px 5px rgba(0, 0, 0, 0.19), inset 0px 1px 10px rgba(255, 255, 255, 0.2);
    border-radius: 221px;
    margin: 0 15px 0 20px;
    background-image:url(/${props => props.bgimg ? props.bgimg : "null"});
    background-position:50% 75%; 
    background-size:60%;
    background-repeat:no-repeat;
`


const UserName = styled.div`
    font-size:18px;
    color:white;
    margin-right:10px;
`

const Caption = styled.div`

`

const UserAvatar = ({username, id, caption, img}) => {

    const history = useHistory()

    return (
        <Container onClick={()=>{
            history.push("/user/" + id)
        }}>
            <Avatar src={img} alt= " "/>
            <UserName><b>{username}</b></UserName>
            <Caption>{caption}</Caption>
            

        </Container>
    )
}

export default UserAvatar;