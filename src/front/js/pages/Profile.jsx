import React, { useContext, useState, useEffect } from "react";
import "../../styles/profile.css"
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isActive, setIsActive] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [admin, setAdmin] = useState("");
    const navigate = useNavigate();

        useEffect(() => {
        if (!store.isLogin) {
            alert("Please Log-In or Sign-Up");
            navigate("/login");
        }
    }, [store.isLogin, navigate]);

    useEffect(() => {
        if (store.user) {
            setName(store.user.first_name || '')
            setLastName(store.user.last_name || '')
            setEmail(store.user.email)
            setIsActive(store.user.is_active)
            setCountry(store.user.country || '')
            setCity(store.user.city || '')
        }

    }, [store.user])


    const handleName = (event) => { setName(event.target.value) };
    const handleLastName = (event) => { setLastName(event.target.value) };
    const handleCountry = (event) => { setCountry(event.target.value) };
    const handleCity = (event) => { setCity(event.target.value) };
    const handleAdmin = () => {setAdmin(true);}

    const handleReset = () => {
        setName('');
        setLastName('');
        setCountry('');
        setIsActive (false);
        setCity('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = store.user.id;
        const dataToSend = {
            first_name: name,
            last_name: lastName,
            email: email,
            is_active: isActive,
            country: country,
            city: city,
            is_admin: admin
        }
        actions.updateProfile(userId, dataToSend);

        handleReset();
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h3 id="heading">Profile</h3>
                <div className="field text-end">
                    <label htmlFor="name" className="form-label2">Name <span className="text-muted">(Optional)</span></label>
                    <input type="name" id="textResized" className="form-control" placeholder="Your name" value={name} onChange={handleName} />
                </div>
                <div className="field row-2 text-end">
                    <label htmlFor="lastName" className="form-label2">Last Name <span className="text-muted">(Optional)</span></label>
                    <input type="lastName" id="textResized" className="form-control" placeholder="Your last name" value={lastName} onChange={handleLastName} />
                </div>
                <div className="field row-2 text-end">
                    <label htmlFor="email" className="form-label2">E-mail</label>
                    <label type="email" id="textResized" className="form-control"><span className="text-muted">{email}</span></label>
                </div>
                <div className="field row-2 text-end">
                    <label htmlFor="country" className="form-label2">Country <span className="text-muted">(Optional)</span></label>
                    <input type="text" id="textResized" className="form-control" value={country} onChange={handleCountry} />
                </div>
                <div className="field row-2 text-end">
                    <label htmlFor="city" className="form-label2">City <span className="text-muted">(Optional)</span></label>
                    <input type="city" id="textResized" className="form-control" value={city} onChange={handleCity} />
                </div>
                <div className="field row-2 text-end">
                    <label htmlFor="city" className="form-label2">ADMIN <span className="text-muted">(Optional)</span></label>
                    <button type="button" className="btn btn-danger" value={admin} onClick={handleAdmin}>Make Admin</button>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button1">&nbsp;&nbsp;Save&nbsp;&nbsp;</button>
                    <button type="reset" className="button1" onClick={handleReset}>&nbsp;&nbsp;Reset&nbsp;&nbsp;</button>
                </div>
            </form>
        </>
    );
};
