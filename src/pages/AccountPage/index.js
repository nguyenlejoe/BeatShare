import React, {useState, useEffect} from 'react';
import NavBar from "../../comps/NavBar";
import ProfileTop from "../../comps/ProfileTop"
import MenuBtn from '../../imgs/menuBtn.svg';
import ProfileMenu from '../../comps/ProfileMenu';
import ProfilePost from '../../comps/ProfilePost';


import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import '../../App.scss';

const Account = () => {
    const history = useHistory();
    const params = useParams();
    const [show, setShow] = useState(false);
    const [user , setUser] = useState({});
    const [posts, setPosts] = useState([])


    // Get single user
    // const UserInfo = async() => {
    //     var resp = await axios.get()
    // }
    // const CheckStorage = async()=>{
    //     var resp = await axios.get("http://localhost:8080/api/authorize")
    //     console.log(resp.data);
    //         if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token"){
    //             console.log("Good token")
    //         }else{
    //             history.push("/LoginPage");
    //             console.log("Bad token")
    //         }
    // }   

    // const CheckToken = async () => {
    //     const resp = await axios.get("http://localhost:8080/api/users/1");
    //     console.log(resp.data);
    //     if( resp.data !== "expired" && resp.data !== "no token"){
    //         setUser ({
    //             ...resp.data
    //         })
    //         console.log(user);
    //     }
    // }

    const GetUser = async () => {
        let id = sessionStorage.getItem("id")
        let resp = await axios.get(`http://localhost:8080/api/user/${id}`)
        setUser(resp.data[0])
        console.log(resp);
        console.log(sessionStorage.getItem("id"));
    }

    const GetPosts = async() => {
        var resp = await axios.get("http://localhost:8080/api/posts")
        setPosts(resp.data.posts)
        console.log(posts);
    }

    useEffect(()=>{
        // UserInfo()
        // CheckToken()
        GetUser()
        // CheckStorage()
        GetPosts()
    },[])
    return (
        <div className="Profile_Main">

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



            <ProfileTop 
                user_name={user.user_name}
                favourite_artist={user.favourite_artist}
                favourite_song={user.favourite_song}
                user_bio={user.user_bio}
            />

            <div className='profile_posts'>
                <ProfilePost posts={posts}/>
            </div>
            
            <div className="Nav">
                <NavBar select={2}/>
            </div>
        </div>
    );
}

export default Account;