import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Sidebar />
            <div className="wrapper">
                <span>Andy Dev</span>
                <div className="social">
                    <a href="https://github.com">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://github.com">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
