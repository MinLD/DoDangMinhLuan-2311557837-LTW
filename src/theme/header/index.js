import React, { memo, useState, useEffect, useRef } from "react";
import './style.scss';
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { ROUTERS } from "utils/router";
import { postLoin } from "Services/apiservices";
import { Await } from "react-router-dom";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate=useNavigate();
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
        },
        {
            name: "Admin",
            path: ROUTERS.USER.admin,
          
        },
       
    
])

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [rememberMe, setRememberMe] = useState(false);

    const [isLoginBoxVisible, setLoginBoxVisible] = useState(false);
    const loginBoxRef = useRef(null); // Tham chiếu đến khung đăng nhập
    const toggleLoginBox = () => {
        setLoginBoxVisible(!isLoginBoxVisible);
    };
        const [isRegisBoxVisible, SetRegisBoxVisible] = useState(false);
const toggleRegisBox=()=>{
    SetRegisBoxVisible(!isRegisBoxVisible);
}
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
 
const handleLogin =async()=>{
    //validate


    //submit apis
    let data = await postLoin(email,password)
    if(data && data.EC ===0){
        console.log(data)
        toast.success(data.EM );
        navigate('/Trang-chu')
        setLoginBoxVisible(false);

      }else{
      
        toast.error(data.EM)
        console.log(data)
      }
}
    return (
        <>
         <div className="container-big set_zindex" >
 <div className="Header_top">
    <div className="container_sub">
            <div className="row-html">
                <div className="col-6-html Header_top_left">
                    <ul>
                        <li>
                            
                        <CgMail size={20}/>swb@gmail.com
                        </li>
                        <li>
                        <MdOutlinePhoneInTalk size={20}/>  08888123213
                        </li>
                    </ul>
                </div>
                <div className="col-6-html Header_top_right">
                     <ul>
                         <li> 
                         <a href="#" onClick={toggleLoginBox}>
                                          
                                            <span className="login-html">
                                                <button> Đăng nhập</button>
                                                
                                            </span>
                              
                            
                             </a>
                             <a href="#" onClick={toggleRegisBox}>
                                          <span className="login">
                                              <button className="register-html"> Đăng ký</button>
                                          </span>
                                    
                          
                           </a>
                          
                             {isLoginBoxVisible && (
                    <div id="login-box" className="modal-html">
                        <div className="modal-content" ref={loginBoxRef}>
                            <div className="close-html" onClick={toggleLoginBox}>&times;</div>
                            <h2>ĐĂNG NHẬP</h2>
                            {/* <label htmlFor="email">Email:</label> */}
                            <input
                            className="input-login"
                                placeholder="Email hoặc số điện thoại đăng nhập"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                
                            />
                            {/* <label htmlFor="password">Mật khẩu:</label> */}
                            <input
                            className="input-login"
                            placeholder="Mật khẩu"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Ghi nhớ mật khẩu
                            </label><br /><br />
                            <input type="button" value="Đăng Nhập" onClick={()=> handleLogin()} />
                            <div className="footer-links">
                                <a href="#">Bạn chưa có mật khẩu? <span>Đăng ký ngay</span> </a>
                                <a href="#" className="footer-links-item"><span>Quên mật khẩu?</span></a>
                            </div>
                        </div>
                    </div>
                )}
{/* //đăng ký */}
{isRegisBoxVisible && (
                    <div id="login-box" className="modal-html">
                        <div className="modal-content" ref={loginBoxRef}>
                            <div className="close-html" onClick={toggleRegisBox}>&times;</div>
                            <h2>ĐĂNG KÝ</h2>
                            <input
                            className="input-login"
                                placeholder="Họ và tên"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                
                            />
                            <input
                            className="input-login"
                                placeholder="Email hoặc số điện thoại đăng nhập"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                
                            />

                            <input
                            className="input-login"
                            placeholder="Mật khẩu"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                                  <input
                            className="input-login"
                            placeholder="Nhập lại mật khẩu"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            
                         <br /><br />
                            <input type="button" value="Đăng ký " onClick={()=> handleLogin()} />
                            <div className="footer-links">
                                <a href="#">Bạn đã có tài khoản? <span>Đăng nhập ngay</span> </a>
                    
                            </div>
                        </div>
                    </div>
                )}
                         </li>
                    
         
                     
                     </ul> 
                </div>
            </div>
         </div>
    </div>
   <div className="container_banner head_bt_bg set_zindex2">
   <div className="row-html"> 
        <div  className="col-xl-3-html"  >
             <div className="header_logo">
                <img src="https://www.saokim.com.vn/blog/wp-content/uploads/2022/04/logo-moi-cua-starbucks.jpg.webp"/>
             </div>
        </div>
        <div  className="col-xl-9-html "  >
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