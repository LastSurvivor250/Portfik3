import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = ({ open, setOpen }) => {
  return (
    <div className={`navbar ${open ? "open" : ""}`}>
      {/* Sidebar */}
      <Sidebar open={open} />

      <div className="wrapper">
        PORTFOLIO
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.svg" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
