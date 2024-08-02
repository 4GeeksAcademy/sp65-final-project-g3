import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"
import "../../styles/navbar.css";
import { useNavigate, Link } from "react-router-dom";
import tutorial from "../../img/tutorial.jpg";

import Button from 'react-bootstrap/Button';


export const Mixes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [selectedMix, setSelectedMix] = useState(null);

  const { first_name, last_name, email } = store.user;
  const { genre, duration } = store.soundscapeList;
  const { type } = store.binauralList;
  const { track_1_url, track_1_name, binaural_id, track_2_name, date, mix_title } = store.mixesList;

  useEffect(() => {
    if (!store.isLogin) {
        alert("Please Log-In or Sign-Up");
        navigate("/login");
    }
}, [store.isLogin, navigate]);

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

  const handleDeleteMix = async (id) => {
    try {
      await actions.deleteMix(id);
      console.log("Mix deleted successfully:", id);
      
      // Update the local state to remove the deleted mix
      const updatedMixes = store.mixesList.filter(mix => mix.id !== id);
      actions.setMixesList(updatedMixes);
      
      // If the deleted mix was the selected mix, clear the selection
      if (selectedMix && selectedMix.id === id) {
        setSelectedMix(null);
      }
    } catch (error) {
      console.error("Error deleting mix:", error);
    }
  };

  const handleMixClick = (mix) => {
    setSelectedMix(mix);
  };

  return (
    <>
    <div id="mixes" className="d-flex justify-content-end">
			<div id="mixesList" className="container">
				<div id="listHeader" className="col-12 justify-content-center">
					<div id="userHeader" className="d-flex justify-content-between">
						<Link id="sidebarIconsBottom" to="/profile">
							<img id="profileMixImg" src={tutorial} alt="Binaural_logo"/>
						</Link>
						<p id="userHeaderText">Hey, {first_name} {last_name}, here you got your mixes!!</p>
					</div>
				</div>
				<div id="blockHeaderList" className="d-flex justify-content-between">
					<p id="tableData"className="col-1"><b>#</b></p>
					<p id="tableData" className="col-8"><b>Title</b></p>
					<p id="tableData" className="col-2"><b>Date</b></p>
				</div>
        {store.mixesList.map((item, index) => (
            <div key={index} onClick={() => handleMixClick(item)}>
              <div id={index % 2 === 0 ? "blockListOdd" : "blockListPair"} className="d-flex justify-content-between">
                <p id="tableData" className="col-1"><b>{item.id}</b></p>
                <p id="tableData" className="col-8"><b>{item.mix_title}</b></p>
                <p id="tableData" className="col-2"><b>{item.date}</b></p>
              </div>
            </div>
          ))}
			</div>
			<div id="mixDetails" className="container center">
      <h1>{selectedMix ? selectedMix.mix_title : "Select a mix"}</h1>
				<div id="mixesImgs" className="d-flex">
					<img id="trackImg" src={tutorial} alt="Track #1 Img"/>
					<img id="trackImg" src={tutorial} alt="Track #2 Img"/>
				</div>
        {selectedMix && (
        <div className="d-flex">
        <Button className="button1" onClick={() => handleLoadMix(selectedMix.track_1_name, selectedMix.track_2_name, selectedMix.track_1_url, selectedMix.binaural_id)}><span className="material-symbols-outlined">upload_file</span></Button>
        <Button className="button1" onClick={() => handleEditMix(selectedMix)}><span className="material-symbols-outlined">movie_edit</span></Button>
        <Button className="button1" onClick={() => handleDeleteMix(selectedMix.id)}><span className="material-symbols-outlined">remove</span></Button>
      </div>
        )}

				<div id="blockHeaderList" className="d-flex justify-content-between">
					<p id="tableData"className="col-1"><b>#</b></p>
					<p id="tableData" className="col-4"><b>Title</b></p>
					<p id="tableData" className="col-2"><b>Date added</b></p>
					<p id="tableData"><span className="material-symbols-outlined">schedule</span></p>
				</div>
        {selectedMix && (
            <>
              <div id="blockListOdd" className="d-flex justify-content-between">
                <p id="tableData" className="col-1"><b>1</b></p>
                <p id="tableData" className="col-6"><b>{selectedMix.track_1_name}</b></p>
                <p id="tableData" className="col-2"><b>{selectedMix.date}</b></p>
                <p id="tableData" className="col-2"><b>{store.soundscapeList.duration}</b></p>
              </div>
              <div id="blockListPair" className="d-flex justify-content-between">
                <p id="tableData" className="col-1"><b>2</b></p>
                <p id="tableData" className="col-6"><b>{selectedMix.track_2_name}</b></p>
                <p id="tableData" className="col-2"><b>{selectedMix.date}</b></p>
                <p id="tableData" className="col-2"><b>{store.binauralList.duration}</b></p>
              </div>
            </>
          )}
			</div>
		</div>
    </>
  )
}


// import React, { useContext, useEffect } from "react";
// import { Context } from "../store/appContext"
// import "../../styles/mixes.css"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useNavigate } from "react-router-dom";


// export const Mixes = () => {
//   const { store, actions } = useContext(Context);
//   const navigate = useNavigate();

//   const { first_name, last_name, email } = store.user;
//   const { genre, duration } = store.soundscapeList;
//   const { type } = store.binauralList;
//   const { track_1_url, track_1_name, binaural_id, track_2_name, date, mix_title } = store.mixesList;

//   useEffect(() => {
//     if (!store.isLogin) {
//       alert("Please Log-In or Sign-Up");
//       navigate("/login");
//     }
//   }, [store.isLogin, navigate]);

//   useEffect(() => {
//     actions.getMixes();
//   }, []);

//   const handleLoadMix = (track_1_name, track_2_name, track_1_url, binaural_id) => {
//     console.log("Loading mix with:", track_1_name, track_2_name, track_1_url, binaural_id);
//     actions.setTrack1Url(track_1_url);
//     actions.setTrackOneName(track_1_name);
//     actions.setTrack2Url(binaural_id);
//     actions.setTrackTwoName(track_2_name);
//     navigate("/mixer");
//     console.log("Url Values:", store.setTrack1Url, store.setTrack2Url);
//   };

//   const handleEditMix = (item) => {
//     actions.setMixId(item)
//     navigate("/editmixes");
//     console.log("this is de item", item);
//   };

//   const handleDeleteMix = (id) => {
//     console.log("Deleting mix with ID:", id);  // Log to verify ID
//     actions.deleteMix(id);
//   };

// return (
//   <div className="center-container">
//     <Card id="field">
//       <h1 className="text-center">Your Mixes</h1>
//       <Card.Body>
//         <div>
//           <p className="text-start">Hey {first_name} {last_name}! <br></br> These are your Mixes</p>
//         </div>

//         {store.mixesList.map((item, index) => (
//           <ListGroup.Item id="Contenedores" className="justify-content-center" key={index}>
//             <h3 className="text-info"> {item.mix_title} </h3>
//             <h5 className="text-secondary"> Soundtrack </h5>
//             <h6 > {item.track_1_name} </h6>
//             <h5 className="text-secondary"> Binaural Track </h5>
//             <h6 > {item.track_2_name} </h6>
//             {/* <span className="mx-5 text-start"> {item.binaural_id} </span>                                     */}
//             <Button className="button1" onClick={() => handleLoadMix(item.track_1_name, item.track_2_name, item.track_1_url, item.binaural_id)}>Load Mix</Button>
//             <Button className="button1" onClick={() => handleEditMix(item)}><i className="fa-regular fa-pen-to-square"></i></Button>
//             <Button className="button1" onClick={() => handleDeleteMix(item.id)}><i className="fa-solid fa-trash"></i></Button>
//           </ListGroup.Item>
//         ))}
//       </Card.Body>
//     </Card>
//   </div>
// )
// }
