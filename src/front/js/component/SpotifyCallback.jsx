import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Context } from "../store/appContext";

export const SpotifyCallback = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("spotifyCallback")

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');

    if (code) {
      // Send the code to your backend to exchange for tokens
      console.log(code)
      fetch(`${process.env.BACKEND_URL}/api/spotify/callback`, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json'          
        },
        body: JSON.stringify({ code }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Store tokens and user info
        console.log("**ENTRO**")
        localStorage.setItem('spotifyAccessToken', data.access_token);
        localStorage.setItem('spotifyRefreshToken', data.refresh_token);
        actions.setUser(data.user);
        actions.setIsLogin(true);
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('Error:', error);
        navigate('/login');
      });
    } else {
      console.log ("+NO ENTRO+")
    }
  }, [location, actions, navigate]);
  // }, []);

  return <div>Loading...</div>;
};