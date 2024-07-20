import React from 'react';

const client_id = `${process.env.CLIENT_ID}`; // your clientId
// const client_secret = `${process.env.CLIENT_SECRET}`; // Your secret
const redirect_uri = `${process.env.REDIRECT_URI}`; // Your redirect uri
const spotify_auth_uri = `${process.env.SPOTIFY_AUTH_URL}`; // Your redirect uri
const scopes = ["user-read-private", "user-read-email", "playlist-read-private"];

export const SpotifyAuth = () => {
  const handleSpotifyLogin = () => {
    window.location = `${spotify_auth_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`;
  };

  return (    
    <button type="button" className="button1 text-success mb-3" onClick={handleSpotifyLogin}>Spotify</button>
  );
};