import "./App.css";
import SignIn from "./components/Sign-In/SignIn";
import SignUp from "./components/Sign-Up/SignUp";
import MainPage from "./components/Main-page/MainPage";
import ProfileFeed from "./components/Profile-Feed/ProfileFeed";
import LandingPage from "./components/lending-page/LendingPage";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/sigIn" element={<SignIn />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/profileFeed" element={<ProfileFeed />} />
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
