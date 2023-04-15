import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../containers/Header";
import Footer from "../containers/Footer";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;