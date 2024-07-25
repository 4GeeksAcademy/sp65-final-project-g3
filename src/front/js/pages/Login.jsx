import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loginForm.css";

// Spotify Auth App
import { SpotifyAuth } from "../component/SpotifyAuth.jsx";

export const Login = () => {
    const {store, actions} = useContext(Context)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState (false);
    const [accessSpotifyToken, setAccessSpotifyToken] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 
    const navigate = useNavigate()

    const handleEmailChange = (e) => { setEmail(e.target.value) };
    const handlePasswordChange = (e) => { setPassword(e.target.value) };
    const handleRememberMe = (e) => { setRememberMe(e.target.checked) };

    const handleReset = () => {
      setEmail('');
      setPassword('');
      setRememberMe(false);
      setErrorMessage(''); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = { email, password, rememberMe };
        const url = `${process.env.BACKEND_URL}/api/login`;
        const options = {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                'Content-Type' : 'application/json'
            }        
        }
        const response = await fetch(url, options)
        if (!response.ok) {
          if (response.status === 404) {
              setErrorMessage("User not found"); // Usuario no encontrado
          } else {
              setErrorMessage("Login failed"); // Fallo general
          }
          return;
      }
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.results));
        actions.setIsLogin(true);
        actions.setUser(data.results);
        navigate('/dashboard')
    };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <p id="heading">Login To Binaurapp</p>
      <div className="field">
        <span className="material-symbols-outlined">alternate_email</span>
        <input autoComplete="off" placeholder="Username" className="form-control" type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="field">
        <span className="material-symbols-outlined">lock</span>
        <input placeholder="Password" required={true} className="form-control" type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="mb-3 form-check">
        <input type="radio" className="form-check-input" id="rememberPassword" checked={rememberMe} onChange={handleRememberMe}></input>
        <label className="form-check-label text-white" htmlFor="rememberPassword">Remember me</label>
      </div>
      <div className="d-flex justify-content">
        <button className="button1 mx-auto">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button type="reset" className="button1 mx-auto" onClick={handleReset}>&nbsp;&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </div>
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>} 
      <button className="button1">Forgot Password</button>
      <div className="d-flex mx-auto justify-content-center text-white mb-2">
        <div className="border align-self-center"></div>
        <span>Or login with</span>
        <div className="border align-self-center"></div>
      </div>      
      <SpotifyAuth />
    </form>
  );
};
