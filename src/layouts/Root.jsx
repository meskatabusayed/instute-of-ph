import { Outlet } from "react-router-dom";
import Navber from "../components/Header/Navber/Navber";
import Footer from "../pages/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
           <div className="my-5">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;