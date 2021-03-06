import React from 'react';
import Button from '../../comps/Button';

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
            <Button text="Login"/>
            <p className="question">New to BeatShare?</p>
            <Button text="Sign Up"/>
        </div>



      </div>

    );
}

export default Start;