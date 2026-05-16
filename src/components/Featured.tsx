"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";

const FEATURED_ITEMS = [
  {
    id: "big-boss",
    name: "BIG BOSS",
    desc: "Double viande hachée, poulet mariné, merguez, cordon bleu, cheddar, mozzarella, frites.",
    price: "58 DH",
    image: "/big_boss_tacos.png",
    badge: "The Ultimate"
  },
  {
    id: "burger-blj",
    name: "BURGER BLJ",
    desc: "Steak haché, cheddar, laitu, tomate, oignons, sauce BLJ maison.",
    price: "49 DH",
    image: "/burger_blj.png",
    badge: "Best Seller"
  },
  {
    id: "flex-tacos",
    name: "FLEX TACOS",
    desc: "Viande hachée, poulet mariné, sauce fromagère maison, cheddar, oignons crispy.",
    price: "48 DH",
    image: "/flex_tacos.png",
    badge: "Signature"
  }
];

export default function Featured() {
  return (
    <section id="featured" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4"
          >
            Nos <span className="text-fire-red text-glow">Best Sellers</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-lg">Les créations les plus intenses, validées par la rue.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {FEATURED_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative glass-panel rounded-3xl p-6 md:p-8 flex flex-col items-center hover:border-fire-red/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,0,0,0.2)]"
            >
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-fire-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full box-glow">
                  {item.badge}
                </span>
              </div>

              <div className="relative w-full aspect-square mb-8">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-fire-red/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 ease-out z-10"
                />
              </div>

              <div className="w-full text-center mt-auto relative z-20">
                <h3 className="font-display text-3xl mb-2 tracking-wide group-hover:text-fire-red transition-colors">{item.name}</h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2 h-10">{item.desc}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl font-bold text-white font-display tracking-wider">{item.price}</span>
                  <button className="bg-white/10 hover:bg-fire-red text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors group-hover:box-glow">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
