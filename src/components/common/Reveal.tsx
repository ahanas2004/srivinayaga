"use client";

 import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
 children: React.ReactNode;
 width?: "fit-content" | "100%";
 delay?: number;
}

const Reveal = ({ children, width = "fit-content", delay = 0.25 }: Props) => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true });
 const mainControls = useAnimation();

 useEffect(() => {
 if (isInView) {
 mainControls.start("visible");
 }
 }, [isInView, mainControls]);

 return (
 <div ref={ref} className="relative overflow-hidden" style={{ width }}>
 <motion.div
 variants={{
 hidden: { opacity: 0, y: 30 },
 visible: { opacity: 1, y: 0 },
 }}
 initial="hidden"
 animate={mainControls}
 transition={{ duration: 0.6, delay, ease: "easeOut" }}
>
 {children}
 </motion.div>
 </div>
 );
};

export default Reveal;
