import "./write.css"
import {useContext, useEffect, useState} from 'react'
import {Context} from '../../context/Context'
import axios from 'axios';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Write() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);
  const [checkList, setCheckList] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {  
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCheckList(res?.data);
    };
    getCats();
  }, [])
  

  const handleSumbit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      file,
      categories:checked,
      username: user.username    
    }; 
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    } 
    try {
      const res = await axios.post("/posts", newPost)
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      
    }   

  }
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  
  return (
    <div className="write">
      {file && (
        <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt="invalid Imagefile😒"
      />
      )}
        <form className="writeForm" onSubmit={handleSumbit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
                <input type="text" placeholder="Title"className="writeInput" autoFocus={true} onChange={e=> setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e=> setDesc(e.target.value)}></textarea>
                
            </div>                  

            <button className="writeSubmit" type="sumbit">Publish</button>
              <div className="selectCategory">
                <div className="checkList">
                <div className="title">Blog category:</div>
                <div className="list-container">
                {checkList.map((item, index) => (
                  <FormGroup key={index}>
                    <FormControlLabel control={<Checkbox value={item.name} onChange={handleCheck} color="secondary"/>} label={item.name} />
                  </FormGroup>
                ))}
                </div>
              </div>
            </div>  
        </form>
    </div>
  )
}

export default Write