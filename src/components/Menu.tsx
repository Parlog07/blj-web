"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const CATEGORIES = ["Tacos", "Burgers", "Pâtes", "Plats", "Ciabatta", "Bols"];

const MENU_ITEMS = [
  { id: 1, category: "Tacos", name: "TACOS BLJ", price: "36 DH", desc: "Viande hachée, poulet, sauce fromagère BLJ" },
  { id: 2, category: "Tacos", name: "MERGUEZ", price: "36 DH", desc: "Saucisses merguez grillées, sauce fromagère" },
  { id: 3, category: "Tacos", name: "CHICKEN CORNFLAKES", price: "40 DH", desc: "Poulet cornflakes croustillant, frites" },
  { id: 4, category: "Burgers", name: "CHEESE BURGER", price: "39 DH", desc: "Steak haché, cheddar, tomate, oignons" },
  { id: 5, category: "Burgers", name: "DOUBLE CRUNCHY", price: "45 DH", desc: "Double poulet crunchy, cheddar, laitue" },
  { id: 6, category: "Pâtes", name: "PÂTES POULET", price: "44 DH", desc: "Poulet mariné, champignons, sauce blanche" },
  { id: 7, category: "Plats", name: "PLAT CHICKEN CRISPY", price: "48 DH", desc: "Escalopes poulet cornflakes, frites, pâtes" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Tacos");

  const filteredMenu = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4">
            Notre <span className="text-fire-red text-glow">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-fire-red mx-auto"></div>
        </div>

        {/* Category Scroll */}
        <div className="flex overflow-x-auto pb-6 mb-8 hide-scrollbar justify-start md:justify-center gap-4">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all ${
                activeCategory === category 
                  ? "bg-fire-red text-white box-glow" 
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredMenu.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-fire-red/30 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display tracking-wide text-2xl group-hover:text-fire-red transition-colors">{item.name}</h3>
                  <span className="font-bold text-fire-red whitespace-nowrap ml-4">{item.price}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-6">{item.desc}</p>
              </div>
              
              <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-fire-red border border-white/10 hover:border-transparent font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 transition-all group-hover:box-glow">
                <Plus className="w-4 h-4" />
                Ajouter
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
