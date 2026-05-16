"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden glass-panel border border-white/10">
              {/* Fallback image using CSS if we don't have a specific photo, we just use a dark gradient with red glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#1a0505] to-fire-red/20 mix-blend-overlay z-10"></div>
              <Image 
                src="/chicken_crispy.png" 
                alt="BLJ Quality"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl inline-block shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                  <div className="font-display text-5xl mb-2 text-white">#BLJFOOD</div>
                  <div className="text-fire-red font-bold tracking-widest uppercase text-sm">Depuis le début</div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fire-red/20 rounded-full blur-[40px] -z-10"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-fire-orange/20 rounded-full blur-[40px] -z-10"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-fire-red font-bold tracking-[0.2em] uppercase text-sm mb-4">
                La Différence
              </h2>
              <h3 className="font-display text-5xl md:text-6xl uppercase tracking-wider mb-8 leading-tight">
                Plus qu'un fast-food, <br/>
                <span className="text-glow">Un Lifestyle.</span>
              </h3>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Né de la passion pour la street-food marocaine authentique, <strong>BLJ</strong> repousse les limites du goût. Nous n'utilisons que des viandes fraîches, grillées à la perfection avec ce goût de fumée si particulier.
                </p>
                <p>
                  Nos sauces sont faites maison, nos portions sont généreuses et notre fromage fond exactement comme il faut. 
                </p>
                <p className="text-white font-medium border-l-4 border-fire-red pl-4">
                  "Prix illégal, qualité maximale. L'expérience street food portée à un autre niveau."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
                <div>
                  <div className="text-fire-red font-display text-4xl mb-1">100%</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Viande Fraîche</div>
                </div>
                <div>
                  <div className="text-fire-red font-display text-4xl mb-1 text-glow">🔥</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Cuisson Flamme</div>
                </div>
                <div>
                  <div className="text-fire-red font-display text-4xl mb-1">Maison</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Sauces Secrètes</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
