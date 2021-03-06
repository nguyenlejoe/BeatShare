import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Input from '../../comps/Input';
import Button from '../../comps/Button';

// Images
import Logo from '../../images/BeatShareLogo.svg'

import "./login.scss";

// let token = null;

const Login = () => {
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    
    const Auth = async () => {
        var resp = await axios.post("http://localhost:8080/api/login",{
            user_name:un, //hello
            password:pass //pass123
        });
        axios.defaults.headers.common['Authorization'] = resp.data

        console.log("identifier/token", resp.data);
    }

    // const Restricted = async() =>{
    //     var resp2 = await axios.post("http://localhost:8080/api/restricted",{
    //          itemname:"item 1"
    //     },{
    //         headers:{
    //             'Authorization':`${token}`
    //         }
    //     });
    //     console.log("restricted", resp2.data)
    // }


    useEffect(()=>{
    },[])

    return (
        <div className="Main">
            <div className="Logo">
                <img src={Logo}/>
                <h1>BeatShare</h1>
            </div>

            <div className="Login">
                Welcome Back!
                <Input text="Username" onChange={(e)=>setUn(e.target.value)}/>
                <input type="password" className='pass_input' placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
                <Button text='Login' onClick={Auth}/>
                {/* <Button text='Restricted' onClick={Restricted}/> */}
            </div>



      </div>

    );
}

export default Login;