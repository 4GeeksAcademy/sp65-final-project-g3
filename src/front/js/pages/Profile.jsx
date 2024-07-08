import React, { useContext, useState } from "react";
import "../../styles/profile.css"
import { Context } from "../store/appContext.js";

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(store.user.first_name);
    const [lastName, setLastName] = useState(store.user.last_name);
    const [email, setEmail] = useState(store.user.email);
    const [isActive, setIsActive] = useState(store.user.is_active);
    const [country, setCountry] = useState(store.user.country);
    const [city, setCity] = useState(store.user.city)


    const handleName = (event) => { setName(event.target.value) };
    const handleLastName = (event) => { setLastName(event.target.value) };
    const handleCountry = (event) => { setCountry(event.target.value) };
    const handleCity = (event) => { setCity(event.target.value) };

    const handleReset = () => {
        setName('');
        setLastName('');
        setCountry('');
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
            city: city
        }
        actions.updateProfile(userId, dataToSend);

        handleReset();
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h3 id="heading">Profile</h3>
                <div className="mb-3 field">
                    <label htmlFor="inputName" className="form-label">First Name</label>
                    <input type="text" id="firt_name"
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="InputLastName" className="form-label">Last Name</label>
                    <input type="text" id="last_name"
                        value={lastName}
                        onChange={handleLastName}
                    />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="InputLastName" className="form-label">Country</label>
                    <input type="text" id="last_name"
                        value={country}
                        onChange={handleCountry}
                    />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="InputLastName" className="form-label">City</label>
                    <input type="text" id="last_name"
                        value={city}
                        onChange={handleCity}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button1">Save</button>
                    <button type="reset" className="button1" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </>
    );
};
