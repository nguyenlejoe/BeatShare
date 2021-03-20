import React, {useState, useEffect} from 'react';
import Input from "../../comps/Input";
import Button from '../../comps/Button';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Back from '../../imgs/back.png'


// Images
import PFP from '../../comps/Pfp';

import '../../App.scss';



const SignUp = () => {
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [img, setImg] = useState("");
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [bio, setBio] = useState("");
    const history = useHistory()

    // const HandleRegister = async()=>{
    //     const resp = await axios.post("http://localhost:8080/api/create_user",{
    //         user_name:un,
    //         password:pass,
    //         profile_picture:img,
    //         favourite_artist:artist,
    //         favourite_song:song,
    //         user_bio: bio
    //     })
        
    //     const token = resp.data.accessToken;
    //     const id = resp.data.user.id;
    //     sessionStorage.setItem('token', token);
    //     sessionStorage.setItem('id', id);
    //     axios.defaults.headers.common['Authorization'] = "Bearer " + token
    //     console.log(resp);
    //     history.push("/HomePage")
        
       
    // }

        
    const HandleRegister = async event => {

        event.preventDefault()

        const data = new FormData()
        data.append('image', img)
        data.append('username', un)
        data.append('password', pass)
        data.append('favourite_artist', artist)
        data.append('favourite_song', song)
        data.append('user_bio', bio)
      

        let resp = await axios.post("http://localhost:8080/api/create_user", data)
        console.log(resp.data)

        const token = resp.data.accessToken;
        const id = resp.data.user.id;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('id', id);
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
        console.log(resp);
        history.push("/HomePage")
        history.push("/HomePage")
    }



    return (
        <div className="Main">
            <div className="Top">
                <div className="Back">
                    <Link to='/'><img src={Back} /></Link>
                </div>
                <PFP />
                <input type="file" accept="image/*" filename={img} onChange={e => setImg(e.target.files[0])}></input>
            </div>

        <form className="Signup" onSubmit={HandleRegister}>
            {/* <Input text="Email Address"/> */}
            <input type="text" className='password_input' placeholder='Username' onChange={(e)=>setUn(e.target.value)}/>
            <input type="password" className='password_input' placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
            <input type="text" className='password_input' placeholder='Favourite Artist' onChange={(e)=>setArtist(e.target.value)}/>
            <input type="text" className='password_input' placeholder='Favourite Song' onChange={(e)=>setSong(e.target.value)}/>
            <input type="text" className='password_input' placeholder='Tell us about your music taste.' onChange={(e)=>setBio(e.target.value)}/>
            {/* <input type="password" className='password_input' placeholder='Re-enter Password'/> */}
            <div className="Proceed">
            <Button text="Sign Up" type="submit"/>
            </div>
        </form>

  




      </div>

    );
}

export default SignUp;