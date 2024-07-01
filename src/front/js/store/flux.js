import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [{ title: "FIRST", background: "white", initial: "white" }],
			isLogin: false,
			currentSection: null,
			soundscapeSection: null,
			tutorialSection: null,
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
			navigateToSection: (section) => {
				setStore({ currentSection: section });
				window.location.href = `/binaural#${section}`;
			},
			navigateToSoundscape: (section) => {
				setStore({ soundscapeSection: section });
				window.location.href = `/soundscape#${section}`;
			},
			navigateToTutorial: (section) => {
				setStore({ tutorialSection: section });
				window.location.href = `/tutorial#${section}`;
			},

			// lógica para Spotify
			setSpotifyAccessToken: (token) => {
				// Actualiza el token de acceso de Spotify en el estado
				setStore({
					spotifyAccessToken: token
				});
			},

			// getSpotifyLists: async () => {
			// 	const response = await fetch("https://api.spotify.com/v1/playlists/{playlist_id}");
			// 	if (!response.ok) {
			// 		console.log("Error");
			// 		return;
			// 	}
			// 	const data = await response.json();
			// 	console.log(data);
			// 	setStore({ spotifyLists: data.results });
			// },

			// settingSpotifyList: (spotifyList) => { setStore({ currentSpotifyList: spotifyList }); },
			// settingSpotifyListUrl: (text) => { setStore({ currentSpotifyListUrl: text }); },

			// getCurrentSpotifyList: async () => {
			// 	const uri = getStore().currentSpotifyListUrl;
			// 	const response = await fetch(uri);
			// 	if (!response.ok) {
			// 		console.log("Error");
			// 		return;
			// 	}
			// 	const data = await response.json();
			// 	console.log(data);
			// 	setStore({ currentSpotifyList: data.result });
			// },
		}
	};
};


export default getState;
