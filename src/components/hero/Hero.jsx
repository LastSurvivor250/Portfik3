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
          <div className="imageContainer">
            <img src="/hero4.png" alt="" />
          </div>

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

          <div className="hero">
            <motion.h2 variants={textVariants} animate="animateFast ">
              My name is Paul Migasiuk. <br /> I build things for the web.
            </motion.h2>
            <motion.h1 variants={textVariants} animate="animateFast ">
              I Help Your Business build up to the standards of modern Internet.
              With me You will uncover effective ways to reach new Clients.
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

export default Hero;
