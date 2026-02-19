import { useState } from "react";
import { X } from "lucide-react";
import { createBooking } from "@/api/bookingApi";

interface Room {
  id: number;
  name: string;
  price: number;
  bed: string;
  guests: number;
}

interface Props {
  room: Room;
  onClose: () => void;
}

export default function BookingModal({ room, onClose }: Props) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // calculate nights
  const nights =
    form.checkIn && form.checkOut
      ? Math.max(
          0,
          Math.ceil(
            (new Date(form.checkOut).getTime() -
              new Date(form.checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  // SUBMIT BOOKING
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.checkIn || !form.checkOut) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const bookingData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: Number(form.guests),
      room: room.name,
      specialRequest: form.requests,
    };

    try {

      const result = await createBooking(bookingData);

      if (result.success) {

        setSubmitted(true);

        // reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "1",
          requests: "",
        });

      } else {

        alert("Booking failed");

      }

    } catch (error) {

      console.error(error);
      alert("Server error");

    }

    setLoading(false);
  };


  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">

        {/* HEADER */}

        <div className="bg-black text-white px-6 py-5 flex justify-between items-center">

          <div>

            <h3 className="text-xl font-semibold font-display">
              Book Your Stay
            </h3>

            <p className="text-sm text-white/70">
              {room.name}
            </p>

          </div>

          <button
            onClick={onClose}
            className="opacity-70 hover:opacity-100 transition"
          >
            <X size={20} />
          </button>

        </div>


        {/* SUCCESS SCREEN */}

        {submitted ? (

          <div className="p-10 text-center">

            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E6C97A]/20 flex items-center justify-center">

              <span className="text-[#C6A75E] text-3xl">
                ✓
              </span>

            </div>

            <h4 className="text-2xl font-semibold mb-2">
              Booking Confirmed
            </h4>

            <p className="text-gray-600 mb-6">
              Thank you <strong>{form.name}</strong>  
              <br />
              We will contact you soon.
            </p>

            <button
              onClick={onClose}
              className="
                bg-gradient-to-r
                from-[#E6C97A]
                via-[#C6A75E]
                to-[#A8893E]
                text-black
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:scale-105
                transition
              "
            >
              Close
            </button>

          </div>

        ) : (

          <form onSubmit={handleSubmit} className="p-6 space-y-4">


            {/* PRICE */}

            <div className="bg-gray-100 rounded-lg p-4 flex justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Rate per night
                </p>

                <p className="text-xl font-bold text-[#C6A75E]">
                  ₹{room.price}
                </p>

              </div>

              {nights > 0 && (

                <div className="text-right">

                  <p className="text-sm text-gray-500">
                    {nights} nights
                  </p>

                  <p className="font-bold">
                    ₹{room.price * nights}
                  </p>

                </div>

              )}

            </div>


            {/* INPUTS */}

            <input
              required
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />

            <input
              required
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />

            <input
              required
              type="date"
              value={form.checkIn}
              onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />

            <input
              required
              type="date"
              value={form.checkOut}
              onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />

            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C6A75E]"
            >
              {Array.from({ length: room.guests }, (_, i) => i + 1).map(n => (
                <option key={n} value={String(n)}>
                  {n} Guest
                </option>
              ))}
            </select>

            <textarea
              placeholder="Special Request"
              value={form.requests}
              onChange={(e) => setForm({ ...form, requests: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />


            {/* PREMIUM BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                relative
                overflow-hidden
                bg-gradient-to-r
                from-[#E6C97A]
                via-[#C6A75E]
                to-[#A8893E]
                text-black
                font-semibold
                py-3.5
                rounded-lg
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_12px_35px_rgba(198,167,94,0.45)]
                disabled:opacity-60
              "
            >

              {loading ? (

                <span className="flex justify-center items-center gap-2">

                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>

                  Processing...

                </span>

              ) : (

                "Confirm Booking"

              )}

            </button>

          </form>

        )}

      </div>

    </div>

  );

}
