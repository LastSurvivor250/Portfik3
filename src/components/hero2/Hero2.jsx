import "./hero2.scss";
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
      duration: 3,
      staggerChildren: 0.1,
    },
  },
  animateFast: { opacity: 1, y: 0, transition: { duration: 3 } },
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

const Hero2 = ({ open }) => {
  return (
    <div className={`hero ${open ? "open" : ""}`}>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={textVariants} className="triangle-container2">
            <motion.button
              variants={textVariants}
              className="buttonx"
              id="buttonx1"
            >
              About
            </motion.button>
            <motion.button
              variants={textVariants}
              className="buttonx"
              id="buttonx2"
            >
              Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="buttonx"
              id="buttonx3"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <div className="hero2">
            <motion.h2 variants={textVariants} animate="animateFast ">
              <motion.span
                style={{ color: "yellow" }}
                variants={textVariants}
                animate="animateFast "
              >
                JS
              </motion.span>{" "}
              Web-Developer For Hire
            </motion.h2>
            <motion.h1 variants={textVariants} animate="animateFast ">
              We Help Your Business Explore The Depths of Modern Internet and
              Find Most Effective Ways to Reach Your Potential Client in Both
              Conventional and Unconventional Ways.
            </motion.h1>
          </div>
        </motion.div>
        <div className="imageContainer">
          <img src="/hero4.png" alt="" />
        </div>
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

export default Hero2;
