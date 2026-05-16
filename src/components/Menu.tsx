"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["Tacos", "Tacos Spécial", "Burgers", "Pâtes", "Plats", "Ciabatta", "Bols", "Big Bing"];

const MENU_ITEMS = [
  // TACOS
  { id: 1, category: "Tacos", name: "TACOS BLJ", price: "36 DH", desc: "Tortilla, viande hachée bœuf grillée, sauce fromagère BLJ, frites.", image: "/hero_tacos.png" },
  { id: 2, category: "Tacos", name: "MIX", price: "36 DH", desc: "Tortilla, viande hachée et poulet, sauce fromagère BLJ, frites.", image: "/flex_tacos.png" },
  { id: 3, category: "Tacos", name: "MERGUEZ", price: "36 DH", desc: "Tortilla, saucisses merguez grillées, sauce fromagère BLJ, frites.", image: "/hero_tacos.png" },
  { id: 4, category: "Tacos", name: "VIANDE HACHÉE", price: "36 DH", desc: "Tortilla, viande hachée bœuf grillée, sauce fromagère BLJ, frites.", image: "/flex_tacos.png" },
  { id: 5, category: "Tacos", name: "CHICKEN MARINÉ", price: "38 DH", desc: "Tortilla, poulet mariné, sauce fromagère BLJ, frites.", image: "/hero_tacos.png" },
  { id: 6, category: "Tacos", name: "CHICKEN CORNFLAKES", price: "40 DH", desc: "Tortilla, poulet cornflakes croustillant, sauce fromagère BLJ, frites.", image: "/flex_tacos.png" },
  { id: 7, category: "Tacos", name: "TRIO", price: "42 DH", desc: "Tortilla, poulet mariné, saucisses, nuggets, sauce fromagère BLJ, frites.", image: "/hero_tacos.png" },
  { id: 8, category: "Tacos", name: "CORDON BLEU", price: "42 DH", desc: "Tortilla, cordon bleu, sauce fromagère BLJ, frites.", image: "/flex_tacos.png" },
  
  // TACOS SPÉCIAL
  { id: 9, category: "Tacos Spécial", name: "FLEX TACOS", price: "48 DH", desc: "Viande hachée, poulet mariné, sauce fromagère maison, cheddar, frites, oignons crispy, sauce samouraï.", image: "/flex_tacos.png" },
  { id: 10, category: "Tacos Spécial", name: "BIG BOSS", price: "58 DH", desc: "Double viande hachée, poulet mariné, merguez, cordon bleu, cheddar, mozzarella, frites, oignons crispy.", image: "/big_boss_tacos.png" },

  // BURGERS
  { id: 11, category: "Burgers", name: "BURGER BLJ", price: "49 DH", desc: "Steak haché, cheddar, laitue, tomate, oignons, sauce BLJ maison.", image: "/burger_blj.png" },
  { id: 12, category: "Burgers", name: "CHEESE BURGER", price: "39 DH", desc: "Steak haché, cheddar, oignons, cornichons, sauce maison.", image: "/burger_blj.png" },
  { id: 13, category: "Burgers", name: "BACON BURGER", price: "44 DH", desc: "Steak haché, bacon grillé, cheddar, oignons crispy, sauce barbecue.", image: "/burger_blj.png" },
  { id: 14, category: "Burgers", name: "CHICKEN BURGER", price: "38 DH", desc: "Filet de poulet mariné, cheddar, laitue, tomate, sauce maison.", image: "/burger_blj.png" },
  { id: 15, category: "Burgers", name: "DOUBLE CRUNCHY", price: "45 DH", desc: "Double poulet crunchy, cheddar, laitue, sauce BLJ spécial burger.", image: "/burger_blj.png" },
  { id: 16, category: "Burgers", name: "EXTRA CHEESE", price: "43 DH", desc: "Steak haché, double cheddar, sauce fromagère, oignons caramélisés.", image: "/burger_blj.png" },

  // PÂTES
  { id: 17, category: "Pâtes", name: "PÂTES POULET", price: "44 DH", desc: "Pâtes, poulet mariné, champignons, sauce blanche, fromage.", image: "/chicken_crispy.png" },
  { id: 18, category: "Pâtes", name: "PÂTES VIANDE HACHÉE", price: "46 DH", desc: "Pâtes, viande hachée, sauce tomate, herbes, fromage.", image: "/chicken_crispy.png" },
  { id: 19, category: "Pâtes", name: "PÂTES 4 FROMAGES", price: "42 DH", desc: "Pâtes, sauce 4 fromages (mozzarella, cheddar, parmesan).", image: "/chicken_crispy.png" },
  { id: 20, category: "Pâtes", name: "PÂTES SAUCE ROSE", price: "40 DH", desc: "Pâtes, sauce rose, poulet, champignons, fromage.", image: "/chicken_crispy.png" },

  // PLATS
  { id: 21, category: "Plats", name: "ESCALOPE POULET", price: "55 DH", desc: "Escalope de poulet, sauce champignons, crème fraîche, frites.", image: "/chicken_crispy.png" },
  { id: 22, category: "Plats", name: "CORDON BLEU", price: "59 DH", desc: "Cordon bleu, sauce champignons, frites.", image: "/chicken_crispy.png" },
  { id: 23, category: "Plats", name: "KEBAB ASSIETTE", price: "50 DH", desc: "Kebab, frites, salade, tomates, oignons, sauce au choix.", image: "/chicken_crispy.png" },
  { id: 24, category: "Plats", name: "MIX GRILL", price: "75 DH", desc: "Kebab, escalope, saucisse, viande hachée, frites, salade.", image: "/chicken_crispy.png" },
  { id: 25, category: "Plats", name: "PLAT CHICKEN CRISPY ÉCO", price: "38 DH", desc: "3 escalopes poulet cornflakes, frites, pâtes penne sauce au choix.", image: "/chicken_crispy.png" },
  { id: 26, category: "Plats", name: "PLAT CHICKEN CRISPY MAXI", price: "48 DH", desc: "5 escalopes poulet cornflakes, frites, pâtes penne sauce au choix.", image: "/chicken_crispy.png" },
  { id: 27, category: "Plats", name: "POULET PARMIGIANA", price: "55 DH", desc: "Filet de poulet pané, sauce tomate, mozzarella gratinée, frites, pâtes.", image: "/chicken_crispy.png" },

  // CIABATTA
  { id: 28, category: "Ciabatta", name: "B.L.J", price: "38 DH", desc: "Pain ciabatta, saucisses marocaines, viande hachée, sauce fromagère BLJ.", image: "/flex_tacos.png" },
  { id: 29, category: "Ciabatta", name: "MIXTE", price: "38 DH", desc: "Pain ciabatta, viande hachée, poulet, sauce fromagère BLJ.", image: "/flex_tacos.png" },
  { id: 30, category: "Ciabatta", name: "VIANDE HACHÉE", price: "32 DH", desc: "Pain ciabatta, viande hachée, fruit secs, sauce fromagère BLJ.", image: "/flex_tacos.png" },
  { id: 31, category: "Ciabatta", name: "SAUCISSE", price: "28 DH", desc: "Pain ciabatta, saucisses marocaines, sauce fromagère BLJ.", image: "/flex_tacos.png" },

  // BOLS
  { id: 32, category: "Bols", name: "TACOS AU BOLS ÉCO", price: "45 DH", desc: "3 viandes au choix, sauce fromagère, frites.", image: "/hero_tacos.png" },
  { id: 33, category: "Bols", name: "TACOS AU BOLS MAXI", price: "55 DH", desc: "4 viandes au choix, sauce fromagère, frites.", image: "/hero_tacos.png" },

  // BIG BING
  { id: 34, category: "Big Bing", name: "AVEC FRITES", price: "45 DH", desc: "4 pieces chicken, 2 cheddar, tomate, oignons, sauce tasty.", image: "/burger_blj.png" },
  { id: 35, category: "Big Bing", name: "SANS FRITES", price: "38 DH", desc: "4 pieces chicken, 2 cheddar, tomate, oignons, sauce tasty.", image: "/burger_blj.png" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Tacos");

  const filteredMenu = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 relative bg-black/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4">
            Notre <span className="text-fire-red text-glow">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-fire-red mx-auto"></div>
        </div>

        {/* Category Scroll */}
        <div className="flex overflow-x-auto pb-6 mb-8 hide-scrollbar justify-start lg:justify-center gap-3 md:gap-4 snap-x">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap snap-center px-6 md:px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all flex-shrink-0 ${
                activeCategory === category 
                  ? "bg-fire-red text-white box-glow scale-105" 
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                key={item.id}
                className="glass-panel rounded-3xl overflow-hidden flex flex-col group hover:border-fire-red/50 hover:shadow-[0_0_30px_rgba(212,0,0,0.2)] transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 sm:h-56 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-4 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-fire-red/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    className="object-contain drop-shadow-xl z-10 group-hover:scale-110 transition-transform duration-500 ease-out p-6"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display tracking-wide text-2xl md:text-3xl group-hover:text-fire-red transition-colors">{item.name}</h3>
                      <span className="font-bold text-fire-red whitespace-nowrap ml-4 text-xl md:text-2xl font-display tracking-wider">{item.price}</span>
                    </div>
                    <p className="text-sm md:text-sm text-zinc-400 mb-6 line-clamp-3">{item.desc}</p>
                  </div>
                  
                  <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-fire-red border border-white/10 hover:border-transparent font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 transition-all group-hover:box-glow mt-auto">
                    <Plus className="w-5 h-5" />
                    Ajouter
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
