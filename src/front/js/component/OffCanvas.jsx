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

                    <Link id="links" to="/">
                        <span className="material-symbols-outlined">home</span>
                        Home
                    </Link>

                    <Link to="/binaural">
                        <span className="material-symbols-outlined">music_video</span>
                        Binaurapp Content
                    </Link>

                    <Link id="links" to="/mixes">
                    <span className="material-symbols-outlined">instant_mix</span>
                        {/* <i className="fa-brands fa-mixer" /> */}
                        Mixes
                    </Link>

                    <Link to="/tutorial">
                        <span className="material-symbols-outlined">movie_info</span>
                        Tutorials
                    </Link>

                    <Link to="/binaural">
                        <span className="material-symbols-outlined">waves</span>
                        Binaural Waves
                    </Link>

                    <Link to="/soundscape">
                        <span className="material-symbols-outlined">stock_media</span>
                        Soundscapes
                    </Link>

                    <Link to="/binaural">
                        <span className="material-symbols-outlined">music_video</span>
                        Binaurapp Content
                    </Link>

               {/*      <a>
                        <span className="material-symbols-outlined">movie_info</span>
                        <Link to="/tutorial" type="button" data-bs-toggle="dropdown" >Tutorials</Link>
                        <ul className="dropdown-menu">
                            <Link id="links" to="/tutorial">
                                <li className="dropdown-item" >Tutorials</li>
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
                    </a> */}
               {/*      <a>
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
                    </a> */}
               {/*      <a>
                        <span className="material-symbols-outlined">stock_media</span>
                        <a id="links" type="button" data-bs-toggle="dropdown">Soundscapes</a>
                        <ul className="dropdown-menu">
                            <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("nature-section")}>
                                <li className="dropdown-item">Soundscapes</li>
                            </Link>
                            <Link to="/soundscape" onClick={() => actions.navigateToSoundscape("music-section")}>
                            <i className="fa-solid fa-headphones" />
                            <li className="dropdown-item">Music</li>
                            </Link>
                          <Link to="/playlist">
                                    <i className="fa-brands fa-spotify"/>
                                    <li className="dropdown-item">Spotify</li>
                                </Link> 
                        </ul>
                    </a> */}
                    {/* <a>
                        <span className="material-symbols-outlined">diversity_2</span>
                        <a>Team</a>
                    </a> */}
                    {/* <a>
                        <span className="material-symbols-outlined">mail</span>
                        <a>Support</a>
                    </a> */}
                  {/*   <a id="links">
                        <span className="material-symbols-outlined">settings_slow_motion</span>
                        <a>Settings</a>
                    </a> */}
                </nav>
            </aside>
        </>
    )
};