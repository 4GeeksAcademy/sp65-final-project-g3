import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/binaural.css"


export const Binaural = () => {
    const { actions } = useContext(Context);
    const { store } = useContext(Context)
    const alphaRef = useRef(null);
    const thetaRef = useRef(null);
    const deltaRef = useRef(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!store.isLogin) {
    //         alert("Please Log-In or Sign-Up");
    //         navigate("/login");
    //     }
    // }, [store.isLogin, navigate]);

    useEffect(() => {
        const scrollToRef = (ref) => {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };

        switch (store.currentSection) {
            case "alpha-section":
                scrollToRef(alphaRef);
                break;
            case "theta-section":
                scrollToRef(thetaRef);
                break;
            case "delta-section":
                scrollToRef(deltaRef);
                break;
            default:
                break;
        }
    }, [store.currentSection]);
    console.log("current Section", store.currentSection);

    const handleLoadTrack = (url, name) => {
        actions.setTrack2Url(url);
        actions.setTrackTwoName(name);
        navigate("/mixer");
        console.log("setTrackUrl Value:", store.setTrack2Url, store.setTrackTwoName);
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
            <div className="tm-welcome-section">
                <div className="container text-center tm-welcome-container">
                    <div className="tm-welcome">
                        <i className="fas tm-fa-big fa-music tm-fa-mb-big"></i>
                        <h1 className="text-uppercase mb-3 tm-site-name">Binaurapp</h1>
                        <p className="tm-site-description">Binaural Waves</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div id="indexImg" className="row tm-albums-container grid">
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard1">
                            <a href="#alpha-section">
                                <img src={"https://t4.ftcdn.net/jpg/08/19/96/27/360_F_819962780_5Jikl3FOY0OrqfLEjfjXZH9d9Uoqlkua.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Alpha Waves</h2>
                                    <p>8hz to 13Hz</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard2">
                            <a href="#theta-section">
                                <img src={"https://t4.ftcdn.net/jpg/08/19/96/25/240_F_819962587_aBHjpGdUT8m1OPmACz2J98Pru84N7vbN.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Theta Waves</h2>
                                    <p>3Hz to 8Hz</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard3">
                            <a href="#delta-section">
                                <img src={"https://t3.ftcdn.net/jpg/08/19/90/34/240_F_819903467_xvlu1QXgorjcdt6Up2kCnz0UooGHUIdn.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Delta Waves</h2>
                                    <p>0.1Hz to 3Hz</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie" id="glowCard4">
                            <a href="#entrainment-section">
                                <img src={"https://t4.ftcdn.net/jpg/07/69/70/99/240_F_769709971_Y50zb5MuTmUWQmF7IqxpBHSvMe9PbnZN.jpg"} alt="Image" className="img-fluid" />
                                <figcaption>
                                    <h2>Entrianment</h2>
                                    <p>Learn More about the theory</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                </div>
                <div className="row tm-albums-container grid">
                    <div className="row featurette">
                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t3.ftcdn.net/jpg/08/20/12/24/240_F_820122410_ofHPpJwDAjs919R7IcVto7h8AG2IiqEp.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo" onClick={handleDisplayInfoFirst}><span class="material-symbols-outlined">info</span>
                                        <span className="helpTextInfo">More Info</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 mx-5">
                                    <h5 id="textHeader">Apha Waves</h5>
                                    <p id="textBody">(8Hz – 13Hz) The fastest in the binaural-wave spectrum. These waves are observable on an EGG in the moments of pre-sleep, essential to fading into it.
                                        It is the passage from consciousness to semi-consciousness and light sleep.
                                        These 3 are actually quite mixed when Alpha waves are predominant.
                                        We also see Alpha predominance in Meditation, both delivered as in Vipassana or when a musician is in a deep state of concentration executing a piece.
                                    </p>
                                </div>
                                <div id="buttonContainer" className="col-md-2 order-md-3">
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_64483b3bf3.mp3", "12Hz")}>Load 12Hz Wave</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_47cb2f4c97.mp3", "10Hz")}>Load 10Hz Wave</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_4c9fa5db17.mp3", "8Hz")}>Load 8Hz Wave</button>
                                </div>
                            </div>
                        </div>

                        {isVisibleFirst && (
                        <div id="infoText">
                            <h5>You may choose to use this kind of waves for:</h5>
                            <p>
                                -	Relaxation or for meditation (in which case we recommend you choose music which´s BPM is not higher than 100 or soundscapes).
                            </p>
                            <p>
                                -	Focus and concentration (we recommend using the soundscapes but any music you choose may work along).
                            </p>
                        </div>
                        )}

                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t4.ftcdn.net/jpg/08/02/43/63/240_F_802436395_BB2TxiEuws6vA4dqWO7efJJxSe2qg3KV.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo"  onClick={handleDisplayInfoSecond}><span class="material-symbols-outlined">info</span>
                                        <span className="helpTextInfo">More Info</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 mx-5">
                                    <h5 id="textHeader">Theta Waves</h5>
                                    <p id="textBody">(3hz – 8Hz) Until quite recent we knew very few about these brain state.
                                        We knew it was a passing phase between light sleep, REM and deep sleep.
                                        They are necessary and present in most sane sleep architecture.
                                        They became prominently interesting when they were observed to have peaks during decision making, and intellectual activity.
                                    </p>
                                </div>
                                <div id="buttonContainer" className="col-md-2 order-md-3">
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_f14d1f916c.mp3", "7Hz")}>Load 7Hz Wave</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_c8de14825f.mp3", "5Hz")}>Load 5Hz Wave</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_b8d92c6e5b.mp3", "3Hz")}>Load 3Hz Wave</button>
                                </div>
                            </div>
                        </div>

                        {isVisibleSecond && (
                        <div id="infoText">
                            <h5>You may choose to use this kind of waves for:</h5>
                            <p>
                                -	You can use Theta to induce sleep, since they are present in phase change, especially when entering deep sleep, so exposing to them might help you conceive sleep or improve your sleep.
                            </p>
                            <p>
                                -	You can also experiment with Theta for improving cognition, focus and decision making, either on it´s own or combining it with high-energy music, high BPM´s or even Rock Music & Heavy Metal (Not a joke, actually classical music would work perfect too or Jazz, the more complex the music is the better it will work).
                            </p>
                        </div>
                        )}

                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard" src={"https://t3.ftcdn.net/jpg/07/27/79/86/240_F_727798659_GVhb4YANpW9sRoYjptqB6XQKwW9t5Jyo.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo" onClick={handleDisplayInfoThird}><span class="material-symbols-outlined">info</span>
                                        <span className="helpTextInfo">More Info</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 mx-5">
                                    <h5 id="textHeader">Delta Waves</h5>
                                    <p id="textBody">(0,1HZ – 3HZ) These are the slowest of the binaural spectrum, considering 0 would be brain death (clinically at least).
                                        There is a lot of bibliography about them and they are present in deep sleep (sleep without dreams) and associated with all the neurochemistry release necessary for regeneration.
                                        (see “about” for a deeper explanation).
                                    </p>
                                </div>
                                <div id="buttonContainer" className="col-md-2 order-md-3">
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_b8229380b3.mp3", "2Hz")}>Load 2Hz Wave</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_6cc67ed962.mp3", "1Hz")}>Load 1Hz Wave</button>
                                    <button type="button" id="greenButton"
                                        onClick={() => handleLoadTrack("https://cdn.pixabay.com/download/audio/2024/07/02/audio_cb9a98b9bf.mp3", "0,5Hz")}>Load 0,5Hz Wave</button>
                                </div>
                            </div>
                        </div>

                        {isVisibleThird && (
                        <div id="infoText">
                            <h5>You may choose to use this kind of waves for:</h5>
                            <p>
                                Exposing yourself to Delta waves may help you conceive sleep if you have trouble sleeping, but also it may improve your sleep and make your Delta states achievable or even enhance them.
                                If you are into meditation, these are great waves to expose yourself too.
                            </p>
                            <p>
                                Recent discoveries have also shown Delta activity in decision making, especially in highly risk trained people and difficult situations handling, so there is no harm in experimenting with these waves for studying and focus, though it may help to use some active music to accompany it in training.
                            </p>
                        </div>
                        )}

                        <div id="binaurappCard" className="card">
                            <div className="row featurette">
                                <div className="col-md-3 order-md-1">
                                    <img id="imageCard2" src={"https://t4.ftcdn.net/jpg/08/02/43/63/240_F_802436395_BB2TxiEuws6vA4dqWO7efJJxSe2qg3KV.jpg"} alt="Image" />
                                    <div className="overlay">
                                        <div id="moreInfo" onClick={handleDisplayInfoFourth}><span class="material-symbols-outlined">info</span>
                                        <span className="helpTextInfo">More Info</span></div>
                                    </div>
                                </div>
                                <div className="col-md-8 order-md-2 mx-5">
                                    <h5 id="textHeader">Entrainemt</h5>
                                    <p id="textBody">In a nut shell, think of entrainment as synchronization. Your brain is a natural entrainer, so is your heart.</p>
                                    <p id="textBody">It naturally synchs to certain external stimuli, especially if these stimuli are repetitive and constant.
                                        There are several approaches to get the brain to synchronize. Of those involving sound, when taken to the lab have never passed the test, upon learning this, Matias Kamelman had the idea of using cutting edge technology to generate immersive audio, to use a perceivable sound source to move on constant cycles around your head to promote entrainment.
                                        This theory of “moving binaural waves” is yet to be proved and we will gladly appreciate any feedback you can produce.</p>
                                </div>
                            </div>
                        </div>
                        <div id="buttonContainer" className="col-12 d-flex justify-content-center" >
                            <Link to="/tutorial">
                                <button type="button" id="greenButtonAuto">Learn more in the Tutorial Section</button>
                            </Link>
                        </div>

                        {isVisibleFourth && (
                        <div id="infoText">
                            <h5>There is plenty of information about Entrainment</h5>
                            <p>Binaurapp´s approach intends to keep within the parameters of the scientific method, so we can´t guarantee this works in all cases, in all available corroborated papers, when it comes to sound there is always the subjectie facot that can´t be eluded, but it can be used.
                                That´s why we developed an app that allows you to choose your music or background to use that in favor of your desired state</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}