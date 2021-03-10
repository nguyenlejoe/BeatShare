import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PFP from "../../comps/Pfp";
import { NavLink as Link } from 'react-router-dom';

// Images
import FavArtist from '../../images/profile_selected.png';
import FavSong from '../../images/eighthnote.png';

const ProfileTopBox = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 365px;
    justify-self: center;
    background-color: #171717;
    border-radius: 0px 0px 30px 30px;
    background: #2F2F2F;
    box-shadow: inset 0px 0px 2px rgba(225, 225, 225, 0.3), inset 0px 4px 0px #171717;
`

const TopHalf = styled.div`
    display: flex; 
    flex-direction: row;
    // position: relative;
    width: 100%;
    height: 650px;
`

const PfpButton = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 40%;
    height: 225px;
    //background-color:blue;
    // position: relative;
`

const UserDesc = styled.div`
    display: flex; 
    flex-direction: column;
    width: 60%;
    height: 225px;
    //background-color:yellow;
    // position: relative;
`

const User = styled.h1`
    padding-top:35px;
    font-size:18px;
`;

const Bio = styled.p`
    width: 90%;
    padding-bottom:30px;
    font-size:11px;
`;

const UserInfo = styled.div`
    display:flex;
    justify-content:center;
`

const Favourites = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px;
`;

const IconInfo = styled.img`
    width:22.7px;
    height:27px;
`;

const InfoBig = styled.p`
    font-size: 14px;
`;

const InfoSmall = styled.p`
    font-size: 10px;
`;

const ProfileTop = ({user_name, description, favourite_artist, favourite_song }) => {
    
    return (
        <ProfileTopBox>
            <TopHalf>
            <PfpButton>
                <PFP height='90px' width='90px'/>
            </PfpButton>
            <UserDesc>
               <User>{user_name}</User>
               <Bio>{description}</Bio>
            </UserDesc>
            </TopHalf>
            <UserInfo>
                <Favourites>
                    <IconInfo src={FavArtist} />
                    <InfoBig>{favourite_artist}</InfoBig>
                    <InfoSmall>Favourite Artist</InfoSmall>
                </Favourites>

                <Favourites>
                    <IconInfo src={FavSong} />
                    <InfoBig>{favourite_song}</InfoBig>
                    <InfoSmall>Favourite Song</InfoSmall>
                </Favourites>
            </UserInfo>
        </ProfileTopBox>
    );
}

ProfileTop.defaultProps = {
    user_name:"Username",
    description:"Bio is going to be 255 characters, that gives users enoughs room to tell a little bit about themselves. Wow 255 characters is a lot, almost there, keep going, come on how much more do I have to write, im so close, what if I do the alphabet, abcdefjhijklmn",
    favourite_artist:"Artist Name",
    favourite_song:"Song Name"
}


export default ProfileTop;