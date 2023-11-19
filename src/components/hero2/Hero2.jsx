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
    <div className={`hero2 ${open ? "open" : ""}`}>
      <div className="wrapper2">
        <div className="imageContainer">
          <img src="/hero6.png" alt="" />
        </div>
        <motion.div
          className="textContainer2"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
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
              I specialize in Web-Development and Content Creation- Constantly
              Researching and Upgrading My Skills. Being an Engineer I have a
              Tendency Dive Deep into the Technical Aspects of My Craft. <br />
              In My Work I Mainly Use Java Script and its Various Libraries{" "}
              <br />
              To Deliver Efficient and Good Looking Solutions.
            </motion.h1>
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

export default Hero2;
