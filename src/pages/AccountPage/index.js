import React, {useState} from 'react';
import NavBar from "../../comps/NavBar";
import ProfileTop from "../../comps/ProfileTop"
import MenuBtn from '../../images/menuBtn.svg';
import ProfileMenu from '../../comps/ProfileMenu';

import '../../App.scss';

const Account = () => {
    const [show, setShow] = useState(true);


    return (
        <div className="Main">
            <img src={MenuBtn} className="menubtn" onClick={()=> setShow(!show)}/>

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