import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
  <section
  id="about"
  className="py-28 px-6 bg-gradient-to-b from-white to-[#f8f6f1]"
>
  <div className="max-w-7xl mx-auto">

    {/* PREMIUM CARD */}
    <div
      className="
        bg-white
        rounded-xl
        p-14
        border border-[#E6C97A]/20
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        hover:shadow-[0_20px_50px_rgba(201,162,39,0.15)]
        hover:-translate-y-2
        transition-all duration-500
      "
    >

      {/* Section label */}
      <p className="
  font-body text-M tracking-[0.4em] uppercase mb-4
  bg-gradient-to-r from-[#A8893E] via-[#C9A227] to-[#7A5C1E]
  bg-clip-text text-transparent
">
  Our Story
</p>


      {/* Heading */}
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a1a1a] leading-tight">
        A Home Built
        <br />
        on Hospitality
      </h2>

      {/* Gold divider */}
      <div className="
        w-16 h-[2px] mt-6 mb-8
        bg-gradient-to-r
        from-[#F5E6B3]
        via-[#C9A227]
        to-[#A8893E]
      "></div>

      {/* Description */}
      <p className="font-body text-[#6b6b6b] text-lg leading-relaxed max-w-2xl mb-6">
        Amma Homestay was founded with one simple belief — every guest deserves
        the warmth of a home. Nestled in a peaceful neighborhood, we've been
        welcoming travelers from all walks of life since 2018.
      </p>

      <p className="font-body text-[#6b6b6b] text-lg leading-relaxed max-w-2xl mb-12">
        Our rooms blend modern comfort with traditional Indian hospitality,
        creating an experience that feels both luxurious and personal.
      </p>

      {/* Premium Stats */}
      <div className="flex flex-wrap gap-6">

        {/* Stat 1 */}
        <div
          className="
            text-center
            border border-[#E6C97A]/30
            rounded-lg
            px-8 py-5
            bg-white
            hover:border-[#C9A227]
            hover:shadow-[0_12px_30px_rgba(201,162,39,0.18)]
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <p className="
            font-display text-3xl font-semibold
            bg-gradient-to-r from-[#F5E6B3] via-[#C9A227] to-[#A8893E]
            bg-clip-text text-transparent
          ">
            6+
          </p>

          <p className="font-body text-sm text-[#7a7a7a] mt-1">
            Years Running
          </p>
        </div>

        {/* Stat 2 */}
        <div
          className="
            text-center
            border border-[#E6C97A]/30
            rounded-lg
            px-8 py-5
            bg-white
            hover:border-[#C9A227]
            hover:shadow-[0_12px_30px_rgba(201,162,39,0.18)]
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <p className="
            font-display text-3xl font-semibold
            bg-gradient-to-r from-[#F5E6B3] via-[#C9A227] to-[#A8893E]
            bg-clip-text text-transparent
          ">
            500+
          </p>

          <p className="font-body text-sm text-[#7a7a7a] mt-1">
            Guests Hosted
          </p>
        </div>

        {/* Stat 3 */}
        <div
          className="
            text-center
            border border-[#E6C97A]/30
            rounded-lg
            px-8 py-5
            bg-white
            hover:border-[#C9A227]
            hover:shadow-[0_12px_30px_rgba(201,162,39,0.18)]
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <p className="
            font-display text-3xl font-semibold
            bg-gradient-to-r from-[#F5E6B3] via-[#C9A227] to-[#A8893E]
            bg-clip-text text-transparent
          ">
            4.9
          </p>

          <p className="font-body text-sm text-[#7a7a7a] mt-1">
            Avg. Rating
          </p>
        </div>

      </div>

    </div>

  </div>
</section>




<section
        id="contact"
        className="relative py-12 px-6 overflow-hidden bg-gradient-to-b from-[#f6f4ef] via-[#f2efe7] to-[#f6f4ef]"
      >

        {/* Ambient luxury lights (BEHIND content) */}
        <div className="absolute top-32 left-1/3 w-[320px] h-[320px] bg-[#C6A75E]/8 blur-[140px] rounded-full -z-10 pointer-events-none"></div>

        <div className="absolute bottom-20 right-1/3 w-[260px] h-[260px] bg-[#C6A75E]/6 blur-[120px] rounded-full -z-10 pointer-events-none"></div>


        <div className="max-w-6xl mx-auto relative">

          {/* Animated premium card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
            className="relative z-10"
          >

            {/* subtle gold border */}
            <div className="absolute -inset-[1px] rounded-2xl border border-[#C6A75E]/20 pointer-events-none"></div>


            {/* Main card */}
            <div className="relative bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-14 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">

              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[#C6A75E] text-xs tracking-[0.5em] uppercase mb-4"
              >
                Contact
              </motion.p>


              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                className="text-5xl font-semibold text-white tracking-tight"
              >
                Get in Touch
              </motion.h3>


              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="origin-left w-24 h-[1px] bg-[#C6A75E]/70 mt-6 mb-14"
              />


              {/* Contact items */}
              <div className="space-y-8">

                <ContactItem
                  icon={<MapPin size={18} />}
                  text="Homestay, Kodaikanal"
                  delay={0.5}
                />

                <ContactItem
                  icon={<Phone size={18} />}
                  text="+91 98765 00000"
                  delay={0.6}
                />

                <ContactItem
                  icon={<Mail size={18} />}
                  text="hello@ammahomestay.com"
                  delay={0.7}
                />

                <ContactItem
                  icon={<Clock size={18} />}
                  text="Check-in: 12 PM · Check-out: 12 AM"
                  delay={0.8}
                />

              </div>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
}



/* Individual premium contact item */
function ContactItem({ icon, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      whileHover={{ x: 8 }}
      className="flex items-center gap-5 cursor-pointer"
    >

      {/* Icon */}
      <motion.div
        whileHover={{
          backgroundColor: "#C6A75E",
          color: "#0a0a0a",
          borderColor: "#C6A75E"
        }}
        transition={{ duration: 0.3 }}
        className="
          w-12 h-12
          rounded-lg
          border border-[#C6A75E]/30
          flex items-center justify-center
          text-[#C6A75E]
        "
      >
        {icon}
      </motion.div>


      {/* Text */}
      <motion.p
        whileHover={{ x: 3 }}
        transition={{ duration: 0.3 }}
        className="text-white/80 text-lg"
      >
        {text}
      </motion.p>

    </motion.div>
  );
}