import "./sidebar.css";
import axios from "axios";
import {Link} from 'react-router-dom'
import { useEffect, useState,useContext } from "react";
import { Context } from '../../context/Context';

function Sidebar() {
  const PF = "https://youandiblogapi.herokuapp.com/images/";
  const [cats, setCats] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res?.data);
    };
    getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle" >ABOUT ME</span>
            {user?.profilepic ? (
             <img className="aboutMeImg" src={PF + user?.profilepic} alt="..." />
              ) : ( 
                <span >📧</span>
              )}
        <p>
          {!user ? (
            <span>Click on Register to create your account and start writing articles..Its free😎😎!</span>
          ) : (
            <span>Contact me : {user.email}</span>
          )}
        </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              {cats?.length > 0  ? cats.map((cat,index) => (
                <Link to ={`/?cat=${cat.name}`} key={index} className="link">
                 <li className="sidebarListItem">{cat.name}</li>
                 </Link>
              )) : null}
                </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <a href="https://www.facebook.com/kelcho.spense/"><i className="topIcon fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/_kevincomba"><i className="topIcon fa-brands fa-twitter-square"></i></a>
              <a href="https://www.instagram.com/kelcho_spense"><i className="topIcon fa-brands fa-instagram-square"></i></a>
              <a href="https://www.linkedin.com/in/kevin-comba-152b06227/"><i className="topIcon fa-brands fa-linkedin-in">  </i></a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar