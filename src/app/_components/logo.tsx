"use client";
import { kablammo } from "@/fonts";
import { motion } from "framer-motion";
import { useRef } from "react";

const Logo = (): JSX.Element => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`${kablammo.className} w-max-full h-max-[200px] z-50 flex flex-col items-start justify-start text-start font-black leading-[60px] transition-transform [font-size:_clamp(2.5em,5vw,4rem)]`}
      >
        Chantal
        <br />
        Williams
      </motion.div>
    </>
  );
};

export default Logo;
