import { useContext, useState } from 'react';
import Sidebar from '../../Components/sidebar/Sidebar'
import { Context } from '../../context/Context';
import './settings.css'
import axios from 'axios';

function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const newPost = {      
     userId: user._id,
      username:username,
      email:email,
      password:password,
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.profilepic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.put("/users/" + user._id, newPost)
        setSuccess(true)
    } catch (error) {  

    }
}

  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete ACCOUNT</span>
          </div>
          <form className="settingsForm" onSubmit={handleSumbit}>
            <label >Profile Picture</label>
            <div className="settingsPP">
            {file && (
              <img
              className="writeImg"
              src={URL.createObjectURL(file)}
              alt="invalid Imagefile😒"
              />
              )}
          
            <label htmlFor="fileInput"><i className="settingsPPIcon fa-solid fa-user"></i></label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
              className="settingsPPInput"
            />
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username}   onChange={e=>setUsername(e.target.value)} required/>
            <label>Email</label>
            <input type="email" placeholder={user.email}  onChange={e=>setEmail(e.target.value)} required/>
            <label>Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
            {
              succes && (
                <span style={{color:"green"}}>Successfully Updated Your Profile</span>
              )
            }
          </form>
        </div>
          <Sidebar />
        
    </div>
  )
}

export default Settings