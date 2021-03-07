import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

import Input from '../../comps/Input';
import Button from '../../comps/Button';

// Images
import Logo from '../../images/BeatShareLogo.svg'

import '../../App.scss';

// let token = null;


const Login = () => {
    const history = useHistory();
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [showlogin, setShow] = useState(true)

    const CheckStorage = async()=>{
        var token = await sessionStorage.getItem("token");
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            var resp = await axios.get("http://localhost:8080/api/authorize")
                console.log("verification", resp.data);
                if(resp.data ==='no token sent to server' || resp.data === 'Invalid token'){
                    console.log("No token")
                    history.push("/LoginPage");
                }else{
                    console.log("No token")
                    history.push("/");
                }
        }
    }

    
    const Auth = async () => {
        var resp = await axios.post("http://localhost:8080/api/login",{
            user_name:un, //hello
            password:pass //pass123
        });

        console.log(resp.data)
        if(resp.data === "incorrect username" || resp.data === "incorrect password"){
            console.log("failed to login")
        }else{
            axios.defaults.headers.common['Authorization'] = resp.data
            sessionStorage.setItem('token', resp.data);
            console.log("identifier/token", resp.data);
            history.push("/")
        }
    }   




    useEffect(()=>{
        CheckStorage()
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
            </div>



      </div>

    );
}

export default Login;