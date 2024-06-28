import React from "react";
import "../../styles/dashboard.css";
import mixes from "/workspaces/sp65-final-project-g3/src/front/img/mixes.jpg"
import binaural from "/workspaces/sp65-final-project-g3/src/front/img/binaural.jpg"
import playlist from "/workspaces/sp65-final-project-g3/src/front/img/playlist.jpg"
import soundscape from "/workspaces/sp65-final-project-g3/src/front/img/soundscape.jpg"
import tutorial from "/workspaces/sp65-final-project-g3/src/front/img/tutorial.jpg"
import { Link } from "react-router-dom";


export const Dashboard = () => {

    return (
        <>
            <div className="row playlist-area" id="MixItUp859BE6">
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={mixes} alt="" />
                        <h5><Link to="/mixes">Mixes</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={binaural} alt="" />
                        <h5><Link to="/binaural">Binaural</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={playlist} alt="" />
                        <h5><Link to="/playlist">Playlist</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg-6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={soundscape} alt="" />
                        <h5><Link to="/soundscape">Soundscape</Link></h5>
                    </div>
                </div>
                <div className="mix col-lg6 col-md-6 col-sm-6 col-xsm-6 genres">
                    <div className="playlist-item">
                        <img src={tutorial} alt="" />
                        <h5><Link to="/tutorial">Tutorial</Link></h5>
                    </div>
                </div>
            </div>
        </>
    )
}