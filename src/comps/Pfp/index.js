import React from 'react';
import styled from 'styled-components';
import cameraIcon from "../../imgs/camera.svg";

const Cont = styled.div`
display:flex;
width:${props=>props.width ? props.width : '150px'};
height:${props=>props.height ? props.height : '150px'};
border-radius:100px;
background: radial-gradient(50% 50% at 50% 50%, #212121 0%, #2F2F2F 100%);
box-shadow: 4px 4px 12px 5px rgba(0, 0, 0, 0.9), -2px -2px 12px 0px rgba(255, 255, 255, 0.5), 0px 1px 10px 0px rgba(255, 255, 255, 0.5) inset;
align-items:center;
justify-content:center;

`
const Icon = styled.img`
width:${props=>props.width ? props.width : 'auto'};
height:${props=>props.height ? props.height : 'auto'};
`;

const PFP = ({height, width}) =>{

    return(
        <Cont height={height} width={width}>
           <Icon src={cameraIcon} />
        </Cont>
    );
}

PFP.defaultProps = {

}

export default PFP;