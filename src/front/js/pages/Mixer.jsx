import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext";
import "/workspaces/sp65-final-project-g3/src/front/styles/mixer.css";

export const Mixer = () => {
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

      if (trackOneUrl && trackTwoUrl) {
          try {
              const newTrackOne = new Audio(trackOneUrl); // Implementar código para dar acceso a las librerías Spotify y Soundwaves
              const newTrackTwo = new Audio(trackTwoUrl); // Implementar código para dar acceso a la librería Binaurals

            // Líneas para conseguir hacer sonar la música
              newTrackOne.crossOrigin = "anonymous";
              newTrackTwo.crossOrigin = "anonymous";

              const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

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

  // Código original Matias
  // let userAudio, providedAudio;
  // let userAnalyser, providedAnalyser;
  // let userDataArray, providedDataArray;
  
  // document.getElementById('loadButton').addEventListener('click', async () => {
  //     const userAudioUrl = document.getElementById('userAudioUrl').value;
  //     const providedAudioUrl = document.getElementById('providedAudioUrl').value;
  
  //     if (userAudioUrl && providedAudioUrl) {
  //         try {
  //             // Crear elementos de audio nativos
  //             userAudio = new Audio(`/proxy?url=${encodeURIComponent(userAudioUrl)}`);
  //             providedAudio = new Audio(`/proxy?url=${encodeURIComponent(providedAudioUrl)}`);
  
  //             // Configurar Web Audio API para el análisis de audio
  //             const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  //             // User Audio
  //             const userSource = audioCtx.createMediaElementSource(userAudio);
  //             userAnalyser = audioCtx.createAnalyser();
  //             userSource.connect(userAnalyser);
  //             userAnalyser.connect(audioCtx.destination);
  //             userAnalyser.fftSize = 256;
  //             const bufferLength = userAnalyser.frequencyBinCount;
  //             userDataArray = new Uint8Array(bufferLength);
  
  //             // Provided Audio
  //             const providedSource = audioCtx.createMediaElementSource(providedAudio);
  //             providedAnalyser = audioCtx.createAnalyser();
  //             providedSource.connect(providedAnalyser);
  //             providedAnalyser.connect(audioCtx.destination);
  //             providedAnalyser.fftSize = 256;
  //             providedDataArray = new Uint8Array(bufferLength);
  
  //             document.getElementById('mixerControls').style.display = 'block';
  //         } catch (error) {
  //             console.error('Error al cargar los archivos de audio:', error);
  //             alert('Hubo un problema al cargar los archivos de audio. Verifique las URLs y vuelva a intentarlo.');
  //         }
  //     } else {
  //         alert('Por favor introduce ambas URLs de audio.');
  //     }
  // });
  
  // document.getElementById('playButton').addEventListener('click', () => {
  //     if (userAudio && providedAudio) {
  //         userAudio.play();
  //         providedAudio.play();
  //         updateVuMeter(userAnalyser, userDataArray, 'userVuFill');
  //         updateVuMeter(providedAnalyser, providedDataArray, 'providedVuFill');
  //     } else {
  //         alert('Primero debe cargar las pistas de audio.');
  //     }
  // });
  
  // document.getElementById('pauseButton').addEventListener('click', () => {
  //     if (userAudio && providedAudio) {
  //         userAudio.pause();
  //         providedAudio.pause();
  //     } else {
  //         alert('Primero debe cargar las pistas de audio.');
  //     }
  // });
  
  // document.getElementById('userVolume').addEventListener('input', (event) => {
  //     if (userAudio) {
  //         userAudio.volume = event.target.value;
  //     }
  // });
  
  // document.getElementById('providedVolume').addEventListener('input', (event) => {
  //     if (providedAudio) {
  //         providedAudio.volume = event.target.value;
  //     }
  // });
  
  // function updateVuMeter(analyser, dataArray, fillId) {
  //     analyser.getByteFrequencyData(dataArray);
  //     const sum = dataArray.reduce((a, b) => a + b, 0);
  //     const average = sum / dataArray.length;
  //     const fill = document.getElementById(fillId);
  //     fill.style.height = `${average / 2}%`;
  
  //     requestAnimationFrame(() => updateVuMeter(analyser, dataArray, fillId));
  // }
  // HASTA AQUI

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
      <input type="text" id="trackOneUrl" ref={trackOneUrlRef} value="https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3" />
      <input type="text" id="trackTwoUrl" ref={trackTwoUrlRef} value="https://cdn.pixabay.com/download/audio/2024/07/01/audio_a057a839a4.mp3" />
      <button id="loadButton" onClick={loadAudio}>Cargar</button> 
    </div>
  );
};
