import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Binaural_Logo from "../../img/binaural_logos/Logo_binaurapp.png"

export const OffCanvas = () => {

    return (
        <>
            <aside className="sidebar col align-items-left text-white">
                <div className="header d-flex mx-3">
                <img id="BinaurappLogo" src={Binaural_Logo} alt="Binaural_logo" className="d-inline-block" />
                    <p id="binaurapp">Binaurapp</p>
                </div>
                <div>

                    <div className="">
                        <br/>
                        <br/>
                        <br/>
                        <Link id="sidebarIcons" to="/">
                            <span id="BinaurappIcons" className="material-symbols-outlined">home</span>
                            <p id="sidebarText">Home</p>
                        </Link>

                        <Link id="sidebarIcons" to="/dashboard">
                            <span id="BinaurappIcons" className="material-symbols-outlined">music_video</span>
                            <p id="sidebarText">Dashboard</p>
                        </Link>

                        <Link id="sidebarIcons" to="/mixes">
                        <span id="BinaurappIcons" className="material-symbols-outlined">instant_mix</span>
                            {/* <i className="fa-brands fa-mixer" /> */}
                            <p id="sidebarText">Mixes</p>
                        </Link>

                        <Link id="sidebarIcons" to="/tutorial">
                            <span id="BinaurappIcons" className="material-symbols-outlined">movie_info</span>
                            <p id="sidebarText">Tutorials</p>
                        </Link>

                        <Link id="sidebarIcons" to="/binaural">
                            <span id="BinaurappIcons" className="material-symbols-outlined">waves</span>
                            <p id="sidebarText">Binaural Waves</p>
                        </Link>

                        <Link id="sidebarIcons" to="/soundscape">
                            <span id="BinaurappIcons" className="material-symbols-outlined">stock_media</span>
                            <p id="sidebarText">Soundscapes</p>
                        </Link>

                        <Link id="sidebarIcons" to="/playlist">
                            <span id="BinaurappIcons" className="material-symbols-outlined">library_music</span>
                            <p id="sidebarText">Playlist</p>
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* Esto debe ir al final */}
                    <div className="">
                        <hr/>
                        <Link id="sidebarIconsBottom" to="/profile">
                            <img id="profileImg" src={Binaural_Logo} alt="Binaural_logo"/>
                            <p id="sidebarTextBottom">Profile</p>
                        </Link>

                        <Link id="sidebarIconsBottom" to="/">
                            <span id="BinaurappIcons" className="material-symbols-outlined">logout</span>
                            <p id="sidebarText">Logout</p>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
};