import React from 'react';
import Input from '../../comps/Input';

// Images
import Logo from '../../images/BeatShareLogo.svg'

import "./login.scss";



const Login = () => {
    return (
        <div className="Main">
            <div className="Logo">
                <img src={Logo}/>
                <h1>BeatShare</h1>
            </div>

            <div className="Login">
                Welcome Back!
                <Input text="Username"/>
                <input type="password" className='pass_input' placeholder='Password'/>
            </div>



      </div>

    );
}

export default Login;