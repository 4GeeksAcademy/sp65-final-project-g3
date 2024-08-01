import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/binaural.css";
import { useNavigate } from "react-router-dom";

export const Soundscape = () => {
    const { store, actions } = useContext(Context)
    const soundScapes = useRef(null);
    const organic = useRef(null);
    const music = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const scrollToRef = (ref) => {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };

        switch (store.soundscapetSection) {
            case "nature-section":
                scrollToRef(soundScapes);
                break;
            case "organic-section":
                scrollToRef(organic);
                break;
            case "music-section":
                scrollToRef(music);
                break;
            default:
                break;
        }
    }, [store.soundscapeSection]);
    console.log("current Section", store.soundscapeSection);

  

    const handleLoadTrack = (url, name) => {
        actions.setTrack1Url(url);
        actions.setTrackOneName(name);
        navigate("/mixer");
        console.log("setTrack1Url Value:", store.setTrack1Url);
    };

    const [isVisibleFirst, setIsVisibleFirst] = useState(false);

    const handleDisplayInfoFirst = () => {
        setIsVisibleFirst(prev => !prev);
    };

    const [isVisibleSecond, setIsVisibleSecond] = useState(false);

    const handleDisplayInfoSecond = () => {
        setIsVisibleSecond(prev => !prev);
    };

    const [isVisibleThird, setIsVisibleThird] = useState(false);

    const handleDisplayInfoThird = () => {
        setIsVisibleThird(prev => !prev);
    };

    const [isVisibleFourth, setIsVisibleFourth] = useState(false);

    const handleDisplayInfoFourth = () => {
        setIsVisibleFourth(prev => !prev);
    };

    return (
        <>
            <div className="soundscape-welcome-section">
                <div className="container text-center tm-welcome-container">
                    <div className="tm-welcome">
                        <i className="fas tm-fa-big fa-music tm-fa-mb-big"></i>
                        <h1 className="text-uppercase mb-3 tm-site-name">Soundscapes</h1>
                        <p className="tm-site-description">Background Music</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="indexImg" className="row tm-albums-container grid">
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard1">
                            <a href="#nature-section">
                                <img src={"https://c1.wallpaperflare.com/preview/826/593/172/purple-dusk-dawn-water-sunset.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Soundscape</h2>
                                    <p>Nature Sounds</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard2">
                            <a href="#organic-section">
                                <img src={"https://richardhume.com/wp-content/uploads/2022/03/Lake-Mackenzie.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Soundscape</h2>
                                    <p>Organic Sounds</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard3">
                            <a href="#music-section">
                                <img src={"https://e0.pxfuel.com/wallpapers/591/637/desktop-wallpaper-mountain-relection-in-the-lake-fog-breathtaking-forest-sunsets-mountains-misty-lake-splendor-scenic-view-nature-reflection-majestic-evening.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Soundscape</h2>
                                    <p>Sound & Musical Elements</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard4">
                            <a href="#lists-section">
                                <img src={"https://w0.peakpx.com/wallpaper/318/432/HD-wallpaper-lake-at-dawn-dew-nature-sun-sunrise-trees-water-waves.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Music</h2>
                                    <p>Easy Listening</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                </div>

                <div className="row tm-albums-container grid">
                    <div className="row featurette">

                        <div id="binaurappCard" className="card">
                            <div id="nature-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t3.ftcdn.net/jpg/02/22/63/26/240_F_222632647_uMPpbpn4QnJptPz6P3ikfdDkNTDb4ACp.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo" onClick={handleDisplayInfoFirst}><span class="material-symbols-outlined">info</span>
                                            <span className="helpTextInfo">More Info</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 mx-5">
                                    <h5 id="textHeader">Nature Sounds</h5>
                                    <p id="textBody">Some people find nature extremelly relaxing. Studies tend to link it to a premeival state in which we spent a large majority of our existence as humans and our brains have kept the memory of.
                                        Sound is wired into our reptilian brain as no other human sense is, arriving first to it and then passing on to the neo-cortex where we interpret through reason, story-telling.
                                        Nature sounds, act on a basal level.</p>
                                </div>
                                <div id="buttonContainer" className="col-md-2 order-md-3">
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/09/30/audio_147bbf836d.mp3", "Ocean")}>Ocean</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2023/11/18/audio_092516882e.mp3", "Forest")}>Forest</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2023/03/13/audio_df248bd9ae.mp3", "Night")}>Night</button>
                                </div>
                            </div>
                        </div>

                        {isVisibleFirst && (
                            <div id="infoText">
                                <h5>You may choose to use this kind of soundscapes for:</h5>
                                <p>-	Relaxation or for meditation, just the soundscape would be amazing.</p>
                                <p>-	Try combinations of them with the different moving binaural waves, you can save your combinations in your "mixes".</p>
                            </div>
                        )}

                        <div id="binaurappCard" className="card">
                            <div id="organic-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t4.ftcdn.net/jpg/08/02/43/63/240_F_802436395_BB2TxiEuws6vA4dqWO7efJJxSe2qg3KV.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo" onClick={handleDisplayInfoSecond}><span class="material-symbols-outlined">info</span>
                                            <span className="helpTextInfo">More Info</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 mx-5">
                                    <h5 id="textHeader">Organic Sounds</h5>
                                    <p id="textBody">Some people find organic sounds extremelly appealing, and this name may encompass a wide variety of sounds.
                                        They can be used in multiple fahsions and multiple purposes.
                                        Some of the sounds we´ve included have a more "synthezised" feel to it, but not exclusive. There is some sense of rythm in some of them and there are just ASMR sounds too.
                                        Experiment with them and use them as you feel will work for you.
                                    </p>
                                </div>
                                <div id="buttonContainer" className="col-md-2 order-md-3">
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/01/18/audio_70a2eceacd.mp3", "Synth")}>Synth</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/01/audio_a057a839a4.mp3", "Musical")}>Musical</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/11/10/audio_fc0e6a6d4d.mp3", "ASMR")}>ASMR</button>
                                </div>
                            </div>
                        </div>

                        {isVisibleSecond && (
                            <div id="infoText">
                                <h5>You may choose to use this kind of Soundscapes for:</h5>
                                <p>-	All of them are good to Relax, Sleep and meditate (don´t forget actually the three of them, are extremelly resemblant brain states, though of course not identical)</p>
                                <p>-	Experiment, combine with the different Moving Binaural Waves and let us know your experience.</p>
                            </div>
                        )}

                        <div id="binaurappCard" className="card">
                            <div id="music-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t4.ftcdn.net/jpg/06/57/98/19/240_F_657981926_WYtt9d9vRmcrQqvp5Hy5MTT6G6BoL0n0.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo" onClick={handleDisplayInfoThird}><span class="material-symbols-outlined">info</span>
                                            <span className="helpTextInfo">More Info</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 mx-5">
                                    <h5 id="textHeader">Sound & Musical Elements</h5>
                                    <p id="textBody">A music piece is expected to have some conductivity, structure and form, which appeals to our more "awake" state in general (not exclusively).
                                        The brain is always trying to "catch" the "pattern", when it does, you get dopamine, which is opposite to what you want if you are trying to relax or sleep (though in a cycle of hours it will generate serotonine but, it takes time).
                                        These soundscapes, though involving musical elements, are not compositions or music pieces, it´s just a musical background.</p>
                                </div>
                                <div id="buttonContainer" className="col-md-2 order-md-3">
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/02/07/audio_48f80596b7.mp3", "60 BPM")}>60 BPM</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/02/07/audio_486ee27cb9.mp3", "80 BPM")}>80 BPM</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/01/audio_a0cef0ca9e.mp3", "100 BPM")}>100 BPM</button>
                                </div>
                            </div>
                        </div>

                        {isVisibleThird && (
                            <div id="infoText">
                                <h5>You may choose to use this kind of soundscapes for:</h5>
                                <p>These soundscapes involve rythm, and they have a perceivable rythm pattern, like a "mantra". You heart is a natural entrainer, and for a very large ammount of people works very fast.
                                    Low BPMS are great to calm-down, relax, meditate and sleep. You can also use them to focus, combine it for example with an Alpha Wave</p>
                            </div>
                        )}

                        <div id="binaurappCard" className="card">
                            <div id="lists-section" className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard2" src={"https://t3.ftcdn.net/jpg/05/54/95/76/240_F_554957692_l55wWG1XGkV33Anr0WtV2REAbE6Am3e3.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo" onClick={handleDisplayInfoFourth}><span class="material-symbols-outlined">info</span>
                                            <span className="helpTextInfo">More Info</span></div>
                                    </div>
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Music</h5>
                                    <p id="textBody">There is no "one-size" fits all in the world of music related things, and when it comes to our brain, well, let´s just put it like there´s more than meets the eye.</p>
                                    <p id="textBody">Basically, you are you, as I am I (we could get very philosophical), and there is no absolute value for: "beauty", "realxing", "energetic", etc. You are the narrator of
                                        your own story and music affects you in a way that may not be even similar to how it affects another fellow human being, why? well we need a lot more lines for that, probably a book and there are plenty about it.
                                        So in Binaurapp we went a whole step further, and decided to give you the opportunity to choose your own playlists with the music you feel may help you better achieve your desired state.</p>
                                </div>
                            </div>
                        </div>

                        {isVisibleFourth && (
                            <div id="infoText">
                                <h5>General conception of Music genres</h5>
                                <p>Although you percieve music (and the world) in your own exclusive way, provided ou were not born in isolation and deprived of civilization, you may be subject to more or less
                                    influence by it. So the environment, the culture, the musical styles your close ones heard while you were growing up will have an impact in your own conception of the musical world.</p>
                                <p>That is to say: you may find there are several common conceptions about effects of musical styles and even find in spotify playslists of relaxing music, energetic music, etc. In Music-therapy that would be called the "universal isos".</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

