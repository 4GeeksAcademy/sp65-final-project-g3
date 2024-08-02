import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/binaural.css"
import img1 from "../../img/soundscape.jpg"
import img2 from "../../img/mixes.jpg"
import playlistback from "../../img/playlistback.jpg"

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

    //   Lógica para llamar a la librería Soundscapes
    const handleSoundscapeClick = (url, name) => {
        actions.setTrack1Url(null);
        actions.setTrack1Url(url);
        actions.setTrackOneName(name);
     /*    actions.setTrack1Name(name) */
        navigate("/mixer")
    };

    const handlemixesClick = (track_1_name, track_2_name, track_1_url, binaural_id) => {
        console.log("Loading mix with:", track_1_name, track_2_name, track_1_url, binaural_id);
        actions.setTrack1Url(track_1_url);
        actions.setTrackOneName(track_1_name);
        actions.setTrack2Url(binaural_id);
        actions.setTrackTwoName(track_2_name);
        navigate("/mixer");
        console.log("Url Values:", store.setTrack1Url, store.setTrack2Url);
      };

    return (
        <>
            <div className="playlist-welcome-section" style={{ backgroundImage: `url(${playlistback})` }}>
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
                            <div id="soundscape-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={img1} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Soundscapes</h5>
                                    <p id="textBody">
                                    A soundscape is like a soundtrack for your environment. It’s made up of various sounds that create an atmosphere or mood, similar to how a painting creates a visual scene. Unlike a piece of music, which usually has a melody, rhythm, and structure, a soundscape is more about the overall feeling and texture of the sounds. Think of it as the difference between a song and the natural sounds you hear in a forest. A song has a clear beginning, middle, and end, while a soundscape might blend sounds like birds chirping, leaves rustling, and a distant stream to create a relaxing or immersive experience.</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired track</button>
                                        <ul className="dropdown-menu">
                                            {store.soundscapeList.map((item, index) => (
                                                <li key={index}>
                                                    <button className="dropdown-item" onClick={() => handleSoundscapeClick(item.url_jamendo, item.name)}>{item.name}</button>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("nature-section")}>
                                            <button type="button" id="darkButtonSlim">Go To Soundscapes</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="binaurappCard" className="card">
                            <div id="music-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t4.ftcdn.net/jpg/07/33/55/15/240_F_733551554_8EeuHjqKGXQj0GjNvw9EJgEb6KbY3fB1.jpg"} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Music</h5>
                                    <p id="textBody">You’ll find various types of backing tracks among our suggestions, as we aim to grow with the sonic proposals we offer. Some tracks are already fully binaural, with elements moving in the sound space, creating an immersive experience.</p>
                                    <p id="textBody">Following the guidelines of music therapy and musicology, Binaurapp approaches music from the subjective concept that the listener defines whether the music is pleasant or calming. There is no established or global parameter—it's all about your personal experience.</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired track</button>
                                        <ul className="dropdown-menu">
                                            {store.soundscapeList.map((item, index) => (
                                                <li key={index}>
                                                    <button className="dropdown-item" onClick={() => handleSoundscapeClick(item.url_jamendo, item.name)}>{item.name}</button>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("music-section")}>
                                            <button type="button" id="darkButtonSlim">Go To Music</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="binaurappCard" className="card">
                            <div id="spoti-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t4.ftcdn.net/jpg/04/87/69/93/240_F_487699333_0R5Asoup6cWlpD1TUlMlqyQJEIMtAAKP.jpg"} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Spotify</h5>
                                    <p id="textBody">We are working hard to integrate Spotify as one of the options for backing tracks. Currently, it is only possible to have Spotify playing in the background due to their policy, which we believe is to protect copyright. In upcoming versions, you will be able to use the Spotify app and play moving binaural waves from Binaurapp. Thank you for your patience and understanding as we work to bring this feature to you!</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired track</button>
                                        <ul className="dropdown-menu">
                                           {/*  <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Action two</a></li>
                                            <li><a className="dropdown-item" href="#">Action three</a></li> */}
                                        </ul>
                                        {/* <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("nature-section")}> */}
                                        <button type="button" id="darkButtonSlim">Learn More</button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="binaurappCard" className="card">
                            <div id="mixes-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={img2} alt="Image" />
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Mixes</h5>
                                    <p id="textBody">In this tab, you will find all the mixes you have saved. We invite you to explore new ways of combining moving binaural waves with different types of soundscapes and save your combinations as mixes.</p>
                                    <div className="d-flex justify-content-around">
                                        <button type="button" id="greenButtonSlim" data-bs-toggle="dropdown">Select the desired Mix</button>
                                        <ul className="dropdown-menu">
                                            {store.mixesList.map((item, index) => (
                                                <li key={index}>
                                                    <button className="dropdown-item" onClick={() => handlemixesClick(item.track_1_name, item.track_2_name, item.track_1_url, item.binaural_id)}>{item.mix_title}</button>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/mixes">
                                            <button type="button" id="darkButtonSlim">Go To Mixes</button>
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