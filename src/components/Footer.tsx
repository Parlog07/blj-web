import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-fire-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-fire-red rounded flex items-center justify-center font-display text-4xl font-bold tracking-tighter text-white box-glow mb-6">
              BLJ
            </div>
            <p className="text-zinc-400 mb-6 font-light">
              Street food luxury vibes. L'expérience marocaine ultime en matière de tacos et burgers premium.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fire-red transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fire-red transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              {/* TikTok placeholder icon since lucide doesn't have tiktok by default */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fire-red transition-colors text-white font-bold font-display">
                TK
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-display text-xl tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#menu" className="hover:text-fire-red transition-colors">Notre Menu</a></li>
              <li><a href="#featured" className="hover:text-fire-red transition-colors">Best Sellers</a></li>
              <li><a href="#story" className="hover:text-fire-red transition-colors">Notre Histoire</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-display text-xl tracking-wider mb-6">Nos Restaurants</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-fire-red"></div>
                BLJ
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-fire-red"></div>
                FROUJI
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-fire-red"></div>
                BACHANDI
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display text-xl tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fire-red shrink-0" />
                <span>Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-fire-red shrink-0" />
                <span>+212 600 000 000</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} BLJ Food. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
