import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext";
import "/workspaces/sp65-final-project-g3/src/front/styles/mixer.css";


export const Mixer = () => {
    const { store, actions } = useContext(Context);

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

    //   Lógica para llamar a la librería
    const handleSpotifyLists = (url) => {
        actions.settingSpotifyListUrl(url);
    };

    return (

        <div className="container">
            <div id="mixerControls" className="d-flex">
                <button id="library" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleSpotifyLists(item.url)}></button>
                <input type="range" id="trackOneVolume" ref={trackOneVolumeRef} onChange={handleTrackOneVolumeChange} min="0" max="1" step="0.01" />
                <div className="d-flex flex-column bd-highlight mb-3">
                    <div id="vuMeter" className="d-flex justify-content-center">
                        <div id="trackOneVu" ref={trackOneVuRef} className="card mx-1"></div>
                        <div id="trackTwoVu" ref={trackTwoVuRef} className="card mx-1"></div>
                    </div>
                    <div id="vuMeter">
                        <button id="playButton" onClick={playAudio}>play</button>
                        <button id="pauseButton" onClick={pauseAudio}><b>||</b></button>
                    </div>
                </div>
                <input type="range" id="trackTwoVolume" ref={trackTwoVolumeRef} onChange={handleTrackTwoVolumeChange} min="0" max="1" step="0.01" />
                <button id="library" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>

            </div>
            {/* Estas 3 líneas se tendrán que reemplazar con la implementación de las librerias */}
            <input type="text" id="trackOneUrl" ref={trackOneUrlRef} value="https://cdn.pixabay.com/download/audio/2023/03/13/audio_df248bd9ae.mp3" />
            <input type="text" id="trackTwoUrl" ref={trackTwoUrlRef} value={store.track2Url} />
            <button id="loadButton" onClick={loadAudio}>Cargar</button>
        </div>

    );

};
