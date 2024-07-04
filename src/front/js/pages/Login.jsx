import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "/workspaces/sp65-final-project-g3/src/front/styles/loginForm.css"

export const Login = () => {
  const { actions } = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  // Función para traer el token de Spotify
  const [accessSpotifyToken, setAccessSpotifyToken] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMe = e => setRememberMe(e.target.checked);

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { email, password, rememberMe };
    console.log(dataToSend);
    const url = `${process.env.BACKEND_URL}/api/login`;
    const options = {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'content-type': 'application/json'
      }
    }
    const response = await fetch(url, options)
    if (!response.ok) {
      console.log('Error: ', response.status, response.statusText);
      return
    }
    const data = await response.json();
    localStorage.setItem("token", data.access_token)
    actions.setIsLogin(true)
    console.log(data.access_token);
    navigate('/dashboard')
  };

  // const handleSpotifyLogin = () => {
  //   //  API Access Token
  //   const authParameters = {
  //     method: 'Post',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: 'grant_type=client_credentials&client_id=' + '${process.env.CLIENT_ID}' + '&client_secret=' + '${process.env.CLIENT_SECRET}'
  //   }
  //   fetch('https://accounts.spotify.com/api/token', authParameters)
  //     .then(result => result.json())
  //     .then(data => setAccessSpotifyToken(data.access_token))
  // };



  const handleSpotifyLogin = () => {
    window.location = `${process.env.SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=${process.env.SCOPE}&response_type=token&show_dialog=true`;
  };

  const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue);
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
  
    return paramsSplitUp;
  };

  const WebApp = () => {
    useEffect(() => {
      if (window.location.hash) {
        const { access_token, expires_in, token_type } =
          getReturnedParamsFromSpotifyAuth(window.location.hash);
        localStorage.clear();
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);
      }
    })};

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
      <button className="button1">Forgot Password</button>
      <div className="d-flex mx-auto justify-content-center text-white mb-2">
        <div className="border align-self-center"></div>
        <span>Or login with</span>
        <div className="border align-self-center"></div>
      </div>
      <button type="button" className="button1 text-success mb-3" onClick={handleSpotifyLogin}><b>Spotify</b></button>
    </form>
  );
};
