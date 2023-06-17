import { Outlet } from "react-router-dom";
import Navbar from "../componetns/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;