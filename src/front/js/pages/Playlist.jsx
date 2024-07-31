import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/binaural.css"
import img1 from "../../img/soundscape.jpg"
import img2 from "../../img/mixes.jpg"

export const Playlist = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    
    const alphaRef = useRef(null);
    const thetaRef = useRef(null);
    const deltaRef = useRef(null);

    // useEffect(() => {
    //     if (!store.isLogin) {
    //         alert("Please Log-In or Sign-Up");
    //         navigate("/login");
    //     }
    // }, [store.isLogin, navigate]);

    useEffect(() => {
        const scrollToRef = (ref) => {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };

        switch (store.currentSection) {
            case "alpha-section":
                scrollToRef(alphaRef);
                break;
            case "theta-section":
                scrollToRef(thetaRef);
                break;
            case "delta-section":
                scrollToRef(deltaRef);
                break;
            default:
                break;
        }
    }, [store.currentSection]);
    console.log("current Section", store.currentSection);

    return (
        <>
            <div className="playlist-welcome-section">
                <div className="container text-center tm-welcome-container">
                    <div className="tm-welcome">
                        <i className="fas tm-fa-big fa-music tm-fa-mb-big"></i>
                        <h1 className="text-uppercase mb-3 tm-site-name">PLaylist</h1>
                        <p className="tm-site-description">Soundscapes, Music & Spotify</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div id="indexImg" className="row tm-albums-container grid">
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard1">
                            <a href="#soundscape-section">
                                <img src={img1} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Soundscapes</h2>
                                    <p>Browse Soundscapes</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard2">
                            <a href="#music-section">
                                <img src={"https://t4.ftcdn.net/jpg/07/33/55/15/240_F_733551554_8EeuHjqKGXQj0GjNvw9EJgEb6KbY3fB1.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Music</h2>
                                    <p>Browse Music</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard3">
                            <a href="#spoti-section">
                                <img src={"https://t4.ftcdn.net/jpg/04/87/69/93/240_F_487699333_0R5Asoup6cWlpD1TUlMlqyQJEIMtAAKP.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Spotify</h2>
                                    <p>Browse your playlists</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard4">
                            <a href="#mixes-section">
                                <img src={img2} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Mixes</h2>
                                    <p>Browse your Mixes</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                </div>
                <div className="row tm-albums-container grid">
                    <div className="row featurette">
                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={img1} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Soundscapes</h5>
                                    <p id="textBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired track</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Action two</a></li>
                                            <li><a className="dropdown-item" href="#">Action three</a></li>
                                        </ul>
                                        <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("nature-section")}>
                                            <button type="button" id="darkButtonSlim">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t4.ftcdn.net/jpg/07/33/55/15/240_F_733551554_8EeuHjqKGXQj0GjNvw9EJgEb6KbY3fB1.jpg"} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Music</h5>
                                    <p id="textBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired track</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Action two</a></li>
                                            <li><a className="dropdown-item" href="#">Action three</a></li>
                                        </ul>
                                        <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("music-section")}>
                                            <button type="button" id="darkButtonSlim">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t4.ftcdn.net/jpg/04/87/69/93/240_F_487699333_0R5Asoup6cWlpD1TUlMlqyQJEIMtAAKP.jpg"} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Spotify</h5>
                                    <p id="textBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired track</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Action two</a></li>
                                            <li><a className="dropdown-item" href="#">Action three</a></li>
                                        </ul>
                                        {/* <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("nature-section")}> */}
                                        <button type="button" id="darkButtonSlim">Learn More</button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={img2} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Mixes</h5>
                                    <p id="textBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired Mix</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Action two</a></li>
                                            <li><a className="dropdown-item" href="#">Action three</a></li>
                                        </ul>
                                        <Link to="/mixes">
                                            <button type="button" id="darkButtonSlim">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}