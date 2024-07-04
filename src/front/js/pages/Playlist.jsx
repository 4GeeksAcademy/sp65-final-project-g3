import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/playlist.css"
import img1 from "../../img/soundscape.jpg"
import img2 from "../../img/mixes.jpg"

export const Playlist = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    
    const alphaRef = useRef(null);
    const thetaRef = useRef(null);
    const deltaRef = useRef(null);

    useEffect(() => {
        if (!store.isLogin) {
            alert("Please Log-In or Sign-Up");
            navigate("/login");
        }
    }, [store.isLogin, navigate]);

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
                <div className="tm-search-form-container">
                    <div className="row">
                        <div className="col-3">
                            <span className="form-inline tm-search-form">
                                <div className="text-uppercase tm-new-release">Playlists</div>
                            </span>
                        </div>
                        <div className="col-9">
                            <p className="textBinaural mt-2 mb-2">Here you will find all the possible content for TRACK 1. This track is exclusive for laying the background to your Binaural entrainment waves.
                                Choose one and it will automatically load on to TRACK 1
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row tm-albums-container grid">
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

                <div className="row">
                    <div className="col-lg-12">
                        <div className="playlist-tm-tag-line">
                            <h2 className="playlist-tm-tag-line-title">Load content on to TRACK 1 and play with the volume between the tracks</h2>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-xl-12">
                        <div className="media-boxes">
                            <div className="media" id="soundscape-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={img1} alt="Image" className="align-self-stretch img-fluid" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Soundscapes</h5>
                                            </div>
                                            <div className="dropdown-center">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Click on the desired track to load on TRACK 1
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Action two</a></li>
                                                    <li><a className="dropdown-item" href="#">Action three</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>What are Soundscapes?</h5>
                                    </div>
                                    <div className="">
                                        <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("nature-section")}>
                                        <button type="button" className="btn btn-secondary tetx-nowrap" id="glowCard5">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="music-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t4.ftcdn.net/jpg/07/33/55/15/240_F_733551554_8EeuHjqKGXQj0GjNvw9EJgEb6KbY3fB1.jpg"} alt="Image" className="align-self-stretch img-fluid" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Music</h5>
                                            </div>
                                            <div className="dropdown-center">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Click on the desired track to load on TRACK 1
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Action two</a></li>
                                                    <li><a className="dropdown-item" href="#">Action three</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>This is all original Music</h5>
                                    </div>
                                    <div className="">
                                        <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("music-section")}>
                                        <button type="button" className="btn btn-secondary tetx-nowrap" id="glowCard5">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="spoti-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t4.ftcdn.net/jpg/04/87/69/93/240_F_487699333_0R5Asoup6cWlpD1TUlMlqyQJEIMtAAKP.jpg"} alt="Image" className="align-self-stretch img-fluid" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Spotify</h5>
                                            </div>
                                            <div className="dropdown-center">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Click on the desired track or playlist to load on TRACK 1
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Action two</a></li>
                                                    <li><a className="dropdown-item" href="#">Action three</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>You must have signed up with your spotify account</h5>
                                    </div>
                                    <div className="">
                                        <button type="button" className="btn btn-secondary tetx-nowrap" id="glowCard5">Learn More</button>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="mixes-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={img2} alt="Image" className="align-self-stretch img-fluid" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Mixes</h5>
                                            </div>
                                            <div className="dropdown-center">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Click on your desired Mix to load on to Mixer
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Action two</a></li>
                                                    <li><a className="dropdown-item" href="#">Action three</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>Your Mixes are stored in your Mixes</h5>
                                    </div>
                                    <div className="">
                                        <Link to="/mixes">
                                            <button type="button" className="btn btn-secondary tetx-nowrap" id="glowCard5">Mixes</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div> {/* <!-- media-boxes --> */}
                    </div>
                </div>



            </div>{/*  <!-- .container --> */}


        </>
    )
}