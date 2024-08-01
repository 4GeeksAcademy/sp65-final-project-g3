import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { useNavigate } from "react-router-dom";

export const UploadTutorial = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [url_youtube, setUrl_youtube] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState('');
    const [tutorial_id, setTutorialId] = useState('');
    const [uploadMode, setUploadMode] = useState(true); // true for upload, false for delete

    useEffect(() => {
        if (!store.isLogin || !store.user.is_admin) {
            alert("You must be an Admin to use this endpoint");
            navigate("/login");
        }
    }, [store.isLogin, store.user, navigate]);

    const handleName = (event) => setName(event.target.value);
    const handleUrl_youtube = (event) => setUrl_jamendo(event.target.value);
    const handleGenre = (event) => setGenre(event.target.value);
    const handleDuration = (event) => setDuration(event.target.value);
    const handleTutorialId = (event) => setSoundscapeId(event.target.value);

    const handleReset = () => {
        setName('');
        setUrl_youtube('');
        setGenre('');
        setDuration('');
        setTutorialId('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();       
        const dataToSend = {
            name: name,
            genre: genre,
            url_youtube: url_youtube,
            duration: duration
        };
        actions.addTutorial(dataToSend);
        console.log(dataToSend);
        handleReset();
        alert('Tutorial successfully uploaded!');
    };

    const handleDelete = (event) => {
        event.preventDefault();       
        const dataToSend = {
            tutorial_id: tutorial_id
        };
        actions.deletetutorial(dataToSend);
        console.log(dataToSend);
        handleReset();
        alert('tutorial successfully deleted!');
    };

    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary me-2" onClick={() => setUploadMode(true)}>Upload Mode</button>
                <button className="btn btn-secondary" onClick={() => setUploadMode(false)}>Delete Mode</button>
            </div>
        <div className="container d-flex justify-content-center mt-5">
            {uploadMode ? (
                <form className="form" onSubmit={handleSubmit}>
                    <h3 id="heading">Upload Tutorial</h3>
                    <div className="field text-end">
                        <label htmlFor="name" className="form-label2">Tutorial Name <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" placeholder="Track Name" value={name} onChange={handleName} />
                    </div>
                    <div className="field row-2 text-end">
                        <label htmlFor="trackUrl" className="form-label2">Track URL <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" placeholder="Track URL" value={url_youtube} onChange={handleUrl_youtube} />
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
                    <h3 id="heading">Delete Tutorial</h3>
                    <div className="field text-end">
                        <label htmlFor="soundscape_id" className="form-label2">Track ID <span className="text-muted">(Optional)</span></label>
                        <input type="text" id="textResized" className="form-control" placeholder="Track ID" value={tutorial_id} onChange={handleTutorialId} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="button1">&nbsp;&nbsp;Delete&nbsp;&nbsp;</button>
                        <button type="reset" className="button1" onClick={handleReset}>&nbsp;&nbsp;Reset&nbsp;&nbsp;</button>
                    </div>
                </form>
                

                
            )}
            </div>
        </>
    );
};
