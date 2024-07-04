import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext"
import "../../styles/tutorial.css"
import { useNavigate } from "react-router-dom";

export const Tutorial = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate();
    
    const start = useRef(null);
    const mixer = useRef(null);
    const playlist = useRef(null);
    const what = useRef(null);

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

        switch (store.tutorialtSection) {
            case "start-section":
                scrollToRef(start);
                break;
            case "mixer-section":
                scrollToRef(mixer);
                break;
            case "playlist-section":
                scrollToRef(playlist);
            case "what-section":
                scrollToRef(what);
                break;                
            default:
                break;
        }
    }, [store.tutorialSection]);
    console.log("current Section", store.tutorialSection);

    return (
        <>

            <div className="tutorial-welcome-section">
                <div className="container text-center tm-welcome-container">
                    <div className="tm-welcome">
                        <i className="fas tm-fa-big fa-music tm-fa-mb-big"></i>
                        <h1 className="text-uppercase mb-3 tm-site-name">Tutorials</h1>
                        <p className="tm-site-description">All you need to know</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="tm-search-form-container">
                    <div className="row">
                        <div className="col-3">
                            <span action="index.html" method="GET" className="form-inline tm-search-form">
                                <div className="text-uppercase tm-new-release">Tutorials </div>
                            </span>
                        </div>
                        <div className="col-9">
                            <p className="textBinaural mt-2 mb-2">From the very basics of reminding you to wear headphones for binaural entrainment to be possible, to different techniques and approaches to the use of both Binaurapp and the concepts that brought to the creation of this app</p>
                        </div>
                    </div>
                </div>

                <div className="row tm-albums-container grid">
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard1">
                            <a href="#start-section">
                                <img src={"https://t3.ftcdn.net/jpg/03/77/77/08/240_F_377770883_VoDO2qaaoIYnyzpMrHCGDWXWAVtfD32Y.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Getting Started</h2>
                                    <p>Put on your headphones</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard2">
                            <a href="#mixer-section">
                                <img src={"https://t3.ftcdn.net/jpg/00/45/45/28/240_F_45452813_GRq1yWpEBQI2htiYwXO0WLCRhNInYlue.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>The Mixer</h2>
                                    <p>Loading Tracks</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard3">
                            <a href="#playlist-section">
                                <img src={"https://t3.ftcdn.net/jpg/05/65/02/08/240_F_565020838_UcbYro1V23M1FL2QdKSr0c7uhl8mDdeI.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>The Playlist</h2>
                                    <p>Soundscapes & Music</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard4">
                            <a href="#what-section">
                                <img src={"https://t4.ftcdn.net/jpg/05/79/53/91/240_F_579539131_zMSGJoJ4F3VVRAfbBIRByap7EiRqW7yI.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>What is Binaurapp?</h2>
                                    <p>Binaural and all the theory</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="tutorial-tm-tag-line">
                            <h2 className="tutorial-tm-tag-line-title">Get familiar with the use of Binaurapp and the amazing concepts behind it</h2>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-xl-12">
                        <div className="media-boxes">
                            <div className="media" id="start-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t4.ftcdn.net/jpg/08/17/40/67/240_F_817406710_lQakfpC6ZYSlsumK4CdhFCbDk3kcHdnr.jpg"} alt="Image" className="align-self-stretch" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Getting Started</h5>
                                                <p className="mb-0 fs-6">
                                                    PUT ON YOUR HEADPHONES! Sorry for the shout out! but yeah, you don´t get any of the fun without them. Why? basically all the "magic" happens thanks to ambisonics technology which you can appreciate in this case only by usisng headphones.
                                                </p>
                                                <p>
                                                    So that´s the first thing you need to do. Right after that, we recommend getting familiar with the use of the mixer, and the different options you get for backing tracks (not karaoke kind, the actual track that backs the binaural waves up) and of course the uses of the Moving Binaural Waves.
                                                </p>
                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-blue tm-text-white tm-buy">Video</a>
                                                <span className="tm-text-blue tm-price-tag"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*              <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary">Ocean</button>
                                    <button type="button" className="btn btn-secondary">Forest</button>
                                    <button type="button" className="btn btn-secondary">Night</button>
                                </div> */}
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>Typical Questions</h5>
                                        <p>
                                            -	Will any kind of headphones do? yes, any kind will do. Just like most things, the experience improves with better gear. In fact, we recommend you use closed type headphones (covering you ears) but any kind will work.
                                        </p>
                                        <p>

                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-blue tm-price-tag me-5">Tips</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="mixer-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch container-fluid">
                                        <img src={"https://t4.ftcdn.net/jpg/07/50/49/35/240_F_750493557_N6hSYv6tcZhUhK5SShxrWn9bENnKESAX.jpg"} alt="Image" className="align-self-strech" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-pink-light">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-pink">The Mixer</h5>
                                                <p className="mb-0 fs-6">One of the key differentiators in Binaurapp is that you get to choose the level of exposure to the entrainment agent. You get two tracks, one for the background and one for the entrainer, each with it´s own volume control.
                                                </p>
                                                <p>
                                                    In the video you will see a basic explanation of the mixer, but it´s not rocket science. You can choose to upload the tracks from the very mixer or you can navigate to the playlist pages and binaural pages respectively for a more detailed explanation of each track.
                                                </p>
                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-pink tm-text-white tm-buy">Video</a>
                                                <span className="tm-text-pink tm-price-tag"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary">Synth</button>
                                    <button type="button" className="btn btn-secondary">Musical</button>
                                    <button type="button" className="btn btn-secondary">ASMR</button>
                                </div> */}
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>Typical Questions:</h5>
                                        <p>
                                            -	Do I need to use a background or I can go for just the Binaural Track? You can of course choose to either turn Track 1´s volume completelly down, or not include a Track 1.
                                        </p>
                                        <p>
                                            -	In some cases, the background may help induce desired states, especially those with rythm since they will help entrain through heart-beat synch, but the main thing is always Track 2.
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-pink tm-price-tag me-5">Tips</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="playlist-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t3.ftcdn.net/jpg/08/12/94/64/240_F_812946424_rGuEESUckxezrXv1oMy7zHUVtIk8TtPX.jpg"} alt="Image" className="align-self-stretch" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">The Playlist</h5>
                                                <p className="mb-0 fs-6">What can be cooler than applying binaural entrainment to the music of your choice? Well, that´s one of Binaurapp´s main features and what makes us different.</p>
                                                <p>In the playlist section you will find our very own soundscapes, which include more nature sounds or organic sounds and some more musical soundscapes, but also if you choose to sign up with your Spotify account
                                                    You will have access to your playlists.
                                                </p>
                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-blue tm-text-white tm-buy">Video</a>
                                                <span className="tm-text-blue tm-price-tag"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*     <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary">60 BPM</button>
                                    <button type="button" className="btn btn-secondary">80 BPM</button>
                                    <button type="button" className="btn btn-secondary">100 BPM</button>
                                </div> */}
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>Typical Questions</h5>
                                        <p>
                                            Do I need a Spotify account to use Binaurapp? You don´t, you can choose to use the inner-app content, but if you wish to choose your music you do need to sign up with a premium spotify account.
                                        </p>
                                        <p>

                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-blue tm-price-tag me-5">Tips</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media" id="what-section">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch container-fluid">
                                        <img src={"https://t3.ftcdn.net/jpg/06/96/32/52/240_F_696325264_lODIXcco4tGRdjJzZAlXFC87wOoR398u.jpg"} alt="Image" className="align-self-strech" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-pink-light">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-pink">What is Binaurapp?</h5>
                                                <p className="mb-0 fs-6">
                                                   In this section you will find interesting content to tell you a little more about what is Binaurapp. The idea is to give you a better understanding of what is Binaural to begin with, and the different uses that word has (and lots of miss-uses too).
                                                </p>
                                                <p>
                                                 There is also an explanation on Matias Kamelman´s theory of entrainment through moving binaural waves and how this method is completelly different to what has been used so far. 
                                                </p>
                                                <p>
                                                 
                                                </p>

                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-pink tm-text-white tm-buy">Video</a>
                                                <span className="tm-text-blue tm-price-tag"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary">What is Binaural?</button>
                                    <button type="button" className="btn btn-secondary">What is Entrainment?</button>
                                    <button type="button" className="btn btn-secondary">Moving Binaural Waves</button>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>Typical Questions:</h5>
                                        <p>
                                            Well there are several questions in these subjects, we hope to clear some of them with the videos but, nevertheless you may feel you need more info. 
                                        </p>
                                        <p>
                                           One of the biggest challenges of our times is filtering information, especially from one´s self cause we are inclined to look for corroboration of what we already believe in. 
                                           The Theory of Moving Binaural Waves came from many years of researching on what was taken to the lab by researchers of all kinds, and the need to find something new. 
                                           If you need more info, browse the net, read a lot and of course wirte to us if you feel you have questions. 
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-pink tm-price-tag me-5">Tips</span>
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