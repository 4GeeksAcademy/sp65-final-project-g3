import React, { useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/mixes.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

export const Mixes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const { first_name, last_name, email } = store.user;
  // const { track_1_name, track_2_name, mix_title, track_1_url, track_2_url } = store.mixesList;

  const handleLoadMix = (track_1_name, track_2_name, track_1_url, binaural_id) => {
    console.log("Loading mix with:", track_1_name, track_2_name, track_1_url, binaural_id);
    actions.setTrack1Url(track_1_url);
    actions.setTrackOneName(track_1_name);
    actions.setTrack2Url(binaural_id);
    actions.setTrackTwoName(track_2_name)
    navigate("/mixer");
    console.log("Url Values:", store.setTrack1Url, store.setTrack2Url);
  };

  return (
    <Card>
      <Card.Header>Your Mixes</Card.Header>
      <Card.Body>
        <Card.Title>{first_name} {last_name}</Card.Title>
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
        </ListGroup>
      </Card.Body>
    </Card>
  )
}