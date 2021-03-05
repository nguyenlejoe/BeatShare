import React from 'react';
import Input from 'comps/Input';
import Button from 'comps/Button';


import "./login.scss";



const Login = () => {
    return (
        <div className="Main">
            <div className="Logo">
                <img src="Logo.svg"/>
                <h1>BeatShare</h1>
            </div>

            <div className="Login">
                Welcome Back!
                <Input text="Username"/>
                <input type="password" className='pass_input' placeholder='Password'/>
                <Button text='Login'/>
            </div>



      </div>

    );
}

export default Login;