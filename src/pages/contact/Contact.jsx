import "./contact.css";
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Approval from '@mui/icons-material/Approval';
import Twitter from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import medium from "../../logo-icons/medium.png";
import linkedin from "../../logo-icons/linkedin.gif";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pfao42v",
        "template_yt30mqx",
        formRef.current,
        "lZ-d8BVw-2gxm3YrP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Reach Out to any of our Social-Media</h1>
          <div className="c-info">
            <div className="c-info-item">
            <IconButton><Phone className="c-icon" style={{color:"green"}}/></IconButton>
              +254715364294
            </div>
            <div className="c-info-item">
            <IconButton><Email className="c-icon" style={{color:"green"}}/></IconButton>
              kelchospense88@gmail.com
            </div>
            <div className="c-info-item">
            <IconButton><Approval className="c-icon" style={{color:"green"}}/></IconButton>
              Kagio, Ndia, Kirinyaga, Kenya. - Postal Code: 1 0306
            </div>
            <div className="c-info-item">
              <img src={linkedin} alt="" className="c-icon" />
                <a  href="https://www.linkedin.com/in/kevin-comba-152b06227/" style={{fontWeight:"bolder",color:"brown",textDecoration: "none"}}>kevin-comba</a>
            </div>
            <div className="c-info-item">
            <IconButton><Twitter className="c-icon" style={{color:"skyblue"}}/></IconButton>
              <a  href="https://twitter.com/spense_kelcho" style={{fontWeight:"bolder",color:"brown",textDecoration: "none"}}>spense_kelcho</a>
             </div>
             <div className="c-info-item">
              <img src={medium} alt="" className="c-icon" />
              <a  href="https://medium.com/@kevin_comba" style={{fontWeight:"bolder",color:"brown",textDecoration: "none"}}>@kevin_comba</a>
             </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            tech talk.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" required />
            <input  type="text" placeholder="Subject" name="user_subject" required/>
            <input  type="text" placeholder="Email" name="user_email" required/>
            <textarea  rows="5" placeholder="Message" name="message" required/>
            <button className="btnsub">Submit</button>
            {done && "Mail sent successful.Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
