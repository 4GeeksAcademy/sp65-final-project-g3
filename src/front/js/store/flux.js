import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: null,
			demo: [{ title: "FIRST", background: "white", initial: "white" }],
			email: [],
			isLogin: false,
			currentSection: null,
			soundscapeSection: null,
			tutorialSection: null,
			track1Url: null,
			track2Url: null,
			trackOneName: null,
			trackTwoName: null,
			binauralList: [],
			mixes: [],
			mix_title: [],
			track_1_url: [],
			binaural_id: [],
			soundscapeList: [],
			type: null,
			mixesList: [],
			spotifyAccessToken: null,
			MixId: []
		},
		actions: {
			exampleFunction: () => { getActions().changeColor(0, "green"); },  // Use getActions to call a function within a fuction
			changeColor: (index, color) => {
				const store = getStore();  // Get the store
				// We have to loop the entire demo array to look for the respective index and change its color
				const demo = store.demo.map((element, i) => {
					if (i === index) element.background = color;
					return element;
				});
				setStore({ demo: demo });  // Reset the global store
			},
			getMessage: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/hello")
				if (!response.ok) {
					console.log("Error loading message from backend", response.status, response.statusText)
					return
				}
				const data = await response.json()
				setStore({ message: data.message })
				return data;  // Don't forget to return something, that is how the async resolves
			},
			getUsers: async () => {
				const uri = getStore().apiContact + 'agendas/' + getStore().agenda
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('Error on Agenda', response.status, response.statusText);
					return
				}
				const data = await response.json();
				setStore({ Users: data.Users });
				console.log('Recruits on Agenda', data.Users);

			},
			addContact: async (dataToSend) => {
				const uri = `${getStore().apiContact}agendas/${getStore().agenda}/Users`
				const options = {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('Add Contact Error', response.status, response.statusText);
					return
				}
				// const data = await response.json();
				getActions().getUsers();
			},
			setIsLogin: (login) => { setStore({ isLogin: login }) },
			setUser: (user) => { setStore({ user: user }) },
			navigateToSection: (section) => {
				setStore({ currentSection: section });
				/* 	window.location.href = `/binaural#${section}`; */
			},
			navigateToSoundscape: (section) => {
				setStore({ soundscapeSection: section });
				/* window.location.href = `/soundscape#${section}`; */
			},
			navigateToTutorial: (section) => {
				setStore({ tutorialSection: section });
				/* window.location.href = `/tutorial#${section}`; */
			},
			// Track 2 Url
			// Acción para actualizar la URL del track2
			setTrack2Url: (url) => {
				setStore({ track2Url: url });
			},
			setTrack1Url: (url) => {
				setStore({ track1Url: url });
			},
			setTrackOneName: (name) => {
				setStore({ trackOneName: name })
			},
			setTrackTwoName: (name) => {
				setStore({ trackTwoName: name })
			},
			setMixId: (item) => {
				setStore( {MixId: item})
			},
			getBinaural: async () => {
				const uri = `${process.env.BACKEND_URL}/api/binaural`;
				// const uri = "https://ubiquitous-giggle-9vrj6v4p75gc7v57-3001.app.github.dev/api/binaural"
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('Error on Agenda', response.status, response.statusText);
					return
				}
				const data = await response.json();
				// console.log(uri, response, data);
				setStore({ binauralList: data.results });
				// console.log(data);
				console.log('Binaural List', data.results);
			},
			getSoundscape: async () => {
				const uri = `${process.env.BACKEND_URL}/api/soundscapes`;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('Error on Agenda', response.status, response.statusText);
					return
				}
				const data = await response.json();
				setStore({ soundscapeList: data.results });
				console.log('Soundscape List', data.results);
			},
			getMixes: async () => {
				const uri = `${process.env.BACKEND_URL}/api/mixes`;
				const token = localStorage.getItem("token");
				const options = {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify()
				}
				const response = await fetch(uri,options);
				if (!response.ok) {
					console.log('Error on Agenda', response.status, response.statusText);
					return
				}
				const data = await response.json();
				setStore({ mixesList: data.results });
				console.log('Mixes List', data.results);
			},
			updateProfile: async (userId, dataToSend) => {
				console.log(dataToSend);
				console.log(userId);
				const uri = `${process.env.BACKEND_URL}/api/users/${userId}`;
				const token = localStorage.getItem("token");
				console.log(token);
				const options = {
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error', response.status, response.statusText)
					return
				}
				const data = await response.json();
				setStore({ user: data.results })
			},
			addMixes: async (dataToSend) => {
				console.log(dataToSend);
				const uri = `${process.env.BACKEND_URL}/api/mixes`;
				const token = localStorage.getItem("token");
				console.log(token);
				const options = {
					method: 'POST',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				console.log("Options", options);
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error', response.status, response.statusText)
					return
				}
				const data = await response.json();
				setStore({ mixes: data.results })
			},
			addBinaural: async (dataToSend) => {
				console.log(dataToSend);
				const uri = `${process.env.BACKEND_URL}/api/binaural`;
				const token = localStorage.getItem("token");
				console.log(token);
				const options = {
					method: 'POST',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				console.log("Options", options);
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error', response.status, response.statusText)
					return
				}
				const data = await response.json();
				setStore({ binauralList: data.results })
			},
			addSoundscape: async (dataToSend) => {
				console.log(dataToSend);
				const uri = `${process.env.BACKEND_URL}/api/soundscapes`;
				const token = localStorage.getItem("token");
				console.log(token);
				const options = {
					method: 'POST',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				console.log("Options", options);
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error', response.status, response.statusText)
					return
				}
				const data = await response.json();
				setStore({ soundscapeList: data.results })
			},
			deleteSoundscape: async (dataToSend) => {
				console.log(dataToSend);
				const uri = `${process.env.BACKEND_URL}/api/soundscapes/${dataToSend.soundscapes_id}`;
				const token = localStorage.getItem("token");
				console.log(token);
				const options = {
					method: 'DELETE',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				console.log("Options", options);
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error', response.status, response.statusText)
					return
				}
				const data = await response.json();
				setStore({ soundscapeList: data.results })
			},
			editMix: async (mixes_id, dataToSend) => {
				console.log(dataToSend);					
				const uri = `${process.env.BACKEND_URL}/api/mixes/${mixes_id}`;
				console.log("uri a la que apunta", uri);
				const token = localStorage.getItem("token");
				console.log(token);
				const options = {
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error', response.status, response.statusText)
					return
				}
				const data = await response.json();
				setStore({ MixId: data })
				console.log("updated Mix", MixId);
			},
			deleteMix: async (id) => {
				console.log("Deleting mix with ID:", id); 
				const uri = `${process.env.BACKEND_URL}/api/mixes/${id}`;
				const token = localStorage.getItem("token");
				console.log(token);
				const options = {
					method: 'DELETE',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					},					
				}				
				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error in delete mix', response.status, response.statusText)
					return
				}
				const data = await response.json();
				setStore({ mixesList: data.results })
			},
		}
	}
};
export default getState;