import React, { memo ,useState } from "react";
import './style.scss';
import { AiOutlineFacebook, AiOutlineUser} from "react-icons/ai"
import { BsCart4} from "react-icons/bs"
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { ROUTERS } from "utils/router";


const Header= () => {
    const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME},

        {   name: "Giới thiệu",
            path: ROUTERS.USER.info
        },
            {
            name: "Tin Tức",
            path: ROUTERS.USER.tintuc},

            {
            name: "Đăng ký",
            path: ROUTERS.USER.dangkykh,
            isShowSubmenu: false,
            child : [
             {
                name: "Toeic",
            path: ""}
          

            ]
            },
            {
                name: "Thi thử",
                path: ROUTERS.USER.dangkykh,
                isShowSubmenu: false,
                child : [
                 {
                    name: "Toeic",
                path: ""}
                ]
            },
            {
                name: "Ôn Luyện",
                path: ROUTERS.USER.dangkykh,
                isShowSubmenu: false,
                child : [
                 {
                    name: "Toeic",
                path: ""}
                ]
            },
            {
                name: "Liên hệ",
                path: ROUTERS.USER.dangkykh,
                isShowSubmenu: false,
                child : [
                 {
                    name: "Thông tin liên hệ",
                path: ""},
                 
                 {
                    name: "Hỏi đáp",
                path: ""
                 }
    
                ]
            }
           
        
    ])

    
    return (
        <>
 <div className="Header_top ">
        <div className="container " >
            <div className="row">
                <div className="col-6 Header_top_left">
                    <ul>
                        <li>
                        <CgMail size={20}/>swbelearning@gmail.com
                        </li>
                        <li>
                        <MdOutlinePhoneInTalk size={20}/>  08888123213
                        </li>
                    </ul>
                </div>
                <div className="col-6 Header_top_right">
                     <ul>
                         {/* <li>
                                <a href=" ">
                                <AiOutlineFacebook/> 
                                </a>
                         </li>
                         <li>
                                <a href=" ">
                                <AiOutlineFacebook/> 
                                </a>
                         </li>
                         <li>
                                <a href=" ">
                                <AiOutlineFacebook/> 
                                </a>
                         </li>
                         <li>
                                <a href=" ">
                                <AiOutlineFacebook/> 
                                </a>
                         </li> */}
                         <li> 
                            <a href=" ">
                             <AiOutlineUser size={16} />
                             <span>Đăng Nhập</span>
                            </a> 
                         </li>
                         <li>
                            <a href="" >
                            <BsCart4 size={20}/>
                            </a>
                        
                            
                        </li>
                     </ul> 
                </div>
            </div>
         </div>
    </div>
   <div className="container ">
   <div className="row"> 
        <div  className="col-xl-3 "  >
             <div className="header_logo">
                <h3>SWB E-Learning</h3>
             </div>
        </div>
        <div  className="col-xl-9 "  >
             <nav className="header_menu">
                <ul>
                    {
                    menus?.map((menu , menuKey)=>(
                          <li key={menuKey} className={menuKey == 0 ? "active" : ""}> 
                          <a href={menu?.path}> {menu?.name}</a>
                          {
                            menu.child && (
                                <ul className="header_menu_dropdown"> 
                                {menu.child.map((childItem,childkey)=>(
                                     <li key={`${childkey}-${childkey}`}>
                                     <a className={childItem.path}>{childItem.name}</a>
                                 </li>
                                ))}
                                   
                                </ul>
                            )
                          }
                        </li>
                    ))}
        
                </ul>

             </nav>
        </div>
       
    </div>
   </div>
   <div className="container_banner">
     <div className="banner ">
        <img src="https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Default/Media/Images/2223af49-a76a-48a3-adb7-6a1782ea1974/default_image_2223af49-a76a-48a3-adb7-6a1782ea1974_1921-x-641-3-(3)-(6)_1727235877319.jpg"></img>
     </div>
     </div>
    
        </>
   
    )
}
export default memo(Header);