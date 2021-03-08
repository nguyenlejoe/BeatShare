import React from 'react';
import Button from '../../comps/Button';
import {Link} from 'react-router-dom';

// Images
import Logo from '../../images/BeatShareLogo.svg'

import '../../App.scss';



const Start = () => {
    return (
        <div className="Main">
            <div className="Logo">
                <img src={Logo}/>
                <h1>BeatShare</h1>
            </div>

        <div className="Log_sign">
            <p className="question">Already have an account?</p>
        
        <Link className='link' to='/LoginPage'>
        <Button text="Login"/>
        </Link>
            
            <p className="question">New to BeatShare?</p>
        <Link className='link' to='SignupPage'>
        <Button text="Sign Up"/>
        </Link>

        </div>



      </div>

    );
}

export default Start;