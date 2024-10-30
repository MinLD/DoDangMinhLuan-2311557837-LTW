
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/homePage";
import { Routes, Route, Navigate } from "react-router-dom";
import Masterlayout from "./theme/masterlayout";

import AboutNews from "pages/user/AboutNews";
import AboutIntroduce from "pages/user/AboutIntroduce";
import Review from "pages/user/ExamTools/Review"; 
import Register_Exam from "pages/user/Register_Exam";
import TEST_ONLINE from "pages/user/TEST_ONLINE";
import TestBank from "pages/user/ExamTools/test bank";
import CourseOnline from "pages/user/ExamTools/course online";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.NEWS,
            component: <AboutNews />
        },
        {
            path: ROUTERS.USER.INTRODUCE,
            component: <AboutIntroduce />
        },
        {
            path: ROUTERS.USER.Review,
            component: <Review /> 
        },
        {
            path: ROUTERS.USER.RegisterExam,
            component: <Register_Exam />
        },
        {
            path: ROUTERS.USER.TestOnline,
            component: <TEST_ONLINE />
        },
        {
            path: ROUTERS.USER.testbank, 
            component: <TestBank />
        },
        {
            path: ROUTERS.USER.courseOnline,
            component: <CourseOnline />
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
                <Route path="/test_online" element={<TEST_ONLINE />} />
                <Route path="/register_exam" element={<Register_Exam />} />


                {/* Định nghĩa route con cho Review */}
                <Route path={ROUTERS.USER.Review} element={<Review />}>
                <Route index element={<TestBank />} />
                <Route path="testbank" element={<TestBank/>} />
                <Route path="courseOnline" element={<CourseOnline />} />
                </Route>
                <Route path="/" element={<Navigate to={ROUTERS.USER.HOME} />} />
            </Routes>
        </Masterlayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;