import React, { useContext, useEffect } from "react";
import "../../styles/dashboard.css";
import mixes from "../../img/mixes.jpg"
import binaural from "../../img/binaural.jpg"
import playlist from "../../img/playlist.jpg"
import soundscape from "../../img/soundscape.jpg"
import tutorial from "../../img/tutorial.jpg"
import upload from "../../img/upload.jpg"
import mixer from "../../img/Mixer.jpg"
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Dashboard = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.isLogin) {
            alert("Please Log-In or Sign-Up");
            navigate("/login")
        }
    }, [store.isLogin, navigate]);

    if (!store.isLogin) {
        return null;
    }
    return (
        <>
            <div className="row playlist-area" id="MixItUp859BE6">
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={mixes} alt="" />
                        <h5><Link id="linkText" to="/mixes">Mixes</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={binaural} alt="" />
                        <h5><Link id="linkText" to="/binaural">Binaural</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={playlist} alt="" />
                        <h5><Link id="linkText" to="/playlist">Playlist</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={soundscape} alt="" />
                        <h5><Link id="linkText" to="/soundscape">Soundscape</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={tutorial} alt="" />
                        <h5><Link id="linkText" to="/tutorial">Tutorial</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={mixer} alt="" />
                        <h5><Link id="linkText" to="/mixer">Mixer</Link></h5>
                    </div>
                </div>
                {store.user.is_admin && (
                    <>
                        <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                            <div className="playlist-item">
                                <img src={upload} alt="" />
                                <h5><Link id="linkText" to="/uploadbinaural">Upload Binaural</Link></h5>
                            </div>
                        </div>
                        <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                            <div className="playlist-item">
                                <img src={upload} alt="" />
                                <h5><Link id="linkText" to="/uploadsoundscape">Upload Soundscape</Link></h5>
                            </div>
                        </div>
                        <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                            <div className="playlist-item">
                                <img src={upload} alt="" />
                                <h5><Link id="linkText" to="/uploadtutorial">Upload Tutorial</Link></h5>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}