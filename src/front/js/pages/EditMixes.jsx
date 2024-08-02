import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const EditMixes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // Estados para los campos del formulario
  const [mixTitle, setMixTitle] = useState("");
  const [track1Url, setTrack1Url] = useState("");
  const [track1Name, setTrack1Name] = useState("");
  const [binauralId, setBinauralId] = useState("");
  const [track2Name, setTrack2Name] = useState("");


  const [binauralDropdownVisible, setBinauralDropdownVisible] = useState(false);
  const [soundscapeDropdownVisible, setSoundscapeDropdownVisible] = useState(false);
  
  useEffect(() => {
    if (!store.isLogin) {
        alert("Please Log-In or Sign-Up");
        navigate("/login");
    }
}, [store.isLogin, navigate]);

  useEffect(() => {
    setMixTitle(store.MixId.mix_title || "");
    setTrack1Url(store.MixId.track_1_url || "");
    setTrack1Name(store.MixId.track_1_name || "");
    setBinauralId(store.MixId.binaural_id || "");
    setTrack2Name(store.MixId.track_2_name || "");
  }, [store.MixId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = store.user.id;
    const mixes_id = store.MixId.id;
    console.log("el Id del Mix que quiero editar", mixes_id);
    const dataToSend = {
      mix_title: mixTitle,
      user_id: userId,
      track_1_url: track1Url,
      track_1_name: track1Name,
      binaural_id: binauralId,
      track_2_name: track2Name,
      acumulator_concurrency: 0,
      date: Date(),

    };
    actions.editMix(mixes_id, dataToSend);
    console.log(mixes_id, "estos son los datos", dataToSend);
    navigate("/mixes");
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleBinauralClick = (track_url, name) => {
    setBinauralId(track_url);
    setTrack2Name(name);
    setBinauralDropdownVisible(false);
  };

  const handleSoundscapeClick = (url_jamendo, name) => {
    setTrack1Url(url_jamendo);
    setTrack1Name(name);
    setSoundscapeDropdownVisible(false);
  };

  const toggleBinauralDropdown = () => {
    setBinauralDropdownVisible(!binauralDropdownVisible);
  };

  const toggleSoundscapeDropdown = () => {
    setSoundscapeDropdownVisible(!soundscapeDropdownVisible);
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
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
            <label htmlFor="track1Name" className="form-label2">Soundscape</label>
            <input
              type="text"
              id="track1Name"
              className="form-control"
              placeholder="Soundscape track name"
              value={track1Name}
              onChange={handleChange(setTrack1Name)}
              onClick={toggleSoundscapeDropdown}
            />
            {soundscapeDropdownVisible && (
              <ul className="dropdown-menu show">
                {store.soundscapeList.map((item, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSoundscapeClick(item.url_jamendo, item.name)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="field row-2 text-end">
            <label htmlFor="track2Name" className="form-label2">Binaural Track</label>
            <input
              type="text"
              id="track2Name"
              className="form-control"
              placeholder="Binaural track name"
              value={track2Name}
              onChange={handleChange(setTrack2Name)}
              onClick={toggleBinauralDropdown}
            />
            {binauralDropdownVisible && (
              <ul className="dropdown-menu show">
                {store.binauralList.map((item, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleBinauralClick(item.track_url, item.name)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="button1">&nbsp;&nbsp;Save&nbsp;&nbsp;</button>
            <button
              type="reset"
              className="button1"
              onClick={() => {
                setMixTitle('');
                setTrack1Url('');
                setTrack1Name('');
                setBinauralId('');
                setTrack2Name('');
              }}
            >
              &nbsp;&nbsp;Reset&nbsp;&nbsp;
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
