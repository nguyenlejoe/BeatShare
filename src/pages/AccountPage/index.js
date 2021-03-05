import React from 'react';
import NavBar from "comps/NavBar";
import PostBtn from "comps/PostBtn";
import PFP from "comps/Pfp"
import Button from "comps/Button"


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
            <img src="menuBtn.svg" />
            <br></br>
            <img src="backBtn.svg" />
            <br></br>
            <img src="Logo.svg"/>
            <br></br>
            <img src="filledHeart.svg" />
            <br></br>
            <img src="emptyHeart.svg" />
            <br></br>

            {/* end of kai testing his comps */}
            <div className="Nav">
                <NavBar />
            </div>
        </div>
    );
}

export default Account;