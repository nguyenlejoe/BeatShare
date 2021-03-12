import React, {useState, useEffect} from 'react';
import NavBar from "../../comps/NavBar";
import ProfileTop from "../../comps/ProfileTop"
import MenuBtn from '../../images/menuBtn.svg';
import ProfileMenu from '../../comps/ProfileMenu';
import ProfilePost from '../../comps/ProfilePost';

import axios from 'axios';
import '../../App.scss';

const Account = () => {
    const [show, setShow] = useState(false);
    const [user , setUser] = useState([]);
    const [posts, setPosts] = useState([])


    // Get single user
    // const UserInfo = async() => {
    //     var resp = await axios.get()
    // }

    const GetPosts = async() => {
        var resp = await axios.get("http://localhost:8080/api/posts")
        setPosts(resp.data.posts)
        console.log(posts);
    }

    useEffect(()=>{
        // UserInfo()
        GetPosts()
    },[])

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

            <div className='profile_posts'>
                <ProfilePost />
            </div>
            
            
            <div className="Nav">
                <NavBar />
            </div>
        </div>
    );
}

export default Account;