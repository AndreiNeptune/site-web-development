"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn, Wrench, Shield } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Reparații Micro-soldering",
      desc: "Reparații electronice complexe pe plăci de bază pentru laptopuri și calculatoare desktop.",
      src: "/images/motherboard_repair.png",
      tag: "Hardware complex",
    },
    {
      title: "Mentenanță & Răcire",
      desc: "Curățare profesională de praf, înlocuire pastă termoconductoare și thermal pads.",
      src: "/images/laptop_cleaning.png",
      tag: "Optimizare termică",
    },
    {
      title: "Asamblare Custom & Upgrade",
      desc: "Asamblări de PC-uri de gaming sau office din piese alese special, cu cable management premium.",
      src: "/images/pc_assembly.png",
      tag: "Performanță maximă",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Galerie Foto
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Imagini din service-ul nostru
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Pentru fiecare defect de laptop sau PC există un remediu, iar noi cunoaștem aceste rezolvări. Iată câteva instantanee din laboratorul nostru de reparații.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={idx === 0}
                />
                
                {/* Floating Tag */}
                <span className="absolute top-4 left-4 z-10 bg-slate-950/70 backdrop-blur-md text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  {item.tag}
                </span>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-slate-950/90 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text content card */}
              <div className="p-6">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-2 flex items-center gap-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text paragraph matching the original list text */}
        <div className="max-w-4xl mx-auto mt-16 p-6 sm:p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
          <div className="flex gap-3 items-start">
            <Wrench className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
            <p>
              Cunoașterea noastră e dată de experiență, folosirea de aparatură de testare performantă și o îmbinare perfectă între cunoștințele hardware cu cele software. De multe ori se dovedește că ceea ce pare a fi un defect hardware este de fapt o problemă de setări în BIOS sau un sistem de operare instalat necorespunzător.
            </p>
          </div>
          <div className="flex gap-3 items-start pt-3 border-t border-slate-100 dark:border-slate-900">
            <Shield className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
            <p>
              Sau, dimpotrivă, ceea ce pare a fi o problemă software este cauzată de funcționarea defectuoasă a memoriilor RAM, a unui hard disk obosit sau a supraîncălzirii. La <strong>Omnivo</strong>, diagnoza corectă făcută din start te scutește de timp și bani aruncați inutil pe piese.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
