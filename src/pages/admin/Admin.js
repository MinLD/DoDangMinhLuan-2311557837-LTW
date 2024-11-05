
import { memo, useState } from "react";
import React from "react";
import Sidebar from "./SideBar";
import './style.scss';
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Admin = () =>{
    const [collapsed,setcollapsed]= useState (false);
    return(
        <div className="admin-container">
            <div className="admin-sidebar">
        <Sidebar collapsed={collapsed}/>

            </div>
            <div className="admin-content">
                <div className="admin-header">
                <FaBars onClick={()=>setcollapsed(!collapsed)} size={30}/>
 
                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
              
            </div>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        </div>
    )
}
export default memo (Admin);