import react, {useState} from 'react';
import styled, {css} from 'styled-components';

import MenuBtn from '../../imgs/menuBtn.svg';
import MenuExit from '../../imgs/menuExit.svg';

const MenuButt = styled.div`
width:34px;
height:34px;
background-image:url(${MenuBtn});
background-size:cover;
background-repeat:no-repeat;
transition:background-image,0.2s;

${props => props.active === true && css`
        background-image:url(${MenuExit});   
    `}
`;


const MenuButton = ({menuState, onClick, onClicked}) => {

    const [clicked, setClicked] = useState(menuState);


    return (

        <div onClick={onClick}>        
            <MenuButt active={clicked}
        onClick={()=>{
            if(!clicked){
                setClicked(true)
            } else {
                setClicked(false)
            }
            
        }}
        />
        </div>


    );
}

export default MenuButton;