import React from "react";
import { Link } from "react-router-dom";
import "../../styles/offCanvas.css";

export const OffCanvas = () => {

    return (
        <>
            <aside className="sidebar col align-items-left text-white">
                <div className="header d-flex mx-3">
                    <span className="material-symbols-outlined m-2">network_intelligence_update</span>
                    <p id="binaurapp">Binaurapp</p>
                </div>
                <nav>
                    <a>
                        <span className="material-symbols-outlined">home</span>
                        <Link id="links" to="/">
                        <a id="links">Home</a>
                        </Link>
                    </a>
                    <a>
                        <span className="material-symbols-outlined">music_video</span>
                        <a id="links">Binaurapp Content</a>
                    </a>
                    <a>
                        <i className="fa-brands fa-mixer"/>
                        <Link id="links" to="/mixes">
                        <a>Mixes</a>
                        </Link>
                    </a>
                    <a>
                    <span className="material-symbols-outlined">movie_info</span>
                        <a id="links" type="button" data-bs-toggle="dropdown">Tutorials</a>
                            <ul className="dropdown-menu">
                                <Link id="links" to="/tutorial">
                                    <li className="dropdown-item" >What is Binaurapp?</li>
                                </Link>
                                <Link id="links" to="/tutorial" onClick={() => actions.navigateToTutorial("mixer-section")}>
                                    <li className="dropdown-item">Mixer</li>
                                </Link>
                                <Link id="links" to="/tutorial" onClick={() => actions.navigateToTutorial("playlist-section")}>
                                    <li className="dropdown-item">Playlist</li>
                                </Link>
                                <Link id="links" to="/tutorial">
                                    <li className="dropdown-item">Binaural</li>
                                </Link>
                            </ul>                  
                    </a>
                    <a>
                    <span className="material-symbols-outlined">waves</span>
                        <a type="button" data-bs-toggle="dropdown">Binaural Waves</a>
                            <ul className="dropdown-menu">
                                <Link to="/binaural" onClick={() => actions.navigateToSection("alpha-section")}>
                                    <li className="dropdown-item">Alpha</li>
                                </Link>
                                <Link to="/binaural" onClick={() => actions.navigateToSection("theta-section")}>
                                    <li className="dropdown-item">Theta</li>
                                </Link>
                                <Link to="/binaural" onClick={() => actions.navigateToSection("delta-section")}>
                                    <li className="dropdown-item">Delta</li>
                                </Link>
                            </ul>
                    </a>
                    <a>
                        <span className="material-symbols-outlined">stock_media</span>
                        <a id="links" type="button" data-bs-toggle="dropdown">Soundscapes</a>
                            <ul className="dropdown-menu">
                                <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("nature-section")}>
                                <li className="dropdown-item">Soundscapes</li>
                                </Link>
                                <i className="fa-solid fa-headphones"/>
                                <li className="dropdown-item">Music</li>
                                <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("music-section")}>
                                </Link>
                                {/* <Link to="/playlist">
                                    <i className="fa-brands fa-spotify"/>
                                    <li className="dropdown-item">Spotify</li>
                                </Link> */}
                            </ul>
                    </a>
                    {/* <a>
                        <span className="material-symbols-outlined">diversity_2</span>
                        <a>Team</a>
                    </a> */}
                    {/* <a>
                        <span className="material-symbols-outlined">mail</span>
                        <a>Support</a>
                    </a> */}
                    <a id="links">
                        <span className="material-symbols-outlined">settings_slow_motion</span>
                        <a>Settings</a>
                    </a>
                </nav>
            </aside>
        </>
    )
};