import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 6,
      staggerChildren: 0.1,
    },
  },
  animateFast: { opacity: 1, y: 0, transition: { duration: 6 } },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = ({ open }) => {
  return (
    <div className={`hero ${open ? "open" : ""}`}>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PAUL MIGASIUK</motion.h2>
          <motion.h1 variants={textVariants} animate="animateFast ">
            <motion.span
              style={{ color: "yellow" }}
              variants={textVariants}
              animate="animateFast "
            >
              JS
            </motion.span>{" "}
            Web-Developer
          </motion.h1>
          <div className="imageContainer">
            <img src="/hero4.png" alt="" />
          </div>
          <motion.div variants={textVariants} className="triangle-container">
            <motion.button
              variants={textVariants}
              className="button"
              id="button1"
            >
              About
            </motion.button>
            <motion.button
              variants={textVariants}
              className="button"
              id="button2"
            >
              Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="button"
              id="button3"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <div className="hero2">
            <motion.h2 variants={textVariants}>PAUL MIGASIUK</motion.h2>
            <motion.h1 variants={textVariants} animate="animateFast ">
              <motion.span
                style={{ color: "yellow" }}
                variants={textVariants}
                animate="animateFast "
              >
                JS
              </motion.span>{" "}
              Web-Developer
            </motion.h1>
            <div className="imageContainer">
              <img src="/hero5.png" alt="" />
            </div>
            <motion.div variants={textVariants} className="triangle-container">
              <motion.button
                variants={textVariants}
                className="button"
                id="button1"
              >
                About
              </motion.button>
              <motion.button
                variants={textVariants}
                className="button"
                id="button2"
              >
                Latest Works
              </motion.button>
              <motion.button
                variants={textVariants}
                className="button"
                id="button3"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        WEB-DEV PORTFOLIO
      </motion.div>
    </div>
  );
};

export default Hero;
