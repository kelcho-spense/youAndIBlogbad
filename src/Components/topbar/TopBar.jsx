import "./topbar.css";
import {Link}  from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";

function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "https://youandiblogapi.herokuapp.com/images/";
  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }
  
  return (
    <div className="top">
        <div className="topLeft">
        <a href="https://www.facebook.com/kelcho.spense/"><i className="topIcon fa-brands fa-facebook-f"></i></a>
        <a href="https://twitter.com/_kevincomba"><i className="topIcon fa-brands fa-twitter-square"></i></a>
        <a href="https://www.instagram.com/kelcho_spense"><i className="topIcon fa-brands fa-instagram-square"></i></a>
        <a href="https://www.linkedin.com/in/kevin-comba-152b06227/"><i className="topIcon fa-brands fa-linkedin-in"></i></a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            
            <li className=" topListItem">
              <Link className="link" to ="/">HOME</Link>
            </li>            
            <li className=" topListItem">
              <Link className="link" to ="/write">WRITE</Link>
            </li>
            <li className=" topListItem">
              <Link className="link" to ="/contact">CONTACT</Link>
            </li>
            <li className=" topListItem"
            onClick={handleLogout}
            >            
              {user && "LOGOUT"}
            </li>
            
          </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <Link to ="/settings">
                {
                  user.profilepic === "" ? (
                    <img  className="topImg " src={`https://avatars.dicebear.com/api/pixel-art/${user.username}.svg`} alt="..." />
                  ):(
                    <img  className="topImg " src={PF + user.profilepic} alt="..." />
                  )
                }
                
              </Link>
            ) : (
              <ul className="topList">
                  <li className="topListItem">
                      <Link className="link" to ="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                      <Link className="link" to ="/Register">REGISTER</Link>
                </li>
              </ul>
            )
          }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar