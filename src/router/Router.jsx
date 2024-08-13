import { Route, Routes } from "react-router-dom";

import RequireAuth from "../contexts/AuthContext/RequireAuth/RequireAuth";
 import Home from "../pages/Home/Home";
 import Groups from "../pages/Groups/Groups";
import WelcomePage from "../pages/WelcomePage/WelcomePage";


const Router = () => {

    return(
        <>
        <Routes>
         <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
         <Route path="/groups" element={<RequireAuth><Groups /></RequireAuth>} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
        </>
    );
};

export default Router;