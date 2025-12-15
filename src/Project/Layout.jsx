import Navbar2 from "./Navbar2";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
    </>
  );
};

export default Layout;
