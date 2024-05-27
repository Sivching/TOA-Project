import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/NavBar/Footer/Footer";
import Scroll from "./Scroll";

const RootLayout = () => {
  return (
    <div>
      <Scroll />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
