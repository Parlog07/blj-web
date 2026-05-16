"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Subtle Smoke Effect */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,77,0,0.15)_0%,transparent_70%)] blur-[100px]"
      />
      
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[10%] right-[5%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(212,0,0,0.15)_0%,transparent_70%)] blur-[100px]"
      />

      {/* Floating Embers */}
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        return (
          <motion.div
            key={i}
            initial={{
              y: "100vh",
              x: Math.random() * 100 + "vw",
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              x: Math.random() * 100 + "vw",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-fire-orange box-glow"
            style={{
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
}
