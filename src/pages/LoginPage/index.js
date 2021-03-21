import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import Input from '../../comps/Input';
import Button from '../../comps/Button';
import Logo from '../../imgs/BeatShareLogo.svg'
import Back from '../../imgs/back.png'



import '../../App.scss';

// let token = null;


const Login = () => {
    const history = useHistory();
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [showlogin, setShow] = useState(true)

    const CheckStorage = async()=>{
        var resp = await axios.get("http://localhost:8080/api/authorize")
        console.log(resp.data);
            if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token"){
                history.push("/HomePage");
                console.log("Good token")
            }else{
                history.push("/LoginPage");
                console.log("Bad token")
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
            const token = resp.data.accessToken;
            const id = resp.data.user.id;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('id', id);
            console.log(id)
            axios.defaults.headers.common['Authorization'] = "Bearer " + token
            history.push("/HomePage", {
                id: resp.data.user.id
            })
        }
    }   




    useEffect(()=>{
        CheckStorage()
    },[])

    return (
        <div className="Login_Main">
            <div className="Back">
                <Link to='/'><img src={Back} /></Link>
            </div>
            <div className="Logo">
                <img src={Logo}/>
                <h1 className='logo_text'>BeatShare</h1>
            </div>

            <div className="Login">
                Welcome Back!
                <div className="inputs">
                    <input text="Username" className='pass_input' placeholder='Username'onChange={(e)=>setUn(e.target.value)}/>
                    <input type="password" className='pass_input' placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
                </div>
                <div className="button">
                    <Button text='Login' onClick={Auth}/>
                </div>
                
            </div>



      </div>

    );
}

export default Login;