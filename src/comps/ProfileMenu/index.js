import react from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Container = styled.div`
display:flex;
flex-direction:column;
padding:5px;
height:80px;
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

const NavLink = styled(Link)`
text-decoration:none;
color:white;
&:hover{
    background-color:#7209B7;
    transition: background-color, 0.5s;
}
`;



const ProfileMenu = ({onClick }) => {
    

    return (
        <Container>
            <Option onClick={onClick}>
                Log out
            </Option>
            <Line/>
        <NavLink to='/EditAccount'>
            <Option onClick={onClick}>
                Edit Profile
            </Option>
        </NavLink>

            <Line/>
        </Container>
    );
}


export default ProfileMenu;