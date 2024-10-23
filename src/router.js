import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/homePage";
import { Routes, Route, Navigate } from "react-router-dom";
import Masterlayout from "./theme/masterlayout";
import ProfilePage from "./pages/user/profilePage";
import AboutNews from "pages/user/AboutNews";
import AboutIntroduce from "pages/user/AboutIntroduce";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.NEWS,
            component: <AboutNews />
        },
        {
            path: ROUTERS.USER.INTRODUCE,
            component: <AboutIntroduce />
        },
    ];

    return (
        <Masterlayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
                <Route path="/news" element={<AboutNews />} />
                <Route path="/introduce" element={<AboutIntroduce />} />
                <Route path="/" element={<Navigate to={ROUTERS.USER.HOME} />} />
            </Routes>
        </Masterlayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;