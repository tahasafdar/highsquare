import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Search, FileText, CheckCircle, Factory, HardHat, KeyRound, HeadphonesIcon } from "lucide-react";

const steps = [
  { num: "01", title: "Consultation", desc: "Understanding your requirements and project vision", icon: MessageSquare },
  { num: "02", title: "Site Inspection", desc: "Precise measurements and structural assessment", icon: Search },
  { num: "03", title: "Design & Costing", desc: "Detailed proposals with transparent pricing", icon: FileText },
  { num: "04", title: "Finalization", desc: "Materials, timelines, and technical details locked", icon: CheckCircle },
  { num: "05", title: "Fabrication", desc: "Precision manufacturing with quality checks", icon: Factory },
  { num: "06", title: "Installation", desc: "Flawless fitting by our skilled team", icon: HardHat },
  { num: "07", title: "Handover", desc: "Complete walkthrough and quality sign-off", icon: KeyRound },
  { num: "08", title: "After-Sales", desc: "Ongoing support and warranty service", icon: HeadphonesIcon },
];

function TimelineNode({ step, index, inView, total }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center relative group"
      data-testid={`process-step-${index}`}
    >
      {/* Vertical content — alternates above/below the line */}
      <div className={`flex flex-col items-center ${index % 2 === 0 ? "flex-col" : "flex-col-reverse"}`}>
        {/* Content block */}
        <motion.div
          className={`w-36 lg:w-40 text-center ${index % 2 === 0 ? "mb-5" : "mt-5"}`}
          whileHover={{ y: index % 2 === 0 ? -4 : 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4 className="text-xs font-bold font-['Oswald'] uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
            {step.title}
          </h4>
          <p className="text-[11px] leading-snug text-[#888] mt-1.5">
            {step.desc}
          </p>
        </motion.div>

        {/* Node circle */}
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: "spring", stiffness: 250 }}
            className="w-12 h-12 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_2px_12px_rgba(212,175,55,0.15)] group-hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)] group-hover:border-[#AA7C11] transition-all duration-300"
          >
            <step.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#AA7C11] transition-colors" strokeWidth={1.5} />
          </motion.div>
          {/* Step number badge */}
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4AF37] text-white text-[9px] font-bold flex items-center justify-center shadow-sm"
          >
            {index + 1}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      data-testid="our-process-section"
      className="py-16 lg:py-24 bg-[#F9F9F9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-8 h-px bg-[#D4AF37] origin-right"
            />
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              How We Work
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-8 h-px bg-[#D4AF37] origin-left"
            />
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-[#1A1A1A]"
            >
              Our Process
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-[#666] mt-4 max-w-md mx-auto"
          >
            8 steps from first call to lasting satisfaction
          </motion.p>
        </motion.div>

        {/* ===== DESKTOP: Horizontal timeline ===== */}
        <div className="hidden lg:block relative">
          {/* Animated gold line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-black/[0.06]" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#E8C94B] to-[#D4AF37] -translate-y-px z-[1]"
          />

          {/* Nodes */}
          <div className="relative flex justify-between items-center py-28">
            {steps.map((step, i) => (
              <TimelineNode key={step.num} step={step} index={i} inView={inView} total={steps.length} />
            ))}
          </div>
        </div>

        {/* ===== MOBILE: Vertical timeline ===== */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent origin-top"
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative flex gap-5 items-start group"
                data-testid={`process-mobile-${i}`}
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
                  className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_2px_10px_rgba(212,175,55,0.12)] z-10 flex-shrink-0"
                >
                  <step.icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <div className="pt-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                      Step {step.num}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold font-['Oswald'] uppercase tracking-wide text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#777] mt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
