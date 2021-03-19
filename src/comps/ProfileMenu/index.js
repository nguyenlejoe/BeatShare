import react from 'react';
import styled from 'styled-components';
import { NavLink as Link, NavLink, useHistory } from 'react-router-dom';


const Container = styled.div`
display:flex;
flex-direction:column;
padding:5px;
height:185px;
width:165px;
z-index:1;
background-color:#171717;
border-radius:7px;
color:white;
`;

const Option = styled.div`
padding:10px;
&:hover{
    background-color:#7209B7;
    transition: background-color, 0.5s;
}
`;

const Line = styled.div`
width: 160px;
height: 1px;
background-color: #282828;
`;








const ProfileMenu = ({onClick }) => {
    let history = useHistory();

    return (
        <Container>
            <Option onClick={onClick}>
                Log out
            </Option>
            <Line/>
            <Option onClick={()=> {
                history.push("/EditAccount");

            }}>
                Edit Profile
            </Option>
            <Line/>
            <Option onClick={onClick}>
                View Likes
            </Option>
            <Line/>
            <Option onClick={onClick}>
                Settings
            </Option>
            <Line/>
        </Container>
    );
}


export default ProfileMenu;