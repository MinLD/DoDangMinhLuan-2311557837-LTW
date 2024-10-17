import React, { memo ,useState } from "react";
import './style.scss';
import { AiOutlineFacebook, AiOutlineUser} from "react-icons/ai"
import { BsCart4} from "react-icons/bs"
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { ROUTERS } from "utils/router";


const Header= () => {
    const [menus, setMenus] = useState([
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
                name: "Toeic1",
            path: ""},
             
             {
                name: "Toeic2",
            path: ""
             }

            ]
            },
            {
            name: "Thi thử",
            path: ""
            },
            {
            name: "Ôn luyện",
            path: ""
            },
            {
            name: "Liên hệ",
            path: ""
            }
           
        
    ])

    
    return (
        <>
 <div className="Header_top">
        <div className="container">
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
                         </li>
                         <li>
                                <a href=" ">
                                <AiOutlineFacebook/> 
                                </a>
                         </li>
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
   <div className="container">
   <div className="row"> 
        <div  className="col-xl-3 "  >
             <div className="header_logo">
                <h1>SWB E-Learning</h1>
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
        </>
   
    )
}
export default memo(Header);