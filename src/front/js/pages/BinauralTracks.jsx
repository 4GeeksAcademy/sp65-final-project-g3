import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

const tracks = [
  {name: "05Hz.mp3",
  urlpixabay: ""
  },
  "1Hz.mp3",
  "2Hz.mp3",
  "3Hz.mp3",
  "5Hz.mp3",
  "7Hz.mp3",
  "8Hz.mp3",
  "10Hz.mp3",
  "12Hz.mp3"
];

const TrackList = () => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);

  const handleTrackSelect = (track) => {
    actions.setTrackTwo(`/workspaces/sp65-final-project-g3/src/front/sound/${track}`);
    navigate('/mixer');
  };

  return (
    <div>
      {tracks.map((track, index) => (
        <button key={index} onClick={() => handleTrackSelect(track)}>
          {track}
        </button>
      ))}
    </div>
  );
};

export default TrackList;
