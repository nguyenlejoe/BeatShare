import React from 'react';
import Button from '../../comps/Button';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

// Images
import Logo from '../../imgs/BeatShareLogo.svg'

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
                <img src={Logo}/>
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