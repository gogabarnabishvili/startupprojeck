import "./App.css";
import SignIn from "./components/Sign-In/SignIn";
import SignUp from "./components/Sign-Up/SignUp";
import MainPage from "./components/Main-page/MainPage";
import ProfileFeed from "./components/Profile-Feed/ProfileFeed";
import LandingPage from "./components/landing-page/LandingPage";

import { useState } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { LanguageContext } from "./components/lenguage-change/LenguageChange";
import { useContext } from "react";
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/sigIn" element={<SignIn />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/profileFeed" element={<ProfileFeed />} />
            <Route path="/mainPage" element={<MainPage />} />
            {/* <Route path="/mainPage" element={<MainPage />} /> */}
        </>
    )
);

function App() {
    const [language, updateLang] = useState("geo");

    return (
        <LanguageContext.Provider value={{ language, updateLang }}>
            <RouterProvider router={router} />
        </LanguageContext.Provider>
    );
}

export default App;
