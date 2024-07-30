import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import injectContext from "./store/appContext.js";
// Custom Component
import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { OffCanvas } from "./component/OffCanvas.jsx";
// Custom Pages
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { Binaural } from "./pages/Binaural.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Playlist } from "./pages/Playlist.jsx";
import { Soundscape } from "./pages/Soundscape.jsx";
import { Tutorial } from "./pages/Tutorial.jsx";
import { Mixes } from "./pages/Mixes.jsx";
import { Alpha } from "./pages/Alpha.jsx";
import { Theta } from "./pages/Theta.jsx";
import { Delta } from "./pages/Delta.jsx";
import { Meditation } from "./pages/Meditation.jsx";
import { Sleep } from "./pages/Sleep.jsx";
import { Focus } from "./pages/Focus.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Mixer } from "./pages/Mixer.jsx";
import { UploadBinaural } from "./pages/UploadBinaural.jsx";
import { UploadSoundscape } from "./pages/UploadSoundscape.jsx";
import { UploadTutorial } from "./pages/UploadTutorial.jsx";

// Spotify Auth App
import { SpotifyCallback } from './component/SpotifyCallback.jsx';
import { EditMixes } from "./pages/EditMixes.jsx";


// Componente para manejar la lógica de renderizado condicional
const ConditionalNavbarOrSidebar = () => {
    const location = useLocation();

    // Rutas donde se debe mostrar el Navbar
    const navbarRoutes = ["/", "/dashboard"];
    
    const showNavbar = navbarRoutes.includes(location.pathname);

    return (
        <>
            {showNavbar ? <Navbar /> : <OffCanvas />}
        </>
    );
};

// Create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <ConditionalNavbarOrSidebar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/binaural" element={<Binaural />} />
                        <Route path="/alpha" element={<Alpha />} />
                        <Route path="/theta" element={<Theta />} />
                        <Route path="/delta" element={<Delta />} />
                        <Route path="/mixes" element={<Mixes />} />
                        <Route path="/editmixes" element={<EditMixes />} />
                        <Route path="/playlist" element={<Playlist />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/soundscape" element={<Soundscape />} />
                        <Route path="/tutorial" element={<Tutorial />} />
                        <Route path="/meditation" element={<Meditation />} />
                        <Route path="/sleep" element={<Sleep />} />
                        <Route path="/focus" element={<Focus />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/mixer" element={<Mixer />} />
                        <Route path="/uploadbinaural" element={<UploadBinaural />} />
                        <Route path="/uploadsoundscape" element={<UploadSoundscape />} />
                        <Route path="/uploadtutorial" element={<UploadTutorial />} />
                        <Route path="/callback" element={<SpotifyCallback />} />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
