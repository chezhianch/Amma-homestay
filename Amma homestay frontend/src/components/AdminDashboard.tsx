import { useEffect, useState, useMemo } from "react";
import { getBookings } from "@/api/adminApi";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  createdAt: string;
  status: "Pending" | "Accepted" | "Rejected";
}

export default function AdminDashboard() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const token = localStorage.getItem("adminToken");


  // ================= FETCH BOOKINGS =================
  useEffect(() => {

    if (!token) {
      navigate("/admin");
      return;
    }

    fetchBookings();

  }, []);



  const fetchBookings = async () => {

    try {

      const result = await getBookings();

      if (result.success) {
        setBookings(result.bookings);
      }

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };



  // ================= ACTIONS =================

  const acceptBooking = async (id: string) => {

    await fetch(`http://localhost:5000/api/admin/bookings/${id}/accept`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchBookings();

  };


  const rejectBooking = async (id: string) => {

    await fetch(`http://localhost:5000/api/admin/bookings/${id}/reject`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchBookings();

  };


  const deleteBooking = async (id: string) => {

    await fetch(`http://localhost:5000/api/admin/bookings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchBookings();

  };


  const handleLogout = () => {

    localStorage.removeItem("adminToken");
    navigate("/admin");

  };



  // ================= STATS =================

  const stats = useMemo(() => {

    return {
      total: bookings.length,
      pending: bookings.filter(b => b.status === "Pending").length,
      accepted: bookings.filter(b => b.status === "Accepted").length,
      rejected: bookings.filter(b => b.status === "Rejected").length
    };

  }, [bookings]);



  // ================= SEARCH + FILTER =================

  const filteredBookings = useMemo(() => {

    return bookings.filter(b => {

      const matchesSearch =
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.email.toLowerCase().includes(search.toLowerCase()) ||
        b.phone.includes(search) ||
        b.room.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || b.status === filter;

      return matchesSearch && matchesFilter;

    });

  }, [bookings, search, filter]);



  // ================= LOADING =================

  if (loading) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-[#E6C97A] text-lg">
        Loading Dashboard...
      </div>
    );

  }



  // ================= UI =================

  return (

    <div className="min-h-screen bg-black text-white">


      {/* HEADER */}
      <div className="relative pt-6 pb-12 text-center">


        {/* HOME ICON */}
        <div
          onClick={() => navigate("/")}
          className="
            absolute left-16 top-12
            cursor-pointer
            text-[#E6C97A]
            hover:text-white
            transition
          "
          title="Go to Home"
        >
          <Home size={40} strokeWidth={2} />
        </div>



        {/* TITLE */}
        <h1 className="font-display font-bold text-4xl tracking-wide bg-gradient-to-r from-[#E6C97A] via-[#C6A75E] to-[#A8893E] bg-clip-text text-transparent">
          Admin
        </h1>

        <span className="text-[#E6C97A] text-[12px] tracking-[0.25em] uppercase opacity-90">
          DASHBOARD
        </span>



        {/* LOGOUT */}
        <div className="absolute right-8 top-6">

          <button
            onClick={handleLogout}
            className="
              border border-[#E6C97A]
              text-[#E6C97A]
              px-5 py-2
              rounded
              hover:bg-[#E6C97A]
              hover:text-black
              transition
            "
          >
            Logout
          </button>

        </div>


      </div>



      {/* STATS */}
      <div className="px-16 mb-8 grid grid-cols-4 gap-6">

        <StatCard title="Total Bookings" value={stats.total} color="gold" />

        <StatCard title="Pending" value={stats.pending} color="yellow" />

        <StatCard title="Accepted" value={stats.accepted} color="green" />

        <StatCard title="Rejected" value={stats.rejected} color="red" />

      </div>



      {/* SEARCH + FILTER */}
      <div className="px-16 mb-6 flex justify-between">

        <input
          type="text"
          placeholder="Search by name, email, phone, room..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            bg-[#111]
            border border-[#E6C97A]/30
            px-4 py-2
            rounded
            text-white
            w-96
            focus:outline-none
            focus:border-[#E6C97A]
          "
        />


        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="
            bg-[#111]
            border border-[#E6C97A]/30
            px-4 py-2
            rounded
            text-white
          "
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>

      </div>



      {/* TABLE */}
      <div className="px-16 pb-16">

        <div className="border border-[#E6C97A]/20 rounded-xl overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-[#111] text-[#E6C97A] uppercase">

              <tr>

                <th className="py-4 px-6 text-center">No.</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-left">Phone</th>
                <th className="py-4 px-6 text-left">Room</th>
                <th className="py-4 px-6 text-left">Check In</th>
                <th className="py-4 px-6 text-left">Check Out</th>
                <th className="py-4 px-6 text-center">Guests</th>
                <th className="py-4 px-6 text-center">Status</th>
                <th className="py-4 px-6 text-center">Actions</th>

              </tr>

            </thead>


            <tbody>

              {filteredBookings.map((b, index) => (

                <tr key={b._id} className="border-t border-[#E6C97A]/10 hover:bg-[#E6C97A]/5">

                  <td className="py-4 px-6 text-center text-[#E6C97A] font-semibold">
                    {index + 1}
                  </td>

                  <td className="py-4 px-6">{b.name}</td>

                  <td className="py-4 px-6">{b.email}</td>

                  <td className="py-4 px-6">{b.phone}</td>

                  <td className="py-4 px-6">{b.room}</td>

                  <td className="py-4 px-6">
                    {new Date(b.checkIn).toLocaleDateString()}
                  </td>

                  <td className="py-4 px-6">
                    {new Date(b.checkOut).toLocaleDateString()}
                  </td>

                  <td className="py-4 px-6 text-center">{b.guests}</td>

                  <td className="py-4 px-6 text-center">{b.status}</td>

                  <td className="py-4 px-6 text-center space-x-2">

                    {b.status !== "Accepted" &&
                      <button onClick={() => acceptBooking(b._id)} className="bg-green-500 px-3 py-1 rounded text-xs">
                        Accept
                      </button>
                    }

                    {b.status !== "Rejected" &&
                      <button onClick={() => rejectBooking(b._id)} className="bg-yellow-500 px-3 py-1 rounded text-xs text-black">
                        Reject
                      </button>
                    }

                    <button onClick={() => deleteBooking(b._id)} className="bg-red-500 px-3 py-1 rounded text-xs">
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


    </div>

  );

}



// ================= STAT CARD =================

function StatCard({ title, value, color }: any) {

  const colors: any = {
    gold: "text-[#E6C97A]",
    yellow: "text-yellow-400",
    green: "text-green-400",
    red: "text-red-400"
  };

  return (

    <div className="bg-[#111] border border-[#E6C97A]/20 rounded-lg p-5">

      <div className="text-gray-400 text-sm">
        {title}
      </div>

      <div className={`text-3xl font-bold mt-2 ${colors[color]}`}>
        {value}
      </div>

    </div>

  );

}
