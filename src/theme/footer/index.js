import { memo } from "react";
import "./style.scss";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaAward, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";



const Footer= () => {
    return (
 
    <div className="footer">
        <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"> 
        <div className="footer_about">
            <h1 className="footer_about_logo">SWB E-Learning</h1>
            <ul>
                <li className="footer_about_item"><MdOutlinePhoneInTalk size={25}/><span><b>888123213</b></span></li>
                <li className="footer_about_item"><CgMail size={25}/><span><b>swbelearning@gmail.com</b></span></li>
                <li className="footer_about_item">
                    <a href="#"> <FaFacebook size={35}/></a>
                    <a href="#"> <SiZalo size={35}/></a>
                    <a href="#"><BsInstagram size={35}/></a>
                </li>
            </ul>
        </div>
            
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_mid">
                <h6>
                    THÔNG TIN
                </h6>
                <ul>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                
                    
                </ul>
                <ul>
              
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="col-lg-3 col-md-12 .col-sm-12 col-xs-12" >
        <div className="footer_mid">
                <h6>
                    LIÊN KẾT
                </h6>
                <ul>
                    <li>
                        <a href="#">Chính sách bảo mật</a>
                      
                    </li>
                    <li>
                        <a href="#"> Thông Tin Về Chúng Tôi</a>
                      
                    </li>
                    <li className="footer_mid_item_last"> <FaAward  size={90}/></li>
                 
                    
                </ul>
            
            </div>
        </div>    
         </div>
      
         </div>
         <div className="coppyright">
            <hr/>
        <p>Copyright by SWB Vietnam 2024. All rights reserved.</p>
         </div>
        </div>

    

   
  
    );
    
};
export default memo(Footer);