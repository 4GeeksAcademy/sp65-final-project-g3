import React from 'react';

export const JamendoAuth = () => {
  const handleJamendoLogin = () => {
      window.location.href = `${process.env.BACKEND_URL}/api/jamendo/authorize`;
  };

  return (
      <button onClick={handleJamendoLogin} className="button1">
          Login with Jamendo
      </button>
  );
};