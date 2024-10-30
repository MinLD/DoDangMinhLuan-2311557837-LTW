import React, { memo, useState, useEffect, useRef } from "react";
import './style.scss';

import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { ROUTERS } from "utils/router";

const Header = () => {
    
   const [menus] = useState([
    {
        name: "Trang chủ",
        path: ROUTERS.USER.HOME,
        // isShowSubmenu: false,
        // child : [
        //  {
        //     name: "Giới thiệu",
        //     path: ROUTERS.USER.INTRODUCE
        // },
        // {
        //     name: "Tin tức",
        //     path: ROUTERS.USER.NEWS
        // },
        // ]
    },
        {
        name: "Khóa tự học",
        path: ROUTERS.USER.RegisterExam,
       
        },
        {
            name: "Thi thử Onine",
            path: ROUTERS.USER.TestOnline,
            
        },
        {
            name: "Công cụ ôn thi",
            path: ROUTERS.USER.Review,
           
        },
        {
            name: "Tin tức",
            path: ROUTERS.USER.NEWS,
            // isShowSubmenu: false,
            // child : [
            //  {
            //     name: "Thông tin liên hệ",
            // path: ""},
             
            //  {
            //     name: "Hỏi đáp",
            // path: ""
            //  }

            // ]
        }
       
    
])

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [rememberMe, setRememberMe] = useState(false);


    
    const [isLoginBoxVisible, setLoginBoxVisible] = useState(false);
    const loginBoxRef = useRef(null); // Tham chiếu đến khung đăng nhập

    const toggleLoginBox = () => {
        setLoginBoxVisible(!isLoginBoxVisible);
    };

    // Hàm để đóng khung đăng nhập khi nhấn ra ngoài
    const handleClickOutside = (event) => {
        if (loginBoxRef.current && !loginBoxRef.current.contains(event.target)) {
            setLoginBoxVisible(false);
        }
    };

    useEffect(() => {
        // Thêm sự kiện khi nhấn ra ngoài
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Xóa sự kiện khi component bị hủy
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleLogin = () => {
        // Logic xử lý đăng nhập
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
        // Reset form sau khi đăng nhập
        setEmail("");
        setPassword("");
        setRememberMe(false);
    };

    return (
        <>
         <div className="container set_zindex" >
 <div className="Header_top">
    <div className="container_sub">
            <div className="row">
                <div className="col-6 Header_top_left">
                    <ul>
                        <li>
                            
                        <CgMail size={20}/>swb@gmail.com
                        </li>
                        <li>
                        <MdOutlinePhoneInTalk size={20}/>  08888123213
                        </li>
                    </ul>
                </div>
                <div className="col-6 Header_top_right">
                     <ul>
                         <li> 
                         <a href="#" onClick={toggleLoginBox}>
                                          
                                            <span className="login">
                                                <button> Đăng nhập</button>
                                                
                                            </span>
                              
                            
                             </a>
                             <a href="#" onClick={toggleLoginBox}>
                                          <span className="login">
                                              <button className="register"> Đăng ký</button>
                                          </span>
                                    
                          
                           </a>
                          
                             {isLoginBoxVisible && (
                    <div id="login-box" className="modal">
                        <div className="modal-content" ref={loginBoxRef}>
                            <div className="close" onClick={toggleLoginBox}>&times;</div>
                            <h2>ĐĂNG NHẬP</h2>
                            {/* <label htmlFor="email">Email:</label> */}
                            <input
                                
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                l
                            />
                            {/* <label htmlFor="password">Mật khẩu:</label> */}
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Ghi nhớ mật khẩu
                            </label><br /><br />
                            <input type="button" value="Đăng Nhập" onClick={handleLogin} />
                            <div className="footer-links">
                                <a href="#">Bạn chưa có mật khẩu? <span>Đăng ký ngay</span> </a>
                                <a href="#"><span>Quên mật khẩu?</span></a>
                                {/* <hr/>
                                <span>Đăng nhập với:</span>
                                <div className="social-login">
                                    <AiOutlineFacebook size={24} onClick={() => console.log("Login with Facebook")} />
                                    <AiOutlineGoogle size={24} onClick={() => console.log("Login with Google")} />
                                </div> */}
                            </div>
                        </div>
                    </div>
                )}
                         </li>
                    
                            {/* register */}
                             {isLoginBoxVisible && (
                    <div id="login-box" className="modal">
                        <div className="modal-content" ref={loginBoxRef}>
                            <div className="close" onClick={toggleLoginBox}>&times;</div>
                            <h2>ĐĂNG NHẬP</h2>
                            {/* <label htmlFor="email">Email:</label> */}
                            <input
                                
                                type="email"
                                id="email"
                                name="email"
                                        placeholder="Email hoặc số điện thoại đăng nhập"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                l
                            />
                            {/* <label htmlFor="password">Mật khẩu:</label> */}
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Ghi nhớ mật khẩu
                            </label><br /><br />
                            <input type="button" value="Đăng Nhập" onClick={handleLogin} />
                            <div className="footer-links">
                               <span>
                                Bạn chưa có tài khoản? 
                               <a href="#" className="footer-links-item">Đăng ký ngay </a>
                                </span> 
                              
                            <span>
                              <a href="#" className="footer-links-item">Quên mật khẩu?</a>
                              </span>
                              
                                {/* <hr/>
                                <span>Đăng nhập với:</span>
                                <div className="social-login">
                                    <AiOutlineFacebook size={24} onClick={() => console.log("Login with Facebook")} />
                                    <AiOutlineGoogle size={24} onClick={() => console.log("Login with Google")} />
                                </div> */}
                            </div>
                        </div>
                    </div>
                )}
                    
                     
                     </ul> 
                </div>
            </div>
         </div>
    </div>
   <div className="container_banner head_bt_bg set_zindex2">
   <div className="row"> 
        <div  className="col-xl-3"  >
             <div className="header_logo">
                <img src="https://www.saokim.com.vn/blog/wp-content/uploads/2022/04/logo-moi-cua-starbucks.jpg.webp"/>
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
                                     <a href={childItem.path}>{childItem.name}</a>
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
   </div>
   <div className="push"></div> 
    
        </>
   
    )
}
export default memo(Header);