import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

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




{/* FULL WIDTH BLACK CONTACT SECTION */}
<section
  id="contact"
  className="
    relative
    pt-2 pb-24
    px-6
    bg-gradient-to-b
    from-[#f6f4ef]
    via-[#f3f0e8]
    to-[#f6f4ef]
  "
>
  {/* Ambient luxury glow */}
  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C6A75E]/10 blur-[140px] rounded-full pointer-events-none" />

  <div className="relative max-w-7xl mx-auto">

    {/* Premium card */}
    <div
      className="
        bg-black/95
        backdrop-blur-xl
        rounded-2xl
        p-14 md:p-16

        border border-[#E8DFC8]/40

        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      "
    >

      {/* Label */}
      <p className="text-[#E6C97A] font-body text-xs tracking-[0.45em] uppercase mb-4">
        Contact
      </p>

      {/* Heading */}
      <h3 className="font-display text-4xl md:text-5xl font-semibold text-white">
        Get in Touch
      </h3>

      {/* Divider */}
      <div className="w-20 h-[2px] bg-gradient-to-r from-[#E6C97A] via-[#C6A75E] to-transparent mt-6 mb-12"></div>

      {/* Contact info */}
      <div className="space-y-7 text-white/80 text-lg">

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-lg border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E]">
            <MapPin size={18} />
          </div>
          <p>Homestay, Kodaikanal</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-lg border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E]">
            <Phone size={18} />
          </div>
          <p>+91 98765 00000</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-lg border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E]">
            <Mail size={18} />
          </div>
          <p>hello@ammahomestay.com</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-lg border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E]">
            <Clock size={18} />
          </div>
          <p>Check-in: 12 PM · Check-out: 12 AM</p>
        </div>

      </div>

    </div>

  </div>

</section>

</>
  );
}