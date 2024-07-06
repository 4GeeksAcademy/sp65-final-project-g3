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
    const [track1name, setTrack1Name] = useState();
    const [track2name, setTrack2Name] = useState();


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

// Lógica fav mixes
const handleMix = () => {
    // habilitar formulario para que el usuario ingreese el título del mix
    // Formulario: Estado del mix para controlar el input
    // Onsubmit que llame la función handleOnSubmitMix

}

// const handleOnSubmitMix = (event) => {
//     event.preventDefault ();
//     const dataToSend = { mix_title, track_1_url, binaural_id };  // Crear el Data to send que incluya el estado del mix_title track_1_url binaural_id
//         const url = `${process.env.BACKEND_URL}/api/mixes`;
//         const options = {  // Con estos 3 datos hacer el post.
//             method: 'POST',
//             body: JSON.stringify(dataToSend),
//             headers: {
//                 'Content-Type' : 'application/json'
//             }        
//         }
//         // Actualizar los favoritos del usuario en el flux.
//         const data = await response.json();
//         setStore({ mix_title: data.results });
//         setStore({ track_1_url: data.results });
//         setStore({ binaural_id: data.results });
//     }
// };

    //   Lógica para llamar a la librería Binaural
    const handleBinauralClick = (url, name) => {
        actions.setTrack2Url(url);
        setTrack2Name(name)
    };

    const handleSoundscapeClick = (url, name) => {
        actions.setTrack1Url(url);
        setTrack1Name(name)
    };


    return (
        <>
            <div id="mixerConatiner" className="d-flex flex-column bd-highlight mb-3">
                <div id="volumeControlers" className="d-flex justify-content-center">
                    <input type="range" id="trackOneVolume" ref={trackOneVolumeRef} onChange={handleTrackOneVolumeChange} min="0" max="1" step="0.01" />
                    <div id="trackOneVu"><div id="vuFill" className="card" ref={trackOneVuRef} ></div></div>
                    <div id="trackTwoVu"><div id="vuFill" className="card" ref={trackTwoVuRef}></div></div>
                    <input type="range" id="trackTwoVolume" ref={trackTwoVolumeRef} onChange={handleTrackTwoVolumeChange} min="0" max="1" step="0.01" />
                </div>
                <div id="playerButtons" className="d-flex justify-content-center">
                    <button id="metalButton2" className="dropdown" type="button" data-bs-toggle="dropdown"/*  onClick={() => handleSpotifyLists(item.url)} */>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    {/* <ul>
                            <li><div className="btn">Spotify Library</div></li>
                            <li><div className="btn">Soundscapes Library</div></li>
                        </ul> */}
                    <ul className="dropdown-menu">
                        {store.soundscapeList.map((item, index) => (
                            <li key={index}>
                                <button className="dropdown-item" onClick={() => handleSoundscapeClick(item.url_jamendo, item.name)}>{item.name}</button>
                            </li>
                        ))}
                    </ul>
                    <button id="metalButton" onClick={playAudio}>play</button>
                    <button id="metalButton" onClick={pauseAudio}><b>||</b></button>
                    <button id="metalButton2" className="dropdown" type="button" data-bs-toggle="dropdown">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <ul className="dropdown-menu">
                        {store.binauralList.map((item, index) => (
                            <li key={index}>
                                <button className="dropdown-item" onClick={() => handleBinauralClick(item.track_url, item.name)}>{item.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Estas 3 líneas se tendrán que reemplazar con la implementación de las librerias */}
                <div id="musicLoaders" className="d-flex justify-content-center">
                    <input type="text" id="trackUrl" ref={trackOneUrlRef} value={store.track1Url} />
                    <label>{track1name}</label>
                    <input type="text" id="trackUrl" ref={trackTwoUrlRef} value={store.track2Url} />
                    <label>{track2name}</label>
                    <button id="metalButton3" onClick={loadAudio}>Load</button>
                    {/* El icono debería estar oculto hasta que ambas pistas no estén cargadas */}
                    <span  id="favButton" onClick={handleMix} ><i title="Add Mix" style={{ cursor: "pointer" }} className="fa-solid fa-heart-pulse fa-beat-fade"/></span> 
                </div>
            </div>
        </>
    );
};


// <div className="d-flex" >
// <input type="input" onKeyPress={event =>{
// if (event.key == "Enter"){
    // console.log("Pressed enter");
// }}}
// onChange={event => setSearchInput(event.target.value)} placeholder="Search in Spotify"></input>
// <button onClick={search}><span className="material-symbols-outlined">search</span></button>
// </div>
// {albums.map( (album, i) => {
// console.log(album);
// return (
// <button className="d-flex" onClick={handlePlayTrack}><img src={album.images[0]} /> <div>{album.name}</div></button>)
// })
// }