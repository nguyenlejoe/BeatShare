import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PFP from "../../comps/Pfp";
import { NavLink as Link } from 'react-router-dom';

// Images
import FavArtist from '../../imgs/profile_selected.png';
import FavSong from '../../imgs/eighthnote.png';

const ProfileTopBox = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 300px;
    justify-self: center;
    background:linear-gradient(145deg, #242424, #2b2b2b);
    border-radius: 0px 0px 30px 30px;
    background: #2F2F2F;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.51), -2px -2px 12px rgba(0, 0, 255, 0.19), 0px 0px 22px 5px rgba(0, 0, 0, 0.19), inset 0px 1px 10px rgba(255, 255, 255, 0.2);
`

const TopHalf = styled.div`
    display: flex; 
    flex-direction: row;
    // position: relative;
    width: 100%;
    height: 200px;
`

const PfpButton = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 40%;
    height: 250px;
    //background-color:blue;
    // position: relative;
`

const UserDesc = styled.div`
    /* display: flex; 
    flex-direction: column; */
    width: 60%;
    height: 200px;
    //background-color:yellow;
    // position: relative;
`

const User = styled.h2`
    padding-top:60px;
    font-size:20px;
`;

const Bio = styled.p`
    width: 90%;
    padding-bottom:30px;
    font-size:13px;
`;

const UserInfo = styled.div`
    display:flex;
    justify-content:center;
    
`

const Favourites = styled.div`
    //display:flex;
    position: relative;
    //flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 0px 30px 30px 30px;
    text-align:center;
`;

const IconInfo = styled.img`
    width:20px;
    height:27px;
    display:block;
    margin-left: auto;
    margin-right: auto;
`;

const InfoBig = styled.p`
    font-size: 16px;
    margin: 5px;
`;

const InfoSmall = styled.p`
    font-size: 12px;
    margin: 5px;
`;

const ProfileTop = ({user_name, user_bio, favourite_artist, favourite_song ,img}) => {
    
    return (
        <ProfileTopBox>
            <TopHalf>
            <PfpButton>
                <PFP height='90px' width='90px' img={img}/>
            </PfpButton>
            <UserDesc>
               <User>{user_name}</User>
               <Bio>{user_bio}</Bio>
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


}


export default ProfileTop;