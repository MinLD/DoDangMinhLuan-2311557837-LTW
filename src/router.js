
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/homePage";
import { Routes, Route } from "react-router-dom";
import Masterlayout from "./theme/masterlayout";
import ProfilePage from "./pages/user/profilePage";

const renderUserRouter = () =>{
        const userRouters = [
            {
                path : ROUTERS.USER.HOME,
                component : <HomePage/>
            },
            {
                path : ROUTERS.USER.PROFILE,
                component : <ProfilePage/>
            },
        ];

        return(
            <Masterlayout>
            <Routes>
                {userRouters.map((item,key)=>(<Route key={key} path={item.path} element={item.component} />) )}
            </Routes>
            </Masterlayout>
        );
};
const RouterCustom = () =>{
    return renderUserRouter();
};
export default RouterCustom;