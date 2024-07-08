import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext"
import "../../styles/soundscapes.css"
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
                <div className="tm-search-form-container">
                    <div className="row">
                        <div className="col-3">
                            <span className="form-inline tm-search-form">
                                <div className="text-uppercase tm-new-release">Soundscapes </div>
                            </span>
                        </div>
                        <div className="col-9">
                            <p className="textBinaural mt-2 mb-2">If you are not familiar with the term yet, a soundscape as it self-explains in the very essence of the word is just that, the scape discribed by sound. Use it to lay a background to the binaural tracks </p>
                        </div>
                    </div>
                </div>

                <div className="row tm-albums-container grid">
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

                <div className="row">
                    <div className="col-lg-12">
                        <div className="soundscape-tm-tag-line">
                            <h2 className="soundscape-tm-tag-line-title">Use these Soundscapes to lay a background for the binaural waves</h2>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-xl-12">
                        <div className="media-boxes">
                            <div className="media" id="nature-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t3.ftcdn.net/jpg/02/22/63/26/240_F_222632647_uMPpbpn4QnJptPz6P3ikfdDkNTDb4ACp.jpg"} alt="Image" className="align-self-stretch" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Nature Sounds</h5>
                                                <p className="mb-0 fs-6">
                                                    Some people find nature extremelly relaxing. Studies tend to link it to a premeival state in which we spent a large majority of our existence as humans and our brains have kept the memory of.
                                                </p>
                                                <p>
                                                    Sound is wired into our reptilian brain as no other human sense is, arriving first to it and then passing on to the neo-cortex where we interpret through reason, story-telling.
                                                    Nature sounds, act on a basal level.
                                                </p>
                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-blue tm-text-white tm-buy">Load</a>
                                                <span className="tm-text-blue tm-price-tag">Track 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> 
                                    handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/09/30/audio_147bbf836d.mp3",
                                        "Ocean")}>Ocean</button>
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2023/11/18/audio_092516882e.mp3",
                                        "Forest"
                                    )}>Forest</button>
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2023/03/13/audio_df248bd9ae.mp3",
                                        "Night"
                                    )}>Night</button>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>You may choose to use this kind of soundscapes for:</h5>
                                        <p>
                                            -	Relaxation or for meditation, just the soundscape would be amazing.
                                        </p>
                                        <p>
                                            -	Try combinations of them with the different moving binaural waves, you can save your combinations in your "mixes".
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-blue tm-price-tag me-5">Uses:</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="organic-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch container-fluid">
                                        <img src={"https://t4.ftcdn.net/jpg/08/02/43/63/240_F_802436395_BB2TxiEuws6vA4dqWO7efJJxSe2qg3KV.jpg"} alt="Image" className="align-self-strech" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-pink-light">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-pink">Organic Sounds</h5>
                                                <p className="mb-0 fs-6">Some people find organic sounds extremelly appealing, and this name may encompass a wide variety of sounds.
                                                    They can be used in multiple fahsions and multiple purposes.

                                                </p>
                                                <p>
                                                    Some of the sounds we´ve included have a more "synthezised" feel to it, but not exclusive. There is some sense of rythm in some of them and there are just ASMR sounds too.
                                                    Experiment with them and use them as you feel will work for you.
                                                </p>
                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-pink tm-text-white tm-buy">Load</a>
                                                <span className="tm-text-pink tm-price-tag">Track 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/01/18/audio_70a2eceacd.mp3",
                                        "Synth"
                                    )}>Synth</button>
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/01/audio_a057a839a4.mp3",
                                        "Musical"
                                    )}>Musical</button>
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/11/10/audio_fc0e6a6d4d.mp3",
                                        "ASMR"
                                    )}>ASMR</button>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>You may choose to use this kind of Soundscapes for:</h5>
                                        <p>
                                            -	All of them are good to Relax, Sleep and meditate (don´t forget actually the three of them, are extremelly resemblant brain states, though of course not identical)
                                        </p>
                                        <p>
                                            -	Experiment, combine with the different Moving Binaural Waves and let us know your experience.
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-pink tm-price-tag me-5">Uses:</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="music-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t4.ftcdn.net/jpg/06/57/98/19/240_F_657981926_WYtt9d9vRmcrQqvp5Hy5MTT6G6BoL0n0.jpg"} alt="Image" className="align-self-stretch" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Sound & Musical Elements</h5>
                                                <p className="mb-0 fs-6">A music piece is expected to have some conductivity, structure and form, which appeals to our more "awake" state in general (not exclusively)</p>
                                                <p>The brain is always trying to "catch" the "pattern", when it does, you get dopamine, which is opposite to what you want if you are trying to relax or sleep (though in a cycle of hours it will generate serotonine but, it takes time).
                                                    These soundscapes, though involving musical elements, are not compositions or music pieces, it´s just a musical background.
                                                </p>
                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-blue tm-text-white tm-buy">Load</a>
                                                <span className="tm-text-blue tm-price-tag">Track 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/02/07/audio_48f80596b7.mp3",
                                        "60 BPM"
                                    )}>60 BPM</button>
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2022/02/07/audio_486ee27cb9.mp3",
                                        "80 BPM"
                                    )}>80 BPM</button>
                                    <button type="button" className="btn btn-secondary" id="glowCard5" 
                                    onClick={()=> handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/01/audio_a0cef0ca9e.mp3",
                                        "100 BPM"
                                    )}>100 BPM</button>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>You may choose to use this kind of soundscapes for:</h5>
                                        <p>
                                            These soundscapes involve rythm, and they have a perceivable rythm pattern, like a "mantra". You heart is a natural entrainer, and for a very large ammount of people works very fast.
                                            Low BPMS are great to calm-down, relax, meditate and sleep. You can also use them to focus, combine it for example with an Alpha Wave
                                        </p>
                                        <p>

                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-blue tm-price-tag me-5">Uses:</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="lists-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch container-fluid">
                                        <img src={"https://t3.ftcdn.net/jpg/05/54/95/76/240_F_554957692_l55wWG1XGkV33Anr0WtV2REAbE6Am3e3.jpg"} alt="Image" className="align-self-strech" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-pink-light">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-pink">Music</h5>
                                                <p className="mb-0 fs-6">
                                                    There is no "one-size" fits all in the world of music related things, and when it comes to our brain, well, let´s just put it like there´s more than meets the eye.
                                                </p>
                                                <p>
                                                    Basically, you are you, as I am I (we could get very philosophical), and there is no absolute value for: "beauty", "realxing", "energetic", etc. You are the narrator of your own story and music affects you in a way that may not be even similar to how it affects another fellow human being, why? well we need a lot more lines for that, probably a book and there are plenty about it.
                                                </p>
                                                <p>
                                                    So in Binaurapp we went a whole step further, and decided to give you the opportunity to choose your own playlists with the music you feel may help you better achieve your desired state.
                                                </p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>General conception of Music genres</h5>
                                        <p>
                                            Although you percieve music (and the world) in your own exclusive way, provided ou were not born in isolation and deprived of civilization, you may be subject to more or less influence by it. So the environment, the culture, the musical styles your close ones heard while you were growing up will have an impact in your own conception of the musical world.
                                        </p>
                                        <p>
                                            That is to say: you may find there are several common conceptions about effects of musical styles and even find in spotify playslists of relaxing music, energetic music, etc. In Music-therapy that would be called the "universal isos".
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-pink tm-price-tag me-5">Uses:</span>
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