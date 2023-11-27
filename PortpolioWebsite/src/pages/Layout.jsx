import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
    <center>
      <nav className="header">
            <Link to="/"id="a">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
            <Link to="/About" id="a">Introduction</Link>&nbsp;&nbsp;&nbsp;
          
            <Link to="/Project"id="a">Projects</Link>&nbsp;&nbsp;
          
            <Link to="/Contact"id="a">Contact</Link>&nbsp;&nbsp;
      </nav>
      </center>
      <Outlet />
    </>
  )
};

export default Layout;