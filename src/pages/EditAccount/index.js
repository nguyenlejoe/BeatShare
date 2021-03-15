import React, { useEffect, useState } from 'react';
import NavBar from "../../comps/NavBar";
import PostBtn from "../../comps/PostBtn";
import PFP from "../../comps/Pfp"
import Button from "../../comps/Button"
import EditTop from "../../comps/EditTop"
import MenuBtn from "../../images/menuBtn.svg"
import BackBtn from "../../images/backBtn.svg"
import Logo from "../../images/BeatShareLogo.svg"
import SettingsModal from "../../comps/SettingsModal"
import Input from "../../comps/Input"
import TextArea from"../../comps/TextArea"

import '../../App.scss';
import axios from 'axios';

const EditAccount = () => {

    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [user , setUser] = useState({});
    const [img, setImg] = useState("");
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [bio, setBio] = useState("");

    const GetUser = async () => {
        let id = sessionStorage.getItem("id")
        let resp = await axios.get(`http://localhost:8080/api/user/${id}`, {
        user_name:un,
        password:pass,
        profile_picture:img,
        favourite_artist:artist,
        favourite_song:song,
        user_bio: bio            
        })
        setUser(resp.data[0])
        console.log(resp.data)



    }

    useEffect(()=>{
        GetUser()
    },[])
    
    return (
        <div className="Edit_Main">
            <EditTop 
                username={user.user_name}
            />
            <div className="editboxes">
            <h3>Your Username</h3>
            <Input 
                text={user.user_name}
                onChange={(e)=>setUn(e.target.value)}
            />
            <h3>Who is your favourite artist?</h3>
            <Input 
                text={user.favourite_artist}
                onChange={(e)=>setArtist(e.target.value)}
            />
            <h3>What is your favourite song?</h3>
            <Input 
                text={user.favourite_song}
                onChange={(e)=>setSong(e.target.value)}
            />
            <h3>Tell us about your music taste</h3>
            <TextArea 
                text={user.user_bio}
                onChange={(e)=>setBio(e.target.value)}
            />

            <Button
            text="Confirm Changes"
            onClick={GetUser}
            />
            </div>
            <div className="Nav">
                <NavBar />
            </div>
        </div>
    );
}

export default EditAccount;