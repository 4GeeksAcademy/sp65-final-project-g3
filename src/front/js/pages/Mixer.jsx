import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/mixer.css";
import { useNavigate } from "react-router-dom";


export const Mixer = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [trackOne, setTrackOne] = useState(null);
    const [trackTwo, setTrackTwo] = useState(null);
    const [userAnalyser, setUserAnalyser] = useState(null);
    const [providedAnalyser, setProvidedAnalyser] = useState(null);
    const [userDataArray, setUserDataArray] = useState(null);
    const [providedDataArray, setProvidedDataArray] = useState(null);

    const trackOneUrlRef = useRef();
    const trackTwoUrlRef = useRef();
    const trackOneVolumeRef = useRef();
    const trackTwoVolumeRef = useRef();
    const trackOneVuRef = useRef();
    const trackTwoVuRef = useRef();

    useEffect(() => {
        if (!store.isLogin) {
            alert("Please Log-In or Sign-Up");
            navigate("/login");
        }
    }, [store.isLogin, navigate]);

    useEffect(() => {
        const updateVuMeter = (analyser, dataArray, fillRef) => {
            if (!analyser) return;
            analyser.getByteFrequencyData(dataArray);
            const sum = dataArray.reduce((a, b) => a + b, 0);
            const average = sum / dataArray.length;
            if (fillRef.current) {
                fillRef.current.style.height = `${average / 2}%`;
            }
            requestAnimationFrame(() => updateVuMeter(analyser, dataArray, fillRef));
        };

        if (userAnalyser && userDataArray) {
            updateVuMeter(userAnalyser, userDataArray, trackOneVuRef);
        }

        if (providedAnalyser && providedDataArray) {
            updateVuMeter(providedAnalyser, providedDataArray, trackTwoVuRef);
        }
    }, [userAnalyser, userDataArray, providedAnalyser, providedDataArray]);

    const loadAudio = async () => {
        const trackOneUrl = trackOneUrlRef.current.value;
        const trackTwoUrl = trackTwoUrlRef.current.value;
        console.log(trackTwoUrl, store.track2Url);


        if (trackOneUrl && trackTwoUrl) {
            try {
                const newTrackOne = new Audio(trackOneUrl); // Implementar código para dar acceso a las librerías Spotify y Soundwaves
                const newTrackTwo = new Audio(trackTwoUrl); // Implementar código para dar acceso a la librería Binaurals

                // Líneas para conseguir hacer sonar la música
                newTrackOne.crossOrigin = "anonymous";
                newTrackTwo.crossOrigin = "anonymous";

                /* const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); */
                const audioCtx = new window.AudioContext();

                const userSource = audioCtx.createMediaElementSource(newTrackOne);
                const newUserAnalyser = audioCtx.createAnalyser();
                userSource.connect(newUserAnalyser);
                newUserAnalyser.connect(audioCtx.destination);
                newUserAnalyser.fftSize = 256;
                const bufferLength = newUserAnalyser.frequencyBinCount;
                const newUserDataArray = new Uint8Array(bufferLength);

                const providedSource = audioCtx.createMediaElementSource(newTrackTwo);
                const newProvidedAnalyser = audioCtx.createAnalyser();
                providedSource.connect(newProvidedAnalyser);
                newProvidedAnalyser.connect(audioCtx.destination);
                newProvidedAnalyser.fftSize = 256;
                const newProvidedDataArray = new Uint8Array(bufferLength);

                newTrackOne.onended = () => newTrackOne.play();
                newTrackTwo.onended = () => newTrackTwo.play();

                setTrackOne(newTrackOne);
                setTrackTwo(newTrackTwo);
                setUserAnalyser(newUserAnalyser);
                setProvidedAnalyser(newProvidedAnalyser);
                setUserDataArray(newUserDataArray);
                setProvidedDataArray(newProvidedDataArray);
            } catch (error) {
                console.error('Error al cargar los archivos de audio:', error);
                alert('Hubo un problema al cargar los archivos de audio. Verifique las URLs y vuelva a intentarlo.');
            }
        } else {
            alert('Por favor introduce ambas URLs de audio.');
        }

    };

    const playAudio = () => {
        if (trackOne && trackTwo) {
            trackOne.play();
            trackTwo.play();
        } else {
            alert('Tracks must be uploaded first.');
        }
    };

    const pauseAudio = () => {
        if (trackOne && trackTwo) {
            trackOne.pause();
            trackTwo.pause();
        } else {
            alert('Tracks must be uploaded first.');
        }
    };

    const handleTrackOneVolumeChange = (event) => {
        if (trackOne) {
            trackOne.volume = event.target.value;
        }
    };

    const handleTrackTwoVolumeChange = (event) => {
        if (trackTwo) {
            trackTwo.volume = event.target.value;
        }
    };

    // const [mixes, setMixes] = useState(store.mixes.map(item => item.name ));

    // const toggleMix = (name) => {
    //     if (mixes.includes(name)) {
    //         const updatedMixes = mixes.filter(item => item !== name);
    //         setMixes(updatedMixes);
    //         actions.removeMix(name);
    //     } else {
    //         setMixes([...mixes, name]);
    //         actions.addMixes({ name, type:"Track 1" });
    //     }
    // };
    
    // const isMix = (name) => mixes.includes(name);


//   Lógica para llamar a la librería Binaural
const handleBinauralClick = (url) => {
    actions.setTrack2Url(url);
};


    return (
        <>
            <div id="mixerConatiner" className="d-flex flex-column bd-highlight mb-3">
                <div id="volumeControlers" className="d-flex justify-content-center">
                    <input type="range" id="trackOneVolume" ref={trackOneVolumeRef} onChange={handleTrackOneVolumeChange} min="0" max="100" step="0.01" />
                    <div id="trackOneVu"><div id="vuFill" className="card" ref={trackOneVuRef} ></div></div>
                    <div id="trackTwoVu"><div id="vuFill" className="card" ref={trackTwoVuRef}></div></div>
                    <input type="range" id="trackTwoVolume" ref={trackTwoVolumeRef} onChange={handleTrackTwoVolumeChange} min="0" max="100" step="0.01" />
                </div>
                <div id="playerButtons" className="d-flex justify-content-center">
                    <button id="metalButton2" className="dropdown" type="button" data-bs-toggle="dropdown" onClick={() => handleSpotifyLists(item.url)}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                        {/* <ul>
                            <li><div className="btn">Spotify Library</div></li>
                            <li><div className="btn">Soundscapes Library</div></li>
                        </ul> */}
                    <button id="metalButton" onClick={playAudio}>play</button>
                    <button id="metalButton" onClick={pauseAudio}><b>||</b></button>
                    <button id="metalButton2" className="dropdown" type="button" data-bs-toggle="dropdown">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                        <ul className="dropdown-menu">
                            {store.binauralList.map((item, index) => (
                                <li key={index}>
                                    <button className="dropdown-item" onClick={() => handleBinauralClick(item.track_url)}>{item.name}</button>
                                </li>
                            ))}
                        </ul>
                </div>
                {/* Estas 3 líneas se tendrán que reemplazar con la implementación de las librerias */}
                <div id="musicLoaders" className="d-flex justify-content-center">
                    <input type="text" id="trackUrl" ref={trackOneUrlRef} value="https://cdn.pixabay.com/download/audio/2023/03/13/audio_df248bd9ae.mp3" />
                    <input type="text" id="trackUrl" ref={trackTwoUrlRef} value={store.track2Url} />
                    <button id="metalButton3" onClick={loadAudio}>Load</button>
                    <span  id="favButton" onClick=""><i title="Add Mix" style={{ cursor: "pointer" }} className="fa-solid fa-heart-pulse fa-beat-fade"/></span>
                </div>
            </div>
        </>
    );
};


{/* <div className="d-flex" >
<input type="input" onKeyPress={event =>{
if (event.key == "Enter"){
    console.log("Pressed enter");
}}}
onChange={event => setSearchInput(event.target.value)} placeholder="Search in Spotify"></input>
<button onClick={search}><span className="material-symbols-outlined">search</span></button>
</div>
{albums.map( (album, i) => {
console.log(album);
return (
<button className="d-flex" onClick={handlePlayTrack}><img src={album.images[0]} /> <div>{album.name}</div></button>)
})
} */}