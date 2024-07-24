import React, { useContext, useEffect } from "react";
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
  const { genre, duration } = store.soundscapeList;
  const { type } = store.binauralList;
  const { track_1_url, track_1_name, binaural_id, track_2_name, date, mix_title } = store.mixesList;

  useEffect(() => {
    actions.getMixes();
  }, []);

  const handleLoadMix = (track_1_name, track_2_name, track_1_url, binaural_id) => {
    console.log("Loading mix with:", track_1_name, track_2_name, track_1_url, binaural_id);
    actions.setTrack1Url(track_1_url);
    actions.setTrackOneName(track_1_name);
    actions.setTrack2Url(binaural_id);
    actions.setTrackTwoName(track_2_name);
    navigate("/mixer");
    console.log("Url Values:", store.setTrack1Url, store.setTrack2Url);
  };

  const handleEditMix = (item) => {
    actions.setMixId(item)
    navigate("/editmixes");
    console.log("this is de item", item);
  };
  


  return (
    <Card id="field">
      <h1 className="text-center">Your Mixes</h1>
      <Card.Body>
        <div>
          <p className="text-start">Hey {first_name} {last_name}! <br></br> These are your Mixes</p>
        </div>

        {store.mixesList.map((item, index) => (
          <ListGroup.Item id="Contenedores" className="justify-content-center" key={index}>
            <h3 className="text-info"> {item.mix_title} </h3>
            <h5 className="text-secondary"> Soundtrack </h5>
            <h6 > {item.track_1_name} </h6>
            <h5 className="text-secondary"> Binaural Track </h5>
            <h6 > {item.track_2_name} </h6>
            {/* <span className="mx-5 text-start"> {item.binaural_id} </span>                                     */}
            <Button className="button1" onClick={() => handleLoadMix(item.track_1_name, item.track_2_name, item.track_1_url, item.binaural_id)}>Load Mix</Button>
            <Button className="button1" onClick={() => handleEditMix(item)}><i className="fa-regular fa-pen-to-square"></i></Button>
            <Button className="button1" onClick={() => handleDeleteMix(item.track_1_name, item.track_2_name, item.track_1_url, item.binaural_id)}><i className="fa-solid fa-trash"></i></Button>
          </ListGroup.Item>
        ))}
      </Card.Body>
    </Card>
  )
}
