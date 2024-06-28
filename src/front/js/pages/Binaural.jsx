import React from "react";
import "../../styles/binaural.css"

export const Binaural = () => {

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
                <div className="tm-search-form-container">
                    <div className="row">
                        <div className="col-3">
                            <span action="index.html" method="GET" className="form-inline tm-search-form">
                                <div className="text-uppercase tm-new-release">Moving Binaural Waves</div>
                            </span>
                        </div>
                        <div className="col-9">
                            <p className="textBinaural mt-2 mb-2">Entrainment through moving binaural waves is based on Matias Kamelman´s theory based in the usage of a perciavable moving sound around one´s head using ambisonic technology </p>
                        </div>
                    </div>
                </div>

                <div className="row tm-albums-container grid">
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie">
                            <img src={"https://t4.ftcdn.net/jpg/08/19/96/27/360_F_819962780_5Jikl3FOY0OrqfLEjfjXZH9d9Uoqlkua.jpg"} alt="Image" className="img-fluid" />
                            <figcaption>
                                <h2>Alpha Waves</h2>
                                <p>8hz to 13Hz</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie">
                            <img src={"https://t4.ftcdn.net/jpg/08/19/96/25/240_F_819962587_aBHjpGdUT8m1OPmACz2J98Pru84N7vbN.jpg"} alt="Image" className="img-fluid" />
                            <figcaption>
                                <h2>Theta Waves</h2>
                                <p>3Hz to 8Hz</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie">
                            <img src={"https://t3.ftcdn.net/jpg/08/19/90/34/240_F_819903467_xvlu1QXgorjcdt6Up2kCnz0UooGHUIdn.jpg"} alt="Image" className="img-fluid" />
                            <figcaption>
                                <h2>Delta Waves</h2>
                                <p>0.1Hz to 3Hz</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-3 col-xl-3 tm-album-col">
                        <figure className="effect-sadie">
                            <img src={"https://t4.ftcdn.net/jpg/07/69/70/99/240_F_769709971_Y50zb5MuTmUWQmF7IqxpBHSvMe9PbnZN.jpg"} alt="Image" className="img-fluid" />
                            <figcaption>
                                <h2>Entrianment</h2>
                                <p>Learn More about the theory</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="tm-tag-line">
                            <h2 className="tm-tag-line-title">Use these waves to help getting to a desired state</h2>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-xl-12">
                        <div className="media-boxes">
                            <div className="media">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t3.ftcdn.net/jpg/08/20/12/24/240_F_820122410_ofHPpJwDAjs919R7IcVto7h8AG2IiqEp.jpg"} alt="Image" className="align-self-stretch" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Apha Waves</h5>
                                                <p className="mb-0 fs-6">(8Hz – 13Hz) The fastest in the binaural-wave spectrum. These waves are observable on an EGG in the moments of pre-sleep, essential to fading into it.
                                                    It is the passage from consciousness to semi-consciousness and light sleep.
                                                    These 3 are actually quite mixed when Alpha waves are predominant.
                                                    We also see Alpha predominance in Meditation, both delivered as in Vipassana or when a musician is in a deep state of concentration executing a piece.
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
                                    <button type="button" className="btn btn-secondary">Load 12Hz Wave</button>
                                    <button type="button" className="btn btn-secondary">Load 10Hz Wave</button>
                                    <button type="button" className="btn btn-secondary">Load 8Hz Wave</button>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>You may choose to use this kind of waves for:</h5>
                                        <p>
                                            -	Relaxation or for meditation (in which case we recommend you choose music which´s BPM is not higher than 100 or soundscapes).
                                        </p>
                                        <p>
                                            -	Focus and concentration (we recommend using the soundscapes but any music you choose may work along).
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-blue tm-price-tag me-5">Uses:</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch container-fluid">
                                        <img src={"https://t4.ftcdn.net/jpg/08/02/43/63/240_F_802436395_BB2TxiEuws6vA4dqWO7efJJxSe2qg3KV.jpg"} alt="Image" className="align-self-strech" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-pink-light">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-pink">Theta Waves</h5>
                                                <p className="mb-0 fs-6">(3hz – 8Hz) Until quite recent we knew very few about these brain state.
                                                    We knew it was a passing phase between light sleep, REM and deep sleep.

                                                </p>
                                                <p>
                                                    They are necessary and present in most sane sleep architecture.
                                                    They became prominently interesting when they were observed to have peaks during decision making, and intellectual activity.
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
                                    <button type="button" className="btn btn-secondary">Load 7Hz Wave</button>
                                    <button type="button" className="btn btn-secondary">Load 5Hz Wave</button>
                                    <button type="button" className="btn btn-secondary">Load 3Hz Wave</button>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>You may choose to use this kind of waves for:</h5>
                                        <p>
                                            -	You can use Theta to induce sleep, since they are present in phase change, especially when entering deep sleep, so exposing to them might help you conceive sleep or improve your sleep.
                                        </p>
                                        <p>
                                            -	You can also experiment with Theta for improving cognition, focus and decision making, either on it´s own or combining it with high-energy music, high BPM´s or even Rock Music & Heavy Metal (Not a joke, actually classical music would work perfect too or Jazz, the more complex the music is the better it will work).
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-pink tm-price-tag me-5">Uses:</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch">
                                        <img src={"https://t3.ftcdn.net/jpg/07/27/79/86/240_F_727798659_GVhb4YANpW9sRoYjptqB6XQKwW9t5Jyo.jpg"} alt="Image" className="align-self-stretch" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-gray ">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-blue">Delta Waves</h5>
                                                <p className="mb-0 fs-6">(: (0,1HZ – 3HZ) These are the slowest of the binaural spectrum, considering 0 would be brain death (clinically at least).</p>
                                                <p>There is a lot of bibliography about them and they are present in deep sleep (sleep without dreams) and associated with all the neurochemistry release necessary for regeneration.
                                                    (see “about” for a deeper explanation)</p>
                                            </div>
                                            <div className="tm-buy-box">
                                                <a href="#" className="tm-bg-blue tm-text-white tm-buy">Load</a>
                                                <span className="tm-text-blue tm-price-tag">Track 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary">Load 2Hz Wave</button>
                                    <button type="button" className="btn btn-secondary">Load 1Hz Wave</button>
                                    <button type="button" className="btn btn-secondary">Load 0,5Hz Wave</button>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>You may choose to use this kind of waves for:</h5>
                                        <p>
                                            Exposing yourself to Delta waves may help you conceive sleep if you have trouble sleeping, but also it may improve your sleep and make your Delta states achievable or even enhance them.
                                            If you are into meditation, these are great waves to expose yourself too.
                                        </p>
                                        <p>
                                            Recent discoveries have also shown Delta activity in decision making, especially in highly risk trained people and difficult situations handling, so there is no harm in experimenting with these waves for studying and focus, though it may help to use some active music to accompany it in training.
                                        </p>
                                    </div>
                                    <div className="tm-buy-box">
                                        <span className="tm-text-blue tm-price-tag me-5">Uses:</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media">
                                <div className="row d-flex align-items-stretch">
                                    <div className="col-3 d-flex align-items-stretch container-fluid">
                                        <img src={"https://t4.ftcdn.net/jpg/06/36/51/63/240_F_636516341_gm3E4ylrnK6HmcTRA1MctrK7HxOA0P2v.jpg"} alt="Image" className="align-self-strech" />
                                    </div>
                                    <div className="col-9">
                                        <div className="media-body tm-bg-pink-light">
                                            <div className="tm-description-box">
                                                <h5 className="tm-text-pink">Entrainemt</h5>
                                                <p className="mb-0 fs-6">
                                                    In a nut shell, think of entrainment as synchronization.
                                                </p>
                                                <p>
                                                Your brain is a natural entrainer, so is your heart.                                                    
                                                </p>
                                                <p>
                                                It naturally synchs to certain external stimuli, especially if these stimuli are repetitive and constant.
                                                There are several approaches to get the brain to synchronize. Of those involving sound, when taken to the lab have never passed the test, upon learning this, Matias Kamelman had the idea of using cutting edge technology to generate immersive audio, to use a perceivable sound source to move on constant cycles around your head to promote entrainment.
                                                This theory of “moving binaural waves” is yet to be proved and we will gladly appreciate any feedback you can produce.
                                                </p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="media-body textBinaural">
                                    <div className="text-align fw-leighter fst-italic me-3 ms-3 mt-3">
                                        <h5>There is plenty of information about Entrainment</h5>
                                        <p>
                                            Binaurapp´s approach intends to keep within the parameters of the scientific method, so we can´t guarantee this works in all cases, in all available corroborated papers, when it comes to sound there is always the subjectie facot that can´t be eluded, but it can be used. 
                                            That´s why we developed an app that allows you to choose your music or background to use that in favor of your desired state
                                        </p>
                                        <p>

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