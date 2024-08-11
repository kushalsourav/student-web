import { Route, Routes } from "react-router-dom";

import RequireAuth from "../contexts/AuthContext/RequireAuth/RequireAuth";
// import Explore from "../../pages/Explore/Explore";
// import History from "../../pages/History/History";
 import Home from "../pages/Home/Home";
 import Groups from "../pages/Groups/Groups";
// import Liked from "../../pages/Liked/Liked";
// import Playlists from "../../pages/Playlists/Playlists";
// import PlaylistVideo from "../../pages/PlaylistVideo/PlaylistVideo";
// import Profile from "../../pages/Profile/Profile";
// import SingleVideoPage from "../../pages/SingleVideoPage/SingleVideoPage";
// import Watchlater from "../../pages/Watchlater/Watchlater";
// import SignIn from "../../views/SignIn/SignIn";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";


const Router = () => {

    return(
        <>
        <Routes>
         <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
         <Route path="/groups" element={<RequireAuth><Groups /></RequireAuth>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        </>
    );
};

export default Router;