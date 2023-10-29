import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    return (
        <nav className="navbar">
            <Sidebar />
            <div className="wrapper">
                <a href="#Homepage">
                    <img src="./images/logo.png" alt="logo" />
                </a>

                <div className="social">
                    <a href="https://github.com/anhgit-91">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
