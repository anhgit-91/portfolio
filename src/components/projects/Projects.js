import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./projects.scss";

const items = [
    {
        id: 1,
        title: "API Project",
        img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Quaerat voluptate mollitia illo dolorem accusantium eligendi corrupti quis aperiam incidunt magni nam ipsam,",
    },
    {
        id: 2,
        title: "React Project",
        img: "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Quaerat voluptate mollitia illo dolorem accusantium eligendi corrupti quis aperiam incidunt magni nam ipsam,",
    },
    {
        id: 3,
        title: "Boostrap Project",
        img: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
        desc: "Quaerat voluptate mollitia illo dolorem accusantium eligendi corrupti quis aperiam incidunt magni nam ipsam,",
    },
];

const Single = ({ item }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section id="Projects">
            <div className="container">
                <div className="wrapper">
                    <div className="img-container" ref={ref}>
                        <img src={item.img} alt="project" />
                    </div>
                    <motion.div className="text-container" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className="buttons">
                            <button>Github</button>
                            <button>Live demo</button>
                        </div>
                    </motion.div>
                </div>
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
                <h1>Projects Works</h1>
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
