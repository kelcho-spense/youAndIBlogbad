import Home from  "./pages/home/Home"
import TopBar from "./Components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
      <Router> 
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={ user ? <Home/> :<Register />} />
        <Route path="/login" element={ user ? <Home/> :<Login />} />        
        <Route path="/write" element={ user ? <Write/> :<Register />} />
        <Route path="/settings" element={ user ? <Settings/> :<Register />} />
        <Route path="/post/:postId" element={<Single />} />
     </Routes>
      </ Router>
    </div>
  );
}

export default App;
