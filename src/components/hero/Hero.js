import { motion } from "framer-motion";
import "./hero.scss";

//Text variants
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

// Slinding text variants
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeaType: "mirror",
            duration: 20,
        },
    },
};
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                {/* text container */}
                <motion.div
                    className="text-container"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>ANDY DANG</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Front End Developer
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                            Latest Projects
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Download CV
                        </motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt="scroll"
                    />
                </motion.div>
                {/* Image container */}
                <div className="img-container">
                    <img src="/male.png" alt="avatar" />
                </div>
            </div>
            {/* Sliding text */}
            <motion.div
                className="slidingText-container"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                HTML CSS JavaScript React
            </motion.div>
        </div>
    );
};

export default Hero;
