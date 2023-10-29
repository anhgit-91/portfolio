import React, { useRef, useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useInView,
    useAnimation,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faUpRightFromSquare,
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./projects.scss";
import items from "./data";

//Text variants

let varContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
            // duration: 0.5,
            // delay: 0.25,
        },
    },
};

let varImg = {
    hidden: { y: 300, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

let varText = {
    hidden: { y: -300, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
};

const Single = ({ item }) => {
    const control = useAnimation();
    const [slide, setSlide] = useState(0);
    const imgRef = useRef();
    const inView = useInView(imgRef);
    const isTablet = window.innerWidth < 1024;
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (isMobile || isTablet) {
        varContainer = {};
        varImg = {};
        varText = {};
    }
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    //slide effect
    const nextSlide = () => {
        setSlide(slide === item.img.length - 1 ? 0 : slide + 1);
    };

    //slide effect
    const prevSlide = () => {
        setSlide(slide === 0 ? item.img.length - 1 : slide - 1);
    };
    return (
        <section id="Projects">
            <div className="container">
                <motion.div
                    className="wrapper"
                    ref={imgRef}
                    variants={varContainer}
                    initial="hidden"
                    animate={control}
                >
                    <motion.div className="img-container">
                        {/* <motion.img
                            variants={varImg}
                            src={item.img}
                            alt="project"
                        /> */}

                        <div className="carousel" key={item.id}>
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="arrow arrow-left"
                                onClick={prevSlide}
                            />
                            {Array.isArray(item.img) ? (
                                item.img.map((imgUrl, imgIdx) => (
                                    <img
                                        className={
                                            slide === imgIdx
                                                ? "slide"
                                                : "slide slide-hidden"
                                        }
                                        src={imgUrl}
                                        alt={item.title}
                                        key={imgIdx}
                                    />
                                ))
                            ) : (
                                <img src={item.img} alt={item.title} />
                            )}
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="arrow arrow-right"
                                onClick={nextSlide}
                            />
                            {/* indicator */}
                            <span className="indicators">
                                {Array.isArray(item.img)
                                    ? item.img.map((_, idx) => (
                                          <button
                                              key={idx}
                                              onClick={null}
                                              className={
                                                  slide === idx
                                                      ? "indicator"
                                                      : "indicator indicator-inactive"
                                              }
                                          ></button>
                                      ))
                                    : null}
                            </span>
                        </div>
                    </motion.div>
                    <motion.div className="text-container" variants={varText}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className="links">
                            <a href="https://github.com">
                                <FontAwesomeIcon icon={faGithub} />
                                Github
                            </a>
                            <a href="https://github.com">
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                                Live view
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const Projects = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div
                    style={{ scaleX }}
                    className="progress-bar"
                ></motion.div>
            </div>
            {items.map((item) => {
                return <Single key={item.id} item={item} />;
            })}
        </div>
    );
};

export default Projects;
