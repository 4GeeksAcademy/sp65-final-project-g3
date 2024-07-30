// src/components/SpotifySearch.jsx
import React, { useState, useEffect } from 'react';

const SpotifySearch = ({ onTrackSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // Get the access token from localStorage
    const token = localStorage.getItem('spotifyAccessToken');
    setAccessToken(token);
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim() || !accessToken) return;

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&limit=10`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      setSearchResults(data.tracks.items);
    } catch (error) {
      console.error('Error searching tracks:', error);
    }
  };

  const handleTrackSelect = (track) => {
    onTrackSelect({
      trackOneUrl: track.preview_url,
      track1name: track.name
    });
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search for a track"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((track) => (
          <li key={track.id} onClick={() => handleTrackSelect(track)}>
            {track.name} by {track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifySearch;