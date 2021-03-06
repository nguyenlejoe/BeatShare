import React from 'react';
import NavBar from "../../comps/NavBar";
import PostBtn from "../../comps/PostBtn";
import PFP from "../../comps/Pfp"
import Button from "../../comps/Button"
import MenuBtn from "../../images/menuBtn.svg"
import BackBtn from "../../images/backBtn.svg"
import Logo from "../../images/BeatShareLogo.svg"
import ProfileTop from "../../comps/ProfileTop"

import '../../App.scss';

const Account = () => {
    return (
        <div className="Main">

            {/* Kai testing his comps  */}
            
            <br></br>
            <PostBtn />
            <br></br>
            <PFP />
            <br></br>
            <Button text="Log in"/>
            <br></br>
            <Button text="Sign up"/>
            <br></br>
            <img src={MenuBtn} />
            <br></br>
            <img src={BackBtn} />
            <br></br>
            <img src={Logo} />

            {/* end of kai testing his comps */}
            <div className="Nav">
                <NavBar />
            </div>
        </div>
    );
}

export default Account;