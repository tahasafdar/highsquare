import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Search, FileText, CheckCircle, Factory, HardHat, KeyRound, HeadphonesIcon } from "lucide-react";

const steps = [
  { num: "01", title: "Consultation & Guidance", desc: "In-depth discussion to understand your requirements, preferences, and project vision.", icon: MessageSquare },
  { num: "02", title: "Detailed Site Inspection", desc: "Expert team visits your site for precise measurements and structural assessment.", icon: Search },
  { num: "03", title: "Design Proposal & Costing", desc: "Detailed design proposals with transparent pricing tailored to your budget.", icon: FileText },
  { num: "04", title: "Project Finalization", desc: "Materials, timelines, and all technical details finalized before production.", icon: CheckCircle },
  { num: "05", title: "Fabrication & Quality Check", desc: "Precision-fabricated aluminium profiles with rigorous quality inspections.", icon: Factory },
  { num: "06", title: "Professional Installation", desc: "Skilled team ensures flawless fitting with attention to every detail.", icon: HardHat },
  { num: "07", title: "Final Handover", desc: "Thorough walkthrough ensuring every element meets exacting standards.", icon: KeyRound },
  { num: "08", title: "After-Sales Service", desc: "Ongoing maintenance support and warranty service for lasting peace of mind.", icon: HeadphonesIcon },
];

function StepCard({ step, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`process-step-${index}`}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Connector arrow (hidden on first of each row and on mobile) */}
      {index % 4 !== 0 && (
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.07 }}
            className="w-8 h-px bg-[#D4AF37]/30 origin-left"
          />
        </div>
      )}

      <div
        className="bg-white border border-black/[0.04] p-6 lg:p-7 h-full transition-all duration-400"
        style={{
          boxShadow: hovered
            ? "0 12px 36px rgba(0,0,0,0.07), 0 0 0 1px rgba(212,175,55,0.15)"
            : "0 1px 6px rgba(0,0,0,0.03)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Top row: number + icon */}
        <div className="flex items-start justify-between mb-5">
          <span className="text-3xl font-black font-['Oswald'] text-[#D4AF37]/20 leading-none">
            {step.num}
          </span>
          <motion.div
            animate={hovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-11 h-11 rounded-full bg-[#D4AF37]/[0.07] flex items-center justify-center group-hover:bg-[#D4AF37]/[0.12] transition-colors duration-300"
          >
            <step.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold font-['Oswald'] uppercase tracking-wide text-[#1A1A1A] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#777]">
          {step.desc}
        </p>

        {/* Bottom gold accent line */}
        <motion.div
          className="mt-5 h-[2px] bg-[#D4AF37] rounded-full"
          initial={{ width: 24 }}
          animate={{ width: hovered ? 48 : 24 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function OurProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
          className="text-center mb-14"
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
            className="text-base text-[#666] mt-4 max-w-lg mx-auto"
          >
            From the first consultation to after-sales support, every step is crafted for a seamless experience.
          </motion.p>
        </motion.div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom flow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center mt-10 gap-2"
        >
          {steps.map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30" />
              {i < steps.length - 1 && <div className="w-4 h-px bg-[#D4AF37]/20 hidden sm:block" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
