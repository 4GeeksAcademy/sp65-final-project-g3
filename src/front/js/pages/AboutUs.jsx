import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import aboutus from "../../img/aboutus.png"

export const AboutUs = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid home">
            <div className="row justify-content-center">
                <div className="className col-12 text-center">
                    <div className="className div">
                        <img className="home-image img-fluid mb-4" alt="Stocksy" src={aboutus} />
                        <div className="text-wrapper mb-4">Meet the Binaurapp Team!</div>
                        <div className="col-12 col-md-6 col-lg-8 col-sm-10 mx-auto mb-4">
                            <p className="content">
                                We’re a passionate duo of developers who poured our hearts and skills into creating Binaurapp. Over the past few years, we've not only built every aspect of this app ourselves but also crafted a unique audio player from scratch. Our journey has been deeply influenced by years of research in neuroscience and music, culminating in the groundbreaking theory of “Moving Binaural Waves” (MBW) by Matias Kamelman.
                                </p>
                                <p className="content">
                                Our mission goes beyond just offering a great app; we're committed to pushing the boundaries of what binaural audio can achieve. We're continuously exploring and testing new ideas, and we’re excited to bring our research into the lab to make even more amazing discoveries.
                                </p>
                                <p className="content">
                                But we can’t do this alone! We want to hear from you. Your feedback is crucial to us. Share your experiences with Binaurapp—let us know how it’s helping you, what you love, and any suggestions you might have. Together, we can make Binaurapp better and continue to innovate in the world of audio therapy.
                                </p>

                            
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <Link to="/signup"> <button id="greenButton" className="text-wrapper-2">Try Now </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
