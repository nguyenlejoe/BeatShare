import React from 'react';
import Input from "../../comps/Input";
import Button from '../../comps/Button';

// Images
import Logo from '../../images/BeatShareLogo.svg'

import "./signup.scss"



const SignUp = () => {
    return (
        <div className="Main">
            <div className="Logo">
                <img src={Logo}/>
                <h1>BeatShare</h1>
            </div>

        <div className="Signup">
            <Input text="Email Address"/>
            <Input text="Username"/>
            <input type="password" className='password_input' placeholder='Password'/>
            <input type="password" className='password_input' placeholder='Re-enter Password'/>
        </div>

        <div className="Proceed">
            <Button text="Next"/>
        </div>




      </div>

    );
}

export default SignUp;