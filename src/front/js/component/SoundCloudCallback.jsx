import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Context } from "../store/appContext";

export const SoundCloudCallback = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    // Verify the state to prevent CSRF attacks
    const storedState = localStorage.getItem('soundcloud_auth_state');
    if (state !== storedState) {
      console.error('State mismatch. Possible CSRF attack.');
      navigate('/login');
      return;
    }

    if (code) {
      const codeVerifier = localStorage.getItem('soundcloud_code_verifier');
      
      fetch(`${process.env.BACKEND_URL}/api/soundcloud/callback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code, code_verifier: codeVerifier }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('soundcloudAccessToken', data.access_token);
        localStorage.setItem('soundcloudRefreshToken', data.refresh_token);
        actions.setUser(data.user);
        actions.setIsLogin(true);
        navigate('/mixer');
      })
      .catch(error => {
        console.error('Error:', error);
        navigate('/login');
      });
    } else {
      navigate('/login');
    }

    // Clean up
    localStorage.removeItem('soundcloud_auth_state');
    localStorage.removeItem('soundcloud_code_verifier');
  }, [location, actions, navigate]);

  return <div>Loading...</div>;
};