import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { useNavigate } from "react-router-dom";

export const UploadBinaural = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [track_url, setTrackUrl] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (!store.isLogin || !store.user.is_admin) {
            alert("You must be an Admin to use this endpoint");
            navigate("/login");
        }
    }, [store.isLogin, store.user, navigate]);

    const handleName = (event) => setName(event.target.value);
    const handleTrackUrl = (event) => setTrackUrl(event.target.value);
    const handleType = (event) => setType(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);

    const handleReset = () => {
        setName('');
        setTrackUrl('');
        setType('');
        setDescription('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();       
        const dataToSend = {
            name: name,
            type: type,
            track_url: track_url,
            description: description
        };
        actions.addBinaural(dataToSend);
        handleReset();
        alert('Binaural successfully uploaded!');
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h3 id="heading">Upload Binaural Track</h3>
                <div className="field text-end">
                    <label htmlFor="name" className="form-label2">Track Name <span className="text-muted">(Optional)</span></label>
                    <input type="text" id="textResized" className="form-control" placeholder="Track Name" value={name} onChange={handleName} />
                </div>
                <div className="field row-2 text-end">
                    <label htmlFor="trackUrl" className="form-label2">Track URL <span className="text-muted">(Optional)</span></label>
                    <input type="text" id="textResized" className="form-control" placeholder="Track URL" value={track_url} onChange={handleTrackUrl} />
                </div>             
                <div className="field row-2 text-end">
                    <label htmlFor="type" className="form-label2">Type <span className="text-muted">(Optional)</span></label>
                    <input type="text" id="textResized" className="form-control" value={type} onChange={handleType} />
                </div>
                <div className="field row-2 text-end">
                    <label htmlFor="description" className="form-label2">Description <span className="text-muted">(Optional)</span></label>
                    <input type="text" id="textResized" className="form-control" value={description} onChange={handleDescription} />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button1">&nbsp;&nbsp;Save&nbsp;&nbsp;</button>
                    <button type="reset" className="button1" onClick={handleReset}>&nbsp;&nbsp;Reset&nbsp;&nbsp;</button>
                </div>
            </form>
        </>
    );
};
