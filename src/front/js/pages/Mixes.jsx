import React, { useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/mixes.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

export const Mixes = () => {
  // const { store, actions } = useContext(Context);
  // const navigate = useNavigate();

  // const { first_name, last_name, email } = store.user;
  // // const { track_1_name, track_2_name, mix_title, track_1_url, track_2_url } = store.mixesList;

  // const handleLoadMix = (track_1_name, track_2_name, track_1_url, binaural_id) => {
  //   console.log("Loading mix with:", track_1_name, track_2_name, track_1_url, binaural_id);
  //   actions.setTrack1Url(track_1_url);
  //   actions.setTrackOneName(track_1_name);
  //   actions.setTrack2Url(binaural_id);
  //   actions.setTrackTwoName(track_2_name)
  //   navigate("/mixer");
  //   console.log("Url Values:", store.setTrack1Url, store.setTrack2Url);
  // };

  return (
    <Card>
      <Card.Header>Your Mixes</Card.Header>
      <Card.Body>
        {/* <Card.Title>{first_name} {last_name}</Card.Title>
        <ListGroup variant="flush">
          {store.mixesList.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.mix_title} with Track 1 {item.track_1_name} and Track 2 {item.track_2_name}
              <Button
                variant="primary"
                onClick={() => handleLoadMix(item.track_1_name, item.track_2_name, item.track_1_url, item.binaural_id)}
              >
                Load Mix
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup> */}
      </Card.Body>

      <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Hey first_name ! these are your Mixes</p>
            <h1>A Perfect Day</h1>

            <p className="tagline">
              Minimalism, electronica and modern classical to concentrate to.
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">Spotify</p>
              <span>699,428 likes</span>
              <span>4hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <div />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <div>Hearticon</div>
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>

          <ul className="songList">
            <li>
              <div className="songIcon">
                <div className="noteI"></div>
                <div className="playI"></div>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <div className="noteI"></div>
                <div className="playI"></div>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <div className="noteI"></div>
                <div className="playI"></div>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <div className="noteI"></div>
                <div className="playI"></div>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <div className="noteI"></div>
                <div className="playI"></div>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <div className="noteI"></div>
                <div className="playI"></div>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </Card>
  )
}