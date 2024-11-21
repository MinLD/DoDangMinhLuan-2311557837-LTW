
import './style.scss';

import React, { memo, useEffect, useState } from "react";
import './style.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ToecLR from './test_online_item/ToeicL&R';

const TEST_ONLINE = () =>{
    const [indexItemReview, setIndexItemReview] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("testbank")) {
            setIndexItemReview(0);
        } else if (location.pathname.includes("courseOnline")) {
            setIndexItemReview(1);
        }
    }, [location.pathname]);

    const handleClick = (index) => {
        setIndexItemReview(index);
    };




    return (
        < >

        <div className="container-big bg_sub">
            <div className="container_sub">
                <div className="Regis_Ex">
                    <h1>Thi thử khóa đào tạo</h1>
                    <div className="Regis_Ex-menu ">
                        <span className={`${indexItemReview === 0 ? 'Review_active' : ''}`}>
                            <Link to="" onClick={() => handleClick(0)}>TOEIC L&R</Link>
                        </span>
                
                    </div>
                    <Outlet />
                    <ToecLR/>
                </div>
            </div>
        </div>
   
        </>
    )
}
export default memo( TEST_ONLINE);




