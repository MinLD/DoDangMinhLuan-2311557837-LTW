import { memo } from "react";
import Footer from "../footer";
import Header from "../header";
import homePage from "pages/user/homePage";

const MasterLayout= ({children, ...props}) => {
    return (
    <div {...props}>
     <Header/>
    {children}

    <Footer/>
    </div>
    )
}
export default memo(MasterLayout);