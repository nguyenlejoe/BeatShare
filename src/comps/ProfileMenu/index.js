import react from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';


const Container = styled.div`
display:flex;
flex-direction:column;
padding:5px;
height:100%;
width:345px;
z-index:1;
background-color:#171717;
border-radius:7px;
color:white;
`;

const Option = styled.div`
padding:10px;
text-align:center;
/* &:hover{
    background-color:#7209B7;
    transition: background-color, 0.5s;
} */
`;

const Line = styled.div`
width: 340px;
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
    let history = useHistory();

    return (
        <Container>
          <Option onClick={onClick}>
                  Log out
          </Option>
          <Line/>

          <Option onClick={()=> {
              history.push("/EditAccount");
           }}>Edit Profile
           </Option>
              <Line/>

         
              <Option onClick={()=> {
              history.push("/ManagePostPage");
             }}>
                  Manage Posts
              </Option>
         
          <Line/>
        </Container>
    );
}


export default ProfileMenu;