import { motion } from "framer-motion";
import "./about.scss";
import items from "./data";

let container = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.4,
        },
    },
};

const About = () => {
    // mobile check
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (isMobile) {
        container = {};
    }
    return (
        <div className="about">
            <div className="wrapper">
                <h1>About me</h1>
                <p>
                    I'm a <span>front-end</span> developer with a strong desire
                    to evolve into a full-stack developer. Proficient in{" "}
                    <span>JavaScript</span> and
                    <span> React</span>, I focus on crafting visually appealing
                    and user-friendly web applications. I'm actively learning
                    <span> back-end</span> technologies and databases to become
                    well-rounded in web development, eager to tackle new
                    challenges and collaborate effectively.
                </p>
                <h2>Skills and Tools</h2>
                <div
                    className="skill"
                    variants={container}
                    initial="initial"
                    whileInView="animate"
                >
                    {items.map((item) => {
                        return (
                            <motion.figure key={item.id}>
                                <img src={item.img} alt={item.title}></img>
                                <figcaption>{item.title}</figcaption>
                            </motion.figure>
                        );
                    })}
                </div>
                <div className="learning">
                    <h2>
                        Currently working on:{" "}
                        <span>NodeJS, MongoDB, ExpressJS.</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default About;
