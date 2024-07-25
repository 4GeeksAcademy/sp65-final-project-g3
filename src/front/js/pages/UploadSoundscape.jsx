import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { useNavigate } from "react-router-dom";

export const UploadSoundscape = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [url_jamendo, setUrl_jamendo] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState('');
    const [soundscape_id, setSoundscapeId] = useState('');
    const [uploadMode, setUploadMode] = useState(true); // true for upload, false for delete

    useEffect(() => {
        if (!store.isLogin || !store.user.is_admin) {
            alert("You must be an Admin to use this endpoint");
            navigate("/login");
        }
    }, [store.isLogin, store.user, navigate]);

    const handleName = (event) => setName(event.target.value);
    const handleUrl_jamendo = (event) => setUrl_jamendo(event.target.value);
    const handleGenre = (event) => setGenre(event.target.value);
    const handleDuration = (event) => setDuration(event.target.value);
    const handleSoundscapeId = (event) => setSoundscapeId(event.target.value);

    const handleReset = () => {
        setName('');
        setUrl_jamendo('');
        setGenre('');
        setDuration('');
        setSoundscapeId('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();       
        const dataToSend = {
            name: name,
            genre: genre,
            url_jamendo: url_jamendo,
            duration: duration
        };
        actions.addSoundscape(dataToSend);
        console.log(dataToSend);
        handleReset();
        alert('Soundscape successfully uploaded!');
    };

    const handleDelete = (event) => {
        event.preventDefault();       
        const dataToSend = {
            soundscapes_id: soundscape_id
        };
        actions.deleteSoundscape(dataToSend);
        console.log(dataToSend);
        handleReset();
        alert('Soundscape successfully deleted!');
    };

    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary me-2" onClick={() => setUploadMode(true)}>Upload Mode</button>
                <button className="btn btn-secondary" onClick={() => setUploadMode(false)}>Delete Mode</button>
            </div>
            {uploadMode ? (
                <form className="form" onSubmit={handleSubmit}>
                    <h3 id="heading">Upload Soundscape Track</h3>
                    <div className="field text-end">
                        <label htmlFor="name" className="form-label2">Track Name <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" placeholder="Track Name" value={name} onChange={handleName} />
                    </div>
                    <div className="field row-2 text-end">
                        <label htmlFor="trackUrl" className="form-label2">Track URL <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" placeholder="Track URL" value={url_jamendo} onChange={handleUrl_jamendo} />
                    </div>             
                    <div className="field row-2 text-end">
                        <label htmlFor="type" className="form-label2">Genre <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" value={genre} onChange={handleGenre} />
                    </div>
                    <div className="field row-2 text-end">
                        <label htmlFor="description" className="form-label2">Duration <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" value={duration} onChange={handleDuration} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="button1">&nbsp;&nbsp;Save&nbsp;&nbsp;</button>
                        <button type="reset" className="button1" onClick={handleReset}>&nbsp;&nbsp;Reset&nbsp;&nbsp;</button>
                    </div>
                </form>
            ) : (
                <form className="form" onSubmit={handleDelete}>
                    <h3 id="heading">Delete Soundscape Track</h3>
                    <div className="field text-end">
                        <label htmlFor="soundscape_id" className="form-label2">Track ID <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" placeholder="Track ID" value={soundscape_id} onChange={handleSoundscapeId} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="button1">&nbsp;&nbsp;Delete&nbsp;&nbsp;</button>
                        <button type="reset" className="button1" onClick={handleReset}>&nbsp;&nbsp;Reset&nbsp;&nbsp;</button>
                    </div>
                </form>
                

                
            )}
        </>
    );
};
