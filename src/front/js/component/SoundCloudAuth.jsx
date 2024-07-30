import React from 'react';

const client_id = process.env.SOUNDCLOUD_CLIENT_ID;
const redirect_uri = process.env.SOUNDCLOUD_REDIRECT_URI;
const soundcloud_auth_url = 'https://soundcloud.com/connect';

export const SoundCloudAuth = () => {
  const handleSoundCloudLogin = () => {
    // Generate a random state for CSRF protection
    const state = Math.random().toString(36).substring(7);
    // Store the state in localStorage for later verification
    localStorage.setItem('soundcloud_auth_state', state);

    // Generate code verifier and challenge for PKCE
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    localStorage.setItem('soundcloud_code_verifier', codeVerifier);

    const authUrl = `${soundcloud_auth_url}?` +
      `client_id=${client_id}&` +
      `redirect_uri=${encodeURIComponent(redirect_uri)}&` +
      `response_type=code&` +
      `state=${state}&` +
      `code_challenge=${codeChallenge}&` +
      `code_challenge_method=S256`;

    window.location = authUrl;
  };

  return (
    <button type="button" className="button1 text-success mb-3" onClick={handleSoundCloudLogin}>
      SoundCloud
    </button>
  );
};

// Helper functions for PKCE
function generateCodeVerifier() {
  const array = new Uint32Array(56/2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}

function generateCodeChallenge(verifier) {
  return base64URLEncode(sha256(verifier));
}

function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

function base64URLEncode(str) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}