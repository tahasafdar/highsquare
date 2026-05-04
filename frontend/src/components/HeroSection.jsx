import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HERO_IMG = "https://images.unsplash.com/photo-1764009184594-327e5f5fd788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxhbHVtaW5pdW0lMjB3aW5kb3clMjBmcmFtZSUyMG1vZGVybiUyMGJ1aWxkaW5nJTIwZmFjYWRlJTIwZGF5dGltZXxlbnwwfHx8fDE3Nzc5MjQ4NTB8MA&ixlib=rb-4.1.0&q=85";

const WHATSAPP_URL = "https://wa.me/919827333552?text=" + encodeURIComponent("Hi, I'm interested in your aluminium solutions. Can you share more details?");

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Text Content */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-px bg-[#D4AF37]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
                Aluminizing Trust
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] text-[#1A1A1A] font-['Oswald']"
            >
              High Square
              <br />
              <span className="gold-text">Aluminium</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm tracking-[0.1em] uppercase text-[#666] mt-2 mb-6"
            >
              A Venture by Monalisa Aluminium
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg text-[#555] font-medium mb-2"
            >
              Precision Aluminium Solutions for Modern Spaces
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-base text-[#777] leading-relaxed mb-4"
            >
              Premium Aluminium Windows, Doors & Custom Fabrication
              <br />
              for Modern Homes and Commercial Projects
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-sm text-[#D4AF37] font-semibold tracking-wide mb-8"
            >
              25+ Years of Experience | 1000+ Projects Delivered
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                data-testid="hero-explore-btn"
                className="relative border-2 border-[#D4AF37] text-[#D4AF37] hover:text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Get Free Quote</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-quote-btn"
                className="relative bg-[#25D366] text-white hover:bg-[#1ea952] transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Now
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ scale: imgScale }} className="overflow-hidden shadow-2xl">
              <img
                src={HERO_IMG}
                alt="Modern aluminium facade"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="eager"
              />
            </motion.div>
            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/40" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/40" />
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
}
