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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  animateFast: { opacity: 1, y: 0, transition: { duration: 3 } },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
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

          <motion.button variants={textVariants} className="btn">
            About
          </motion.button>
          <motion.button variants={textVariants} className="btn">
            Latest Works
          </motion.button>

          <div className="hero">
            <motion.h3 variants={textVariants} animate="animateFast ">
              Hi, my name is
            </motion.h3>
            <motion.h2 variants={textVariants} animate="animateFast ">
              Paul Migasiuk. <br /> I build things for the web.
            </motion.h2>
            <motion.h1 variants={textVariants} animate="animateFast ">
              I elevate your business to meet the demands of the contemporary
              internet landscape. Partnering with me unveils innovative
              strategies to connect with a broader clientele, ensuring your
              brand reaches{" "}
              <motion.span
                style={{ color: "black" }}
                variants={textVariants}
                animate="animate"
              >
                New Heights.
              </motion.span>{" "}
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
