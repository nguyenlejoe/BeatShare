import React from 'react';
import NavBar from "../../comps/NavBar";
import ProfileTop from "../../comps/ProfileTop"
import MenuBtn from '../../images/menuBtn.svg';

import '../../App.scss';

const Account = () => {
    return (
        <div className="Main">
            
            <img src={MenuBtn} className="menu"/>
            
            <ProfileTop />
            
            <div className="Nav">
                <NavBar />
            </div>
        </div>
    );
}

export default Account;