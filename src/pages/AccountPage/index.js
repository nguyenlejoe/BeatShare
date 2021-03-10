import React, {useState} from 'react';
import NavBar from "../../comps/NavBar";
import ProfileTop from "../../comps/ProfileTop"
import MenuBtn from '../../images/menuBtn.svg';
import ProfileMenu from '../../comps/ProfileMenu';
import PFP from '../../comps/Pfp';

import '../../App.scss';

const Account = () => {
    const [show, setShow] = useState(false);


    return (
        <div className="Main">

            <div className="menubtn">
                <img src={MenuBtn} onClick={()=> setShow(!show)}/>
            </div>


            {show ? (
                            <div className='profile_menu'>
            <ProfileMenu />  
            </div>
            )          
            : null
        }



            <ProfileTop />
            
            
            <div className="Nav">
                <NavBar />
            </div>
        </div>
    );
}

export default Account;