import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <span>
                    <Sidebar />
                </span>
                <div className="social">
                    <a href="https://github.com">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
