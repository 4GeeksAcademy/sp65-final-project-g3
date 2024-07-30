import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import homepic from "../../img/homepic.png"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid home">
			<div className="row justify-content-center">
				<div className="className col-12 text-center">
					<div className="className div">
						<img className="home-image img-fluid mb-4" alt="Stocksy" src={homepic} />
						<div className="text-wrapper mb-4">What’s Binaurapp?</div>
						<div className="col-12 col-md-6 col-lg-8 col-sm-10 mx-auto mb-4">
							<p className="content">
								Binaurapp is an innovative application designed to enhance your mental well-being through binaural audio.
								Our goal is to help you achieve states of sleep, relaxation, concentration, and well-being using advanced sound technologies.
								Discover personalized programs to reduce stress, improve focus, or find moments of calm.
								<br />
								<br />
								The theory of moving binaural waves, discovered by Matias Kamelman, uses 5th-order ambisonics to create an immersive sound environment that induces specific brain states without active user participation.
								This approach provides objective and passive results, differentiating Binaurapp from other applications.
								The combination of these waves with soundscapes and personalized music creates a unique and transformative auditory experience.
								Additionally, Binaurapp is the only app that allows you to connect to your Spotify account to choose your desired music, based on the music therapy theory that no music is inherently relaxing or stimulating—it always depends on the user and their cultural and personal background.
								Finally, the magic is you.
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
