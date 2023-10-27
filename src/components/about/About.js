import { animate, motion } from "framer-motion";
import "./about.scss";
import items from "./data";

let container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.3,
        },
    },
};

const About = () => {
    //mobile check
    let isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
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
                <motion.div className="skill">
                    {items.map((item) => {
                        return (
                            <motion.figure
                                key={item.id}
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <img src={item.img} alt={item.title}></img>
                                <figcaption>{item.title}</figcaption>
                            </motion.figure>
                        );
                    })}
                </motion.div>
                <div className="learning">
                    <h2>
                        Currently working on:
                        <span>NodeJS, MongoDB, ExpressJS.</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default About;
