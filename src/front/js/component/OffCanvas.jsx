import React from "react";
import { Link } from "react-router-dom";

export const OffCanvas = () => {

    return (
        <>
            <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Browse Content
            </button>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Binaurapp Content</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Please choose an item to browse
                    </div>
                    <div>
                        <Link to="/mixes">
                    <button type="button" className="btn btn-secondary">Mixes</button>   
                        </Link>
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Tutorials
                        </button>
                        <ul className="dropdown-menu">
                            <Link to="/tutorials">
                            <li className="dropdown-item" href="#">What is Binaurapp?</li>
                            </Link>
                            <Link to="/meditation">                            
                            <li className="dropdown-item" href="#">Meditation</li>
                            </Link>
                            <Link to="/sleep">
                            <li className="dropdown-item" href="#">Sleep</li>
                            </Link>
                            <Link to="/focus">
                            <li className="dropdown-item" href="#">Focus</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Binaural Waves
                        </button>
                        <ul className="dropdown-menu">
                            <Link to="/alpha">
                            <li className="dropdown-item" href="#">Alpha</li>
                            </Link>
                            <Link to="/theta">
                            <li className="dropdown-item" href="#">Theta</li>
                            </Link>
                            <Link to="/delta">
                            <li className="dropdown-item" href="#">Delta</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Soundscapes
                        </button>
                        <ul className="dropdown-menu">
                            <Link to="/soundscape">
                            <li className="dropdown-item" href="#">Soundscapes</li>
                            </Link>
                            <li className="dropdown-item" href="#">Music</li>
                            <Link to="/soundscape">
                            </Link>
                            <Link to="/soundscape">
                            <li className="dropdown-item" href="#">Spotify</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
};