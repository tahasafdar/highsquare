import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Search, FileText, CheckCircle, Factory, HardHat, KeyRound, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation & Guidance",
    desc: "We begin with an in-depth discussion to understand your requirements, preferences, and vision for the project.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1714976327006-b8b67d3ebff8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBhcmNoaXRlY3QlMjBibHVlcHJpbnR8ZW58MHx8fHwxNzc2MjM2ODQyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    num: "02",
    title: "Detailed Site Inspection",
    desc: "Our expert team visits your site to take precise measurements and assess structural requirements.",
    icon: Search,
    image: "https://images.pexels.com/photos/8293639/pexels-photo-8293639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    num: "03",
    title: "Design Proposal & Costing",
    desc: "We create detailed design proposals with transparent pricing tailored to your budget and specifications.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBhcmNoaXRlY3QlMjBibHVlcHJpbnR8ZW58MHx8fHwxNzc2MjM2ODQyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    num: "04",
    title: "Project Finalization",
    desc: "Once approved, we finalize materials, timelines, and all technical details before production begins.",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMGRlYWwlMjBrZXlzJTIwaGFuZG92ZXIlMjBxdWFsaXR5JTIwY2hlY2slMjBmYWN0b3J5fGVufDB8fHx8MTc3NjIzNjg2Mnww&ixlib=rb-4.1.0&q=85",
  },
  {
    num: "05",
    title: "Fabrication & Quality Check",
    desc: "Premium aluminium profiles are precision-fabricated in our facility with rigorous quality inspections at every stage.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1625220346325-d95f70d74f5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwaW5zcGVjdGlvbiUyMHdvcmtlciUyMGluc3RhbGxhdGlvbiUyMHdpbmRvd3xlbnwwfHx8fDE3NzYyMzY4NDl8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    num: "06",
    title: "Professional Installation",
    desc: "Our skilled installation team ensures flawless fitting with attention to every detail and minimal disruption.",
    icon: HardHat,
    image: "https://images.pexels.com/photos/5691521/pexels-photo-5691521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    num: "07",
    title: "Final Handover",
    desc: "We conduct a thorough walkthrough with you, ensuring every element meets our exacting standards and your expectations.",
    icon: KeyRound,
    image: "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMGRlYWwlMjBrZXlzJTIwaGFuZG92ZXIlMjBxdWFsaXR5JTIwY2hlY2slMjBmYWN0b3J5fGVufDB8fHx8MTc3NjIzNjg2Mnww&ixlib=rb-4.1.0&q=85",
  },
  {
    num: "08",
    title: "After-Sales Service",
    desc: "Our relationship doesn't end at handover. We provide ongoing maintenance support and warranty service.",
    icon: HeadphonesIcon,
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMGRlYWwlMjBrZXlzJTIwaGFuZG92ZXIlMjBxdWFsaXR5JTIwY2hlY2slMjBmYWN0b3J5fGVufDB8fHx8MTc3NjIzNjg2Mnww&ixlib=rb-4.1.0&q=85",
  },
];

function ProcessStep({ step, index, inView }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center ${index !== steps.length - 1 ? "pb-12 md:pb-0" : ""}`}>
      {/* Left side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`${isEven ? "md:pr-12" : "md:pl-12 md:order-3"}`}
      >
        {isEven ? (
          /* Content card */
          <div className="group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl font-black font-['Oswald'] gold-text opacity-40">{step.num}</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/40 to-transparent origin-left"
              />
            </div>
            <h3 className="text-xl font-semibold font-['Oswald'] uppercase tracking-wide text-[#1A1A1A] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#666]">{step.desc}</p>
          </div>
        ) : (
          /* Professional illustration panel */
          <div className="relative border border-black/5 bg-gradient-to-br from-white to-[#F5F5F5] p-8 flex flex-col items-center justify-center h-48 md:h-44 shadow-[0_2px_12px_rgba(0,0,0,0.03)] group/ill">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="w-16 h-16 flex items-center justify-center relative"
            >
              {/* Background ring */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 group-hover/ill:border-[#D4AF37]/40 transition-colors" />
              <div className="absolute inset-1 rounded-full bg-[#D4AF37]/5 group-hover/ill:bg-[#D4AF37]/10 transition-colors" />
              <step.icon className="w-7 h-7 text-[#D4AF37] relative z-10" strokeWidth={1.5} />
            </motion.div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#999] mt-3 font-medium">
              Step {step.num}
            </span>
          </div>
        )}
      </motion.div>

      {/* Center timeline */}
      <div className="hidden md:flex flex-col items-center md:order-2 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
          className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-white flex items-center justify-center relative group"
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#D4AF37]/30"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={inView ? { scale: 1.5, opacity: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, repeat: 1 }}
          />
          <step.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
        </motion.div>
        {/* Connector line */}
        {index < steps.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            className="w-px h-32 lg:h-24 bg-gradient-to-b from-[#D4AF37]/50 to-[#D4AF37]/10 origin-top"
          />
        )}
      </div>

      {/* Right side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`${isEven ? "md:pl-12 md:order-3" : "md:pr-12 md:order-1"}`}
      >
        {isEven ? (
          /* Professional illustration panel */
          <div className="relative border border-black/5 bg-gradient-to-br from-white to-[#F5F5F5] p-8 flex flex-col items-center justify-center h-48 md:h-44 shadow-[0_2px_12px_rgba(0,0,0,0.03)] group/ill">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="w-16 h-16 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 group-hover/ill:border-[#D4AF37]/40 transition-colors" />
              <div className="absolute inset-1 rounded-full bg-[#D4AF37]/5 group-hover/ill:bg-[#D4AF37]/10 transition-colors" />
              <step.icon className="w-7 h-7 text-[#D4AF37] relative z-10" strokeWidth={1.5} />
            </motion.div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#999] mt-3 font-medium">
              Step {step.num}
            </span>
          </div>
        ) : (
          /* Content card */
          <div className="group text-right">
            <div className="flex items-center gap-3 mb-3 justify-end">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="h-px flex-1 bg-gradient-to-l from-[#D4AF37]/40 to-transparent origin-right"
              />
              <span className="text-4xl font-black font-['Oswald'] gold-text opacity-40">{step.num}</span>
            </div>
            <h3 className="text-xl font-semibold font-['Oswald'] uppercase tracking-wide text-[#1A1A1A] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#666]">{step.desc}</p>
          </div>
        )}
      </motion.div>

      {/* Mobile timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="md:hidden absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-white flex items-center justify-center -ml-5"
      >
        <step.icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
      </motion.div>
    </div>
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
      {/* Background accent */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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

        {/* Timeline */}
        <div className="relative pl-5 md:pl-0">
          {/* Mobile vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2 }}
            className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent origin-top"
          />

          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
