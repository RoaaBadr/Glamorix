import { Outlet } from "react-router-dom";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import BackToTop from "../Components/layout/BackToTop";

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <BackToTop></BackToTop>
        </>
    );
}

export default Layout;
