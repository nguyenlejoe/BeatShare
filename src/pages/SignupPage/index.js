import React, {useState, useEffect} from 'react';
import Input from "../../comps/Input";
import Button from '../../comps/Button';

import axios from 'axios';

// Images
import PFP from '../../comps/Pfp';

import '../../App.scss';



const SignUp = () => {
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [img, setImg] = useState("");
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");

    const HandleRegister = async()=>{
        const resp = await axios.post("http://localhost:8080/api/create_user",{
            user_name:un,
            password:pass,
            profile_picture:img,
            favourite_artist:artist,
            favourite_song:song
        })
        console.log(resp);
    }




    return (
        <div className="Main">
            <div className="Top">
                {/* Add pfp functionality here */}
                <PFP />
            </div>

        <div className="Signup">
            {/* <Input text="Email Address"/> */}
            <Input text="Username" onChange={(e)=>setUn(e.target.value)}/>
            <input type="text" className='password_input' placeholder='Image Link (Temp input)' onChange={(e)=>setImg(e.target.value)}/>
            <input type="password" className='password_input' placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
            <input type="text" className='password_input' placeholder='Favourite Artist' onChange={(e)=>setArtist(e.target.value)}/>
            <input type="text" className='password_input' placeholder='Favourite Song' onChange={(e)=>setSong(e.target.value)}/>
            {/* <input type="password" className='password_input' placeholder='Re-enter Password'/> */}
        </div>

        <div className="Proceed">
            <Button text="Sign Up" onClick={HandleRegister}/>
        </div>




      </div>

    );
}

export default SignUp;