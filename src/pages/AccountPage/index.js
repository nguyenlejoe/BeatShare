import React, {useState, useEffect} from 'react';
import NavBar from "../../comps/NavBar";
import ProfileTop from "../../comps/ProfileTop"
import MenuButton from '../../comps/MenuButton';
import ProfileMenu from '../../comps/ProfileMenu';
import ProfilePost from '../../comps/ProfilePost';
import {CSSTransition} from 'react-transition-group';
import { motion } from 'framer-motion';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';
import '../../App.scss';

const pageTransition = {
    in:{
        opacity:1,
        y:0
    },
    out:{
        opacity:0,
        y:-100
    }
}

const Account = () => {
    const history = useHistory();
    const params = useParams();
    const [show, setShow] = useState(false);
    const [user , setUser] = useState({});
    const [otheruser , setOtherUser] = useState({});
    const [posts, setPosts] = useState([])
    const [otherposts, setotherPosts] = useState([])
    const location = useLocation();


    const CheckStorage = async()=>{
        var resp = await axios.get("/api/authorize")
        console.log(resp.data);
            if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token"){
                console.log("Good token")
            }else{
                history.push("/LoginPage");
                console.log("Bad token")
            }
    }   



    const GetOtheruser = async () => {
        let resp = await axios.get(`/api/user/${params.id}`)
        setOtherUser(resp.data[0])
        console.log(resp);
    }

    const GetUser = async () => {
        let id = sessionStorage.getItem("id");
        let resp = await axios.get(`/api/user/${id}`)
        setUser(resp.data[0])
        console.log(resp);
    }


    const GetPosts = async() => {
        var resp = await axios.get("/api/myposts")
        setPosts(resp.data.posts)
        console.log(posts);
    }

    
    const GetOtherPosts = async() => {
        var resp = await axios.get(`/api/userPosts/${params.id}`)
        setotherPosts(resp.data.posts)
        console.log(posts);
    }



    useEffect(()=>{
        CheckStorage()
        GetOtheruser()
        GetUser()
        GetPosts()
        GetOtherPosts()
    },[])

    if(location.pathname === "/AccountPage"){
    return (
        <div className="Profile_Main">
            <motion.div  initial='out' animate='in' exit='out' variants={pageTransition}>
            <div className="menubtn">
                <MenuButton onClick={()=> setShow(!show)}/>
            </div>

            <CSSTransition in={show}
        timeout={300}
        classNames="show"
        unmountOnExit
        onExited={() => setShow(null)}
        >
                            <div className='profile_menu'>
            <ProfileMenu />  
            </div>
        </CSSTransition>
        
        <div className='profile_top'>            
            <ProfileTop 
                user_name={user.user_name}
                favourite_artist={user.favourite_artist}
                favourite_song={user.favourite_song}
                user_bio={user.user_bio}
                img={user.profile_picture}
            />
        </div>

        
            <div className='myprofile_posts'>
            {posts && posts.map(o=>
                <ProfilePost 
                img_url={o.img_url}
                song_artist={o.song_artist}
                song_name={o.song_name}
                />
                )}
            </div>
            </motion.div>
            <div className="Nav">
                <NavBar select={2}/>
            </div>
        </div>
    );}else {
        return (
            <div className="Profile_Main">
                <ProfileTop 
                    user_name={otheruser.user_name}
                    favourite_artist={otheruser.favourite_artist}
                    favourite_song={otheruser.favourite_song}
                    user_bio={otheruser.user_bio}
                    img={otheruser.profile_picture}
                />
    
                <div className='profile_posts'>
              {otherposts && otherposts.map(o=>
                  <ProfilePost 
                  img_url={o.img_url}
                  song_artist={o.song_artist}
                  song_name={o.song_name}
                />
                )}
            </div>
                
                <div className="Nav">
                    <NavBar select={0}/>
                </div>
            </div>
        );
    }
}

export default Account;