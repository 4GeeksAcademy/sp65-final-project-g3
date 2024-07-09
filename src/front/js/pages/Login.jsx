import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loginForm.css"

export const Login = () => {
    const {store, actions} = useContext(Context)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState (false);
    const [accessSpotifyToken, setAccessSpotifyToken] = useState("");
    const navigate = useNavigate()

    const handleEmailChange = (e) => { setEmail(e.target.value) };
    const handlePasswordChange = (e) => { setPassword(e.target.value) };
    const handleRememberMe = (e) => { setRememberMe(e.target.checked) };

    const handleReset = () => {
      setEmail('');
      setPassword('');
      setRememberMe(false);
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
            console.log('Error: ', response.status, response.statusText);
            return 
        }
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.results));
        actions.setIsLogin(true);
        actions.setUser(data.results);
        navigate('/dashboard')
    };

    // // Login Spotify Client credentials
    // const client_id = process.env.CLIENT_ID; 
    // const client_secret = process.env.CLIENT_SECRET;

    // async function getSpotifyToken() {
    //     const response = await fetch('https://accounts.spotify.com/api/token', {
    //       method: 'POST',
    //       body: new URLSearchParams({
    //         'grant_type': 'client_credentials',
    //       }),
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    //       },
    //     });
      
    //     return await response.json();
    //   }
      
    //   async function getTrackInfo(spToken) {
    //     const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
    //       method: 'GET',
    //       headers: { 'Authorization': 'Bearer ' + spToken },
    //     });
      
    //     return await response.json();
    //   }
      
    //   getSpotifyToken().then(response => {
    //     getTrackInfo(response.spToken).then(profile => {
    //       console.log(profile)
    //     })
    //   });

  // Hasta aquí

    //   Login Spotify AUTH_CODE
    //   var express = require('express');
    //   var request = require('request');
    //   var crypto = require('crypto');
    //   var cors = require('cors');
    //   var querystring = require('querystring');
    //   var cookieParser = require('cookie-parser');
      
    //   var client_id = process.env.CLIENT_ID; // your clientId
    //   var client_secret = process.env.CLIENT_SECRET; // Your secret
    //   var redirect_uri = process.env.REDIRECT_URI; // Your redirect uri

    //   const generateRandomString = (length) => {
    //     return crypto
    //     .randomBytes(60)
    //     .toString('hex')
    //     .slice(0, length);
    //   }
      
    //   var stateKey = 'spotify_auth_state';
      
    //   var app = express();
      
    //   app.use(express.static(__dirname + '/public'))
    //      .use(cors())
    //      .use(cookieParser());
      
    //   app.get('/login', function(req, res) {
      
    //     var state = generateRandomString(16);
    //     res.cookie(stateKey, state);
      
    //     // your application requests authorization
    //     var scope = 'user-read-private user-read-email';
    //     res.redirect('https://accounts.spotify.com/authorize?' +
    //       querystring.stringify({
    //         response_type: 'code',
    //         client_id: client_id,
    //         scope: scope,
    //         redirect_uri: redirect_uri,
    //         state: state
    //       }));
    //   });
      
    //   app.get('/callback', function(req, res) {
      
    //     // your application requests refresh and access tokens
    //     // after checking the state parameter
      
    //     var code = req.query.code || null;
    //     var state = req.query.state || null;
    //     var storedState = req.cookies ? req.cookies[stateKey] : null;
      
    //     if (state === null || state !== storedState) {
    //       res.redirect('/#' +
    //         querystring.stringify({
    //           error: 'state_mismatch'
    //         }));
    //     } else {
    //       res.clearCookie(stateKey);
    //       var authOptions = {
    //         url: 'https://accounts.spotify.com/api/token',
    //         form: {
    //           code: code,
    //           redirect_uri: redirect_uri,
    //           grant_type: 'authorization_code'
    //         },
    //         headers: {
    //           'content-type': 'application/x-www-form-urlencoded',
    //           Authorization: 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    //         },
    //         json: true
    //       };
      
    //       request.post(authOptions, function(error, response, body) {
    //         if (!error && response.statusCode === 200) {
      
    //           var spToken = body.access_token,
    //               refresh_token = body.refresh_token;
      
    //           var options = {
    //             url: 'https://api.spotify.com/v1/me',
    //             headers: { 'Authorization': 'Bearer ' + spToken },
    //             json: true
    //           };
      
    //           // use the access token to access the Spotify Web API
    //           request.get(options, function(error, response, body) {
    //             console.log(body);
    //           });
      
    //           // we can also pass the token to the browser to make requests from there
    //           res.redirect('/#' +
    //             querystring.stringify({
    //               access_token: spToken,
    //               refresh_token: refresh_token
    //             }));
    //         } else {
    //           res.redirect('/#' +
    //             querystring.stringify({
    //               error: 'invalid_token'
    //             }));
    //         }
    //       });
    //     }
    //   });
      
    //   app.get('/refresh_token', function(req, res) {
      
    //     var refresh_token = req.query.refresh_token;
    //     var authOptions = {
    //       url: 'https://accounts.spotify.com/api/token',
    //       headers: { 
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) 
    //       },
    //       form: {
    //         grant_type: 'refresh_token',
    //         refresh_token: refresh_token
    //       },
    //       json: true
    //     };
      
    //     request.post(authOptions, function(error, response, body) {
    //       if (!error && response.statusCode === 200) {
    //         var spToken = body.access_token,
    //             refresh_token = body.refresh_token;
    //         res.send({
    //           'access_token': spToken,
    //           'refresh_token': refresh_token
    //         });
    //       }
    //     });
    //   });



  // const handleSpotifyLogin = () => {
  //   window.location = `${process.env.SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=${process.env.SCOPE}&response_type=token&show_dialog=true`;
  // };

  // const getReturnedParamsFromSpotifyAuth = (hash) => {
  //   const stringAfterHashtag = hash.substring(1);
  //   const paramsInUrl = stringAfterHashtag.split("&");
  //   const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
  //     console.log(currentValue);
  //     const [key, value] = currentValue.split("=");
  //     accumulater[key] = value;
  //     return accumulater;
  //   }, {});
  
  //   return paramsSplitUp;
  // };

  // const WebApp = () => {
  //   useEffect(() => {
  //     if (window.location.hash) {
  //       const { access_token, expires_in, token_type } =
  //         getReturnedParamsFromSpotifyAuth(window.location.hash);
  //       localStorage.clear();
  //       localStorage.setItem("accessToken", access_token);
  //       localStorage.setItem("tokenType", token_type);
  //       localStorage.setItem("expiresIn", expires_in);
  //     }
  //   })};

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
      {/* <div className="d-flex mx-auto justify-content-center text-white mb-2">
        <div className="border align-self-center"></div>
        <span>Or login with</span>
        <div className="border align-self-center"></div>
      </div>
      <button type="button" className="button1 text-success mb-3" onClick={getSpotifyToken}><b>Spotify</b></button> */}
    </form>
  );
};
