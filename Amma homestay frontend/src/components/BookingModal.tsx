import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { getRoomAvailability } from "@/api/bookingApi";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Room {
  _id: string;
  name: string;
}

interface Props {
  room: Room;
  onClose: () => void;
}

export default function BookingModal({ room, onClose }: Props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const [bookedDates, setBookedDates] = useState<Date[]>([]);

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  // ===============================
  // Animation Variants
  // ===============================
  const backdrop: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modal: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35 }
    }
  };


  // ===============================
  // Fetch availability (UNCHANGED)
  // ===============================
  useEffect(() => {

    const fetchAvailability = async () => {

      const result = await getRoomAvailability(room.name);

      if (result.success) {

        const disabled: Date[] = [];

        result.bookings.forEach((b: any) => {

          const start = new Date(b.checkIn);
          const end = new Date(b.checkOut);

          const current = new Date(start);

          while (current < end) {

            disabled.push(
              new Date(
                current.getFullYear(),
                current.getMonth(),
                current.getDate()
              )
            );

            current.setDate(current.getDate() + 1);

          }

        });

        setBookedDates(disabled);

      }

    };

    fetchAvailability();

  }, [room.name]);


  // ===============================
  // Load Razorpay Script
  // ===============================
  const loadRazorpay = () => {

    return new Promise<boolean>((resolve) => {

      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);

    });

  };


  // ===============================
  // Handle booking with Razorpay
  // ===============================
  const handleBooking = async () => {

    if (!name || !email || !phone || !checkIn || !checkOut) {
  
      setError(true);
      setMessage("Please fill all required fields");
      return;
  
    }
  
    if (checkOut <= checkIn) {
  
      setError(true);
      setMessage("Check-out must be after check-in");
      return;
  
    }
  
    try {
  
      setLoading(true);
  
      const razorpayLoaded = await loadRazorpay();
  
      if (!razorpayLoaded) {
  
        setError(true);
        setMessage("Payment system failed to load");
        setLoading(false);
        return;
  
      }
  
  
      // ✅ Correct TypeScript destructuring
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          roomName: room.name,
          name,
          email,
          phone,
          guests,
          checkIn,
          checkOut
        }
      );
  
      if (!data.success) {
  
        setError(true);
        setMessage(data.message);
        setLoading(false);
        return;
  
      }
  
  
      const options = {
  
        key: data.key,
  
        order_id: data.order.id,
  
        name: "Amma Homestay",
  
        description: room.name,
  
        theme: { color: "#000000" },
  
        handler: async function (response: any) {
  
          await axios.post(
            "http://localhost:5000/api/payment/verify-payment",
            {
              ...response,
              bookingId: data.bookingId
            }
          );
  
          setError(false);
          setMessage("Booking Confirmed Successfully ✅");
  
          setTimeout(() => {
            window.location.reload();
          }, 1500);
  
        },
  
        modal: {
          ondismiss: () => setLoading(false)
        }
  
      };
  
  
      const rzp = new window.Razorpay(options);
  
      rzp.open();
  
      setLoading(false);
  
    }
    catch (err: any) {
  
      setError(true);
  
      setMessage(
        err.response?.data?.message || "Payment failed"
      );
  
      setLoading(false);
  
    }
  
  };


  // ===============================
  // UI (UNCHANGED ORIGINAL)
  // ===============================
  return (

    <AnimatePresence>

      <motion.div
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      >

        <motion.div
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-neutral-200 p-7"
        >

          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-neutral-500 hover:text-black"
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl font-semibold mb-6">
            Book {room.name}
          </h2>

          <div className="space-y-4">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full border px-3 py-2 rounded"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border px-3 py-2 rounded"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded"
            />

            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              excludeDates={bookedDates}
              minDate={new Date()}
              placeholderText="Check-In"
              className="w-full border px-3 py-2 rounded"
            />

            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              excludeDates={bookedDates}
              minDate={checkIn || new Date()}
              placeholderText="Check-Out"
              className="w-full border px-3 py-2 rounded"
            />

            {message && (
              <p className={error ? "text-red-500" : "text-green-600"}>
                {message}
              </p>
            )}

            <button
              onClick={handleBooking}
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded"
            >
              {loading ? "Processing..." : "Confirm Booking"}
            </button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

}