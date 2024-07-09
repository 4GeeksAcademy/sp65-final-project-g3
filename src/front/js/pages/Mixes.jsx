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
  const { genre, duration } = store.soundscapeList;
  const { type } = store.binauralList;
  const { track_1_url, track_1_name, binaural_id, track_2_name, date, mix_title} = store.mixesList;

  const handleLoadMix = (track_1_name, track_2_name, track_1_url, binaural_id) => {
    console.log("Loading mix with:", track_1_name, track_2_name, track_1_url, binaural_id);
    actions.setTrack1Url(track_1_url);
    actions.setTrackOneName(track_1_name);
    actions.setTrack2Url(binaural_id);
    actions.setTrackTwoName(track_2_name);
    navigate("/mixer");
    console.log("Url Values:", store.setTrack1Url, store.setTrack2Url);
  };

  return (
    <Card id="field">
      <h1 className="text-center">Your Mixes</h1>
      <Card.Body>
          <div>
            <p className="text-start">Hey {first_name} {last_name}! <br></br> These are your Mixes</p>
          </div>    

          {/* <ListGroup.Item id="field2">
            <h2> item.mix_title</h2>
            <div className="d-flex col-9">
              <h5 className="col-4 mx-3 text-center"> Track </h5>
              <span className="col-2 mx-5 text-center"> Genre </span>
              <span className="col-3 mx-5 text-center"> Duration </span>
            </div>
            <div className="d-flex col-9">
              <h5 className="col-4 mx-3 text-center"> item.track_1_name</h5>
              <span className="col-2 mx-5 text-center"> genre </span>
              <span className="col-3 mx-5 text-center"> duration </span>
            </div>
            <div className="d-flex col-9">
              <h5 className="col-4 mx-3 text-center"> item.track_2_name</h5>
              <span className="col-2 mx-5 text-center"> genre </span>
              <span className="col-3 mx-5 text-center"> duration </span>
            </div>
            <Button className="button1">Load Mix</Button>
          </ListGroup.Item>
          
      </Card.Body>
    </Card>
  )
} */}
<></>
            {store.mixesList.map((item, index) => (
              <ListGroup.Item id="Contenedores" className="justify-content-center" key={index}>
                <h3> {item.mix_title} </h3>                
                  <h5 > Track </h5>
                  {/* <span className="mx-5 text-center"> Url </span> */}                
                  <h6 > {item.track_1_name} </h6>
                  {/* <span className="mx-5 text-start"> {item.track_1_url} </span>                                     */}                
                  <h6 > {item.track_2_name} </h6>
                  {/* <span className="mx-5 text-start"> {item.binaural_id} </span>                                     */}               
                <Button className="button1" onClick={() => handleLoadMix(item.track_1_name, item.track_2_name, item.track_1_url, item.binaural_id)}>Load Mix</Button>
              </ListGroup.Item>
            ))}
      </Card.Body>
    </Card>
  )
}
{/* <Card.Title>{first_name} {last_name}</Card.Title>
<ListGroup variant="flush">
  {store.mixesList.map((item, index) => (
    <ListGroup.Item key={index}>
      <h4>{item.mix_title}</h4> with Track 1 {item.track_1_name} and Track 2 {item.track_2_name}
      <Button
        variant="primary"
        onClick={() => handleLoadMix(item.track_1_name, item.track_2_name, item.track_1_url, item.binaural_id)}
      >
        Load Mix
      </Button>
    </ListGroup.Item>
  ))}
</ListGroup> */}