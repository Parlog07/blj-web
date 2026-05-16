"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-fire-red rounded flex items-center justify-center font-display text-3xl font-bold tracking-tighter text-white box-glow">
            BLJ
          </div>
          <span className="font-display text-2xl tracking-wide hidden sm:block">
            STREET FOOD
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wider uppercase text-zinc-300">
          <a href="#menu" className="hover:text-white hover:text-glow transition-all">Menu</a>
          <a href="#featured" className="hover:text-white hover:text-glow transition-all">Best Sellers</a>
          <a href="#story" className="hover:text-white hover:text-glow transition-all">Notre Histoire</a>
          
          <button className="flex items-center gap-2 bg-white/5 hover:bg-fire-red border border-white/10 hover:border-fire-red transition-all px-5 py-2.5 rounded-full group box-glow">
            <ShoppingCart className="w-4 h-4 text-white" />
            <span className="text-white">Commander</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 py-6 px-6 flex flex-col gap-6"
        >
          <a href="#menu" className="text-xl font-display uppercase tracking-wide hover:text-fire-red transition-colors" onClick={() => setMobileMenuOpen(false)}>Menu</a>
          <a href="#featured" className="text-xl font-display uppercase tracking-wide hover:text-fire-red transition-colors" onClick={() => setMobileMenuOpen(false)}>Best Sellers</a>
          <a href="#story" className="text-xl font-display uppercase tracking-wide hover:text-fire-red transition-colors" onClick={() => setMobileMenuOpen(false)}>Notre Histoire</a>
          <button className="w-full flex justify-center items-center gap-2 bg-fire-red py-4 rounded-xl text-white font-bold uppercase tracking-wider text-lg box-glow">
            <ShoppingCart className="w-5 h-5" />
            Commander Maintenant
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
