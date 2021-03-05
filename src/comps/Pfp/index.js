import React from 'react';
import styled from 'styled-components';


const Cont = styled.div`
display:flex;
width:150px;
height:150px;
border-radius:100px;
background: radial-gradient(50% 50% at 50% 50%, #212121 0%, #2F2F2F 100%);
box-shadow: 4px 4px 12px 5px rgba(0, 0, 0, 0.9), -2px -2px 12px 0px rgba(255, 255, 255, 0.5), 0px 1px 10px 0px rgba(255, 255, 255, 0.5) inset;
align-items:center;
justify-content:center;

`
const Icon = styled.img`
width:auto;
height:auto;
`;

const PFP = () =>{

    return(
        <Cont>
           <Icon src="camera.svg"/>
        </Cont>
    );
}

PFP.defaultProps = {

}

export default PFP;