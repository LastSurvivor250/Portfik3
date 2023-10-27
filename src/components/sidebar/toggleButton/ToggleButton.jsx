import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial={open ? "open" : "closed"} // Set the initial state based on the 'open' prop
          animate={open ? "open" : "closed"} // Animate based on the 'open' prop
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          initial={open ? "closed" : "open"} // Set the initial state based on the 'open' prop
          animate={open ? "closed" : "open"} // Animate based on the 'open' prop
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial={open ? "open" : "closed"} // Set the initial state based on the 'open' prop
          animate={open ? "open" : "closed"} // Animate based on the 'open' prop
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
