import React, { useContext, useState } from "react";
import "../../styles/profile.css"
// import { Context } from "../store/appContext.js";

export const Profile = () => {

    // const { store, actions } = useContext(Context);
    // const [name, setName] = useState(store.user.first_name);
    // const [lastName, setLastName] = useState(store.user.last_name);
    // const [country, setCountry] = useState(store.user.country);
    // const [city, setCity] = useState(store.user.city);


    // const handleName = (event) => {
    //     setName(event.target.value)
    // }

    // const handleLastName = (event) => {
    //     setLastName(event.target.value)
    // }

    // const handleCountry = (event) => {
    //     setCountry(event.target.value)
    // }

    // const handleCity = (event) => {
    //     setCity(event.target.value)
    // }

    // const HandleReset = () => {
    //     setName('');
    //     setLastName(''),
    //     setCountry(''),
    //     setCity('');
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const dataToSend = { name, lastName, country, city }
    //     HandleReset();

        return (
            <>
                <form className="form" >  {/*onSubmit={handleSubmit}*/}
                    <h3 id="heading">Edit Profile</h3>
                    <div className="mb-3 field">
                        <label htmlFor="inputName" className="form-label">First Name</label>
                        <input type="text" className="material-symbols-outlined" id="firt_name"
                            // value={name}
                            // onChange={handleName}
                        />
                    </div>

                    <div className="mb-3 field">
                        <label htmlFor="InputLastName" className="form-label">Last Name</label>
                        <input type="text" className="material-symbols-outlined" id="last_name"
                            // value={lastName}
                            // onChange={handleLastName}
                        />
                    </div>

                    <div className="mb-3 field">
                        <label htmlFor="InputCountry" className="form-label">Country</label>
                        <input type="text" className="material-symbols-outlined" id="country"
                            // value={country}
                            // onChange={handleCountry}
                        />
                    </div>

                    <div className="mb-3 field">
                        <label htmlFor="InputCity" className="form-label">City</label>
                        <input type="text" className="material-symbols-outlined" id="city"
                            // value={city}
                            // onChange={handleCity}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-primary" >Submit</button>  {/*onClick={HandleReset}*/}
                </form>
            </>
        );
    };
// }
