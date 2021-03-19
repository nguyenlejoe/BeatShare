import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from "../../comps/NavBar";
import PostBtn from "../../comps/PostBtn";
import PFP from "../../comps/Pfp"
import Button from "../../comps/Button"
import EditTop from "../../comps/EditTop"
import MenuBtn from "../../imgs/menuBtn.svg"
import BackBtn from "../../imgs/backBtn.svg"
import Logo from "../../imgs/BeatShareLogo.svg"
import SettingsModal from "../../comps/SettingsModal"
import Input from "../../comps/Input"
import TextArea from"../../comps/TextArea"

import '../../App.scss';
import axios from 'axios';

const EditAccount = () => {
    const [user , setUser] = useState({});
    const [un, setUn] = useState("");
    const [img, setImg] = useState("");
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [bio, setBio] = useState("");
    const history = useHistory()

    const GetUser = async () => {
        let id = sessionStorage.getItem("id")
        let resp = await axios.get(`http://localhost:8080/api/user/${id}`, {           
        })
        setUser(resp.data[0])
        setUn(resp.data[0].user_name)
        setImg(resp.data[0].profile_picture)
        setArtist(resp.data[0].favourite_artist)
        setSong(resp.data[0].favourite_song)
        setBio(resp.data[0].user_bio)
        
        console.log(resp.data)



    }

    const EditUser = async () => {
        let resp = await axios.patch(`http://localhost:8080/api/user/edit`, {
            user_name:un,
            profile_picture:img,
            favourite_artist:artist,
            favourite_song:song,
            user_bio: bio            
            })
            console.log(resp.data)
            GetUser();
    }

    useEffect(()=>{
        GetUser()
    },[])
    
    return (
        <div className="Edit_Main">
            <EditTop 
                username={un}
            />
            <div className="editboxes">
            <h3>Your Username</h3>
            <Input 
                text={un}
                onChange={(e)=>setUn(e.target.value)}
            />
            <h3>Who is your favourite artist?</h3>
            <Input 
                text={artist}
                onChange={(e)=>setArtist(e.target.value)}
            />
            <h3>What is your favourite song?</h3>
            <Input 
                text={song}
                onChange={(e)=>setSong(e.target.value)}
            />
            <h3>Tell us about your music taste</h3>
            <TextArea 
                text={bio}
                onChange={(e)=>setBio(e.target.value)}
            />

            <Button
            text="Confirm Changes"
            onClick={()=>{
                EditUser()
                history.push("/AccountPage")

            }}
            />
            </div>
            <div className="Nav">
                <NavBar select={2}/>
            </div>
        </div>
    );
}

export default EditAccount;