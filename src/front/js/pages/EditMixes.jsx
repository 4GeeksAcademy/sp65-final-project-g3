import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const EditMixes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // Obtén el mix actual del store usando MixId
  const currentMix = store.MixId[0] || {}; // Asumiendo que MixId es un array y tomas el primer elemento

  // Estados para los campos del formulario
  const [mixTitle, setMixTitle] = useState(currentMix.mix_title || "");
  const [track1Url, setTrack1Url] = useState(currentMix.track_1_url || "");
  const [track1Name, setTrack1Name] = useState(currentMix.track_1_name || "");
  const [binauralId, setBinauralId] = useState(currentMix.binaural_id || "");
  const [track2Name, setTrack2Name] = useState(currentMix.track_2_name || "");

  useEffect(() => {
    // Actualiza los campos del formulario cuando cambie currentMix
    setMixTitle(currentMix.mix_title || "");
    setTrack1Url(currentMix.track_1_url || "");
    setTrack1Name(currentMix.track_1_name || "");
    setBinauralId(currentMix.binaural_id || "");
    setTrack2Name(currentMix.track_2_name || "");
  }, [currentMix]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMix = {
      mix_title: mixTitle,
      track_1_url: track1Url,
      track_1_name: track1Name,
      binaural_id: binauralId,
      track_2_name: track2Name
    };
    actions.updateMix(currentMix.id, updatedMix).then(() => {
      navigate("/mixes"); // Redirige después de actualizar
    });
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h3 id="heading">Edit Your Mix</h3>
        <div className="field text-end">
          <label htmlFor="mixTitle" className="form-label2">Mix Title</label>
          <input
            type="text"
            id="mixTitle"
            className="form-control"
            placeholder="Mix title"
            value={mixTitle}
            onChange={handleChange(setMixTitle)}
          />
        </div>
        <div className="field row-2 text-end">
          <label htmlFor="track1Url" className="form-label2">Soundscape Track URL</label>
          <input
            type="text"
            id="track1Url"
            className="form-control"
            placeholder="Soundscape track URL"
            value={track1Url}
            onChange={handleChange(setTrack1Url)}
          />
        </div>
        <div className="field row-2 text-end">
          <label htmlFor="track1Name" className="form-label2">Soundscape Track Name</label>
          <input
            type="text"
            id="track1Name"
            className="form-control"
            placeholder="Soundscape track name"
            value={track1Name}
            onChange={handleChange(setTrack1Name)}
          />
        </div>
        <div className="field row-2 text-end">
          <label htmlFor="binauralId" className="form-label2">Binaural Track ID</label>
          <input
            type="text"
            id="binauralId"
            className="form-control"
            placeholder="Binaural track ID"
            value={binauralId}
            onChange={handleChange(setBinauralId)}
          />
        </div>
        <div className="field row-2 text-end">
          <label htmlFor="track2Name" className="form-label2">Binaural Track Name</label>
          <input
            type="text"
            id="track2Name"
            className="form-control"
            placeholder="Binaural track name"
            value={track2Name}
            onChange={handleChange(setTrack2Name)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="button1">&nbsp;&nbsp;Save&nbsp;&nbsp;</button>
          <button type="reset" className="button1" onClick={() => {
            setMixTitle('');
            setTrack1Url('');
            setTrack1Name('');
            setBinauralId('');
            setTrack2Name('');
          }}>&nbsp;&nbsp;Reset&nbsp;&nbsp;</button>
        </div>
      </form>
    </>
  );
};
