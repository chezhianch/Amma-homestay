import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 animate-[fadeIn_1.2s_ease-out]">

        {/* Welcome text */}
        <p className="text-[#E6C97A] tracking-[0.45em] uppercase text-xs mb-6 font-body">
          Welcome To
        </p>

        {/* Premium Heading */}
        <h1 className="font-display leading-tight">

          {/* Amma */}
          <span className="block text-white text-5xl md:text-6xl font-semibold">
            Amma
          </span>

          {/* Homestay */}
          <span className="
            block
            text-6xl md:text-7xl
            font-bold
            bg-gradient-to-r
            from-[#E6C97A]
            via-[#C6A75E]
            to-[#A8893E]
            bg-clip-text
            text-transparent
            mt-2
          ">
            Homestay
          </span>

        </h1>

        {/* Description */}
        <p className="
          text-white/80
          text-lg md:text-xl
          max-w-2xl
          mx-auto
          leading-relaxed
          mt-6
          font-body
        ">
          Experience warmth, comfort, and heartfelt hospitality —
          just like home, only better.
        </p>

        {/* Premium Stats */}
        <div className="
          flex
          flex-wrap
          justify-center
          gap-5
          mt-14
        ">

          {/* Stat 1 */}
          <div className="
            px-7 py-2.5
            border border-[#E6C97A]/40
            rounded-full
            text-sm
            text-[#E6C97A]
            backdrop-blur-md
            bg-white/5
            hover:bg-white/10
            transition-all duration-300
          ">
            ★ 4.9 Rating
          </div>

          {/* Stat 2 */}
          <div className="
            px-7 py-2.5
            border border-[#E6C97A]/40
            rounded-full
            text-sm
            text-[#E6C97A]
            backdrop-blur-md
            bg-white/5
            hover:bg-white/10
            transition-all duration-300
          ">
            500+ Guests
          </div>

          {/* Stat 3 */}
          <div className="
            px-7 py-2.5
            border border-[#E6C97A]/40
            rounded-full
            text-sm
            text-[#E6C97A]
            backdrop-blur-md
            bg-white/5
            hover:bg-white/10
            transition-all duration-300
          ">
            Since 2018
          </div>

        </div>

      </div>

    </section>
  );
}
