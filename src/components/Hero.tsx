"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-fire-red font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-fire-red inline-block"></span>
              L&apos;Expérience Ultime
            </h2>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight uppercase mb-6 text-glow">
              Street Food <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-orange to-fire-red">
                Luxury Vibes
              </span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-md mb-8 font-light leading-relaxed">
              Viande BBQ fraîche, sauces maison secrètes, fromage fondant. 
              Le goût de la rue marocaine, la qualité d&apos;un restaurant premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-fire-red hover:bg-dark-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all box-glow text-sm hover:scale-105 active:scale-95">
                Commander Maintenant
              </button>
              <button className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all text-sm hover:bg-white/5">
                Voir Le Menu
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh] mt-10 md:mt-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="relative w-full h-full animate-float flex items-center justify-center"
          >
            {/* Background Glow for Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-fire-red/30 rounded-full blur-[80px] -z-10 animate-flicker"></div>
            
            <div className="relative w-full max-w-[600px] aspect-square">
              <Image
                src="/hero_tacos.png"
                alt="BLJ Tacos Premium"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(212,0,0,0.5)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
