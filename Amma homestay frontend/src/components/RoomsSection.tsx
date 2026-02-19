import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomFamily from "@/assets/room-family.jpg";
import { Wifi, Tv, Coffee, Wind, Users, Bath } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    image: roomDeluxe,
    price: 3500,
    originalPrice: 4200,
    guests: 2,
    size: "28 m²",
    bed: "King Bed",
    description: "Spacious and elegantly furnished with premium amenities, wooden flooring, and a city view.",
    amenities: ["Free WiFi", "Smart TV", "AC", "En-suite Bath", "Coffee Maker"],
    badge: "Most Popular",
    badgeColor: "bg-gold",
  },
  {
    id: 2,
    name: "Standard Twin Room",
    image: roomStandard,
    price: 2200,
    originalPrice: null,
    guests: 2,
    size: "20 m²",
    bed: "Twin Beds",
    description: "Cozy and well-appointed with all essentials. Perfect for friends or colleagues traveling together.",
    amenities: ["Free WiFi", "Smart TV", "AC", "Attached Bath"],
    badge: null,
    badgeColor: "",
  },
  {
    id: 3,
    name: "Premium Suite",
    image: roomSuite,
    price: 6500,
    originalPrice: 8000,
    guests: 3,
    size: "52 m²",
    bed: "King Bed + Sofa",
    description: "An indulgent suite with a separate living area, panoramic views, and luxury furnishings.",
    amenities: ["Free WiFi", "Smart TV", "AC", "Jacuzzi", "Minibar", "Coffee Maker"],
    badge: "Luxury",
    badgeColor: "bg-primary",
  },
  {
    id: 4,
    name: "Family Room",
    image: roomFamily,
    price: 4800,
    originalPrice: 5500,
    guests: 4,
    size: "38 m²",
    bed: "Double + Bunk Beds",
    description: "Ideal for families, featuring a double bed and bunk beds with a warm, homely atmosphere.",
    amenities: ["Free WiFi", "Smart TV", "AC", "En-suite Bath", "Kids Kit"],
    badge: "Family Friendly",
    badgeColor: "bg-green-700",
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi size={13} />,
  "Smart TV": <Tv size={13} />,
  "Coffee Maker": <Coffee size={13} />,
  "Minibar": <Coffee size={13} />,
  "Kids Kit": <Coffee size={13} />,
  "AC": <Wind size={13} />,
  "En-suite Bath": <Bath size={13} />,
  "Attached Bath": <Bath size={13} />,
  "Jacuzzi": <Bath size={13} />,
};

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<(typeof rooms)[0] | null>(null);

  return (
    <section id="rooms" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-3">Our Accommodations</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Room
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            Each room is thoughtfully designed to offer comfort, warmth, and a home-away-from-home experience.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
        </div>

        {/* Room cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {room.badge && (
                  <span className={`absolute top-4 left-4 ${room.badgeColor} text-white font-body text-xs font-semibold px-3 py-1 rounded-full`}>
                    {room.badge}
                  </span>
                )}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white font-body text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Users size={11} />
                  <span>{room.guests} guests</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{room.name}</h3>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">
                      {room.bed} · {room.size}
                    </p>
                  </div>
                  <div className="text-right">
                    {room.originalPrice && (
                      <p className="font-body text-xs text-muted-foreground line-through">
                        ₹{room.originalPrice.toLocaleString()}
                      </p>
                    )}
                    <p className="font-display text-2xl font-bold text-gold">
                      ₹{room.price.toLocaleString()}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">per night</p>
                  </div>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="flex items-center gap-1 font-body text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full"
                    >
                      {amenityIcons[amenity]}
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="w-full bg-primary text-primary-foreground font-body font-semibold text-sm py-3 rounded-lg hover:bg-gold hover:text-foreground transition-all duration-200"
                >
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRoom && (
        <BookingModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  );
}
