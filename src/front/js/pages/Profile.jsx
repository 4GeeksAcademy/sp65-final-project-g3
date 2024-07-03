import React from "react";
import "../../styles/profile.css";

export const Profile = () => {

/*     const user = {
        id: 2,
        email: "gaby@gmail.com",
        first_name: "gaby",
        last_name = db.Column(db.String(120), unique = False, nullable = True),
        country = db.Column(db.String(120), unique = False, nullable = True),
        city = db.Column(db.String(120), unique = False, nullable = True),
        date_of_birth = db.Column(db.Date, unique = False, nullable = True),
    } */

    return (
        <>
            {/*        <section className="player-section set-bg" data-setbg="img/player-bg.jpg" style="background-image: url(&quot;img/player-bg.jpg&quot;);"> */}
            <section className="player-section set-bg" data-setbg="img/player-bg.jpg" style={{ "background-image": "url(&quot;img/player-bg.jpg&quot;)" }}>

                <div className="player-box">
                    <div className="tarck-thumb-warp">
                        <div className="tarck-thumb">
                            <img src="img/wave-thumb.jpg" alt="" />
                            <button /* onClick="wavesurfer.playPause();" */ className="wp-play"></button>
                        </div>
                    </div>
                    <div className="wave-player-warp">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="wave-player-info">
                                    <h2>Michael Smith</h2>
                                    <p>One Night in Ibiza</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="songs-links">
                                    <a href=""><img src="img/icons/p-1.png" alt="" /></a>
                                    <a href=""><img src="img/icons/p-2.png" alt="" /></a>
                                    <a href=""><img src="img/icons/p-3.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div id="wavePlayer" className="clierfix">
                            <div id="audiowave" data-waveurl="music-files/8.mp3">
                                <wave style={{ display: "block", position: "relative", "user-select": "none", height: "80px", width: "100%", overflow: "auto hidden" }}>
                                    <wave style={{ position: "absolute", "z-index": 3, left: "0px", top: "0px", bottom: "0px", overflow: "hidden", width: "0px", display: "none", "box-sizing": "border-box", "border-right": "0px solid rgb(51, 51, 51)", "pointer-events": "none" }}>
                                        <canvas style={{ position: "absolute", left: "0px", top: "0px", bottom: "0px", height: "100%" }}></canvas>
                                        <div id="currentTime"></div>
                                    </wave>
                                    <canvas style={{ position: "absolute", "z-index": 2, left: "0px", top: "0px", bottom: "0px", height: "100%", "pointer-events": "none" }}></canvas>
                                </wave>
                            </div>

                            <div id="clipTime"></div>

                            <div className="wavePlayer_controls">
                                <button className="jp-prev player_button" onClick="wavesurfer.skipBackward();"></button>
                                <button className="jp-play player_button" onClick="wavesurfer.playPause();"></button>
                                <button className="jp-next player_button" onClick="wavesurfer.skipForward();"></button>
                                <button className="jp-stop player_button" onClick="wavesurfer.stop();"></button>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}