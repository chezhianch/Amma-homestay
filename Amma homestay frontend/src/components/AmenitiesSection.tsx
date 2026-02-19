import { Wifi, Car, Coffee, Utensils, Shield, Clock } from "lucide-react";

const amenities = [
  { icon: <Wifi size={22} />, title: "Free High-Speed WiFi", desc: "Stay connected throughout your stay" },
  { icon: <Car size={22} />, title: "Free Parking", desc: "Ample secure parking space for guests" },
  { icon: <Coffee size={22} />, title: "Complimentary Breakfast", desc: "Fresh homemade breakfast every morning" },
  { icon: <Utensils size={22} />, title: "In-house Dining", desc: "Authentic home-cooked meals on request" },
  { icon: <Shield size={22} />, title: "24/7 Security", desc: "Round-the-clock CCTV and security staff" },
  { icon: <Clock size={22} />, title: "Flexible Check-in", desc: "Early check-in and late check-out available" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative py-24 px-6"
      style={{
        backgroundImage: "url('/luxury-lobby.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for premium readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E6C97A] font-body text-xs tracking-[0.4em] uppercase mb-3">
            What We Offer
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Guest Amenities
          </h2>

          <div className="w-16 h-[2px] bg-[#E6C97A] mx-auto mt-5"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {amenities.map((item) => (
            <div
              key={item.title}
             className="
  backdrop-blur-xl
  bg-white/[0.06]
  border border-white/[0.12]
  rounded-xl
  p-6
  flex gap-4 items-start
  transition-all duration-500 ease-out
  hover:bg-white/[0.10]
  hover:border-[#E6C97A]/50
  hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
  hover:shadow-[#E6C97A]/10
  hover:-translate-y-1
  group
"

            >
              {/* Icon */}
              <div
                className="
  w-11 h-11 rounded-lg
  bg-[#E6C97A]/10
  flex items-center justify-center
  text-[#E6C97A]
  flex-shrink-0
  transition-all duration-300
  group-hover:bg-[#E6C97A]
  group-hover:text-black
  group-hover:shadow-[0_0_15px_rgba(230,201,122,0.6)]
"

              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="font-display text-base font-semibold text-white mb-1">
                  {item.title}
                </h4>

                <p className="font-body text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
