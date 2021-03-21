import React from 'react';
import Button from '../../comps/Button';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

<<<<<<< HEAD
=======
// Images
import Logo from '../../imgs/BeatShareLogo.svg'
>>>>>>> bdf6ede9992b02e6d5dd9e3774802744a8c1c8d4

import '../../App.scss';



const Start = () => {
    return (
        <div className="Start_Main">
            <motion.div initial='hidden' animate='visible' variants={{
                hidden:{
                    scale:.8,
                    opacity:0
                },
                visible:{
                    scale:1,
                    opacity:1,
                    transiton:{
                        delay:.3
                    }
                }
            }}> 
            <div className="Logo">
                <img src="Logo.svg"/>
                <h1>BeatShare</h1>
            </div>
            </motion.div>

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