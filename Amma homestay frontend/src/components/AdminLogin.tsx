import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  const handleLogin = async (e: any) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const res = await fetch("http://localhost:5000/api/admin/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })

      });

      const data = await res.json();

      if (data.success) {

        localStorage.setItem("adminToken", data.token);

        navigate("/admin/dashboard");

      } else {

        setError(data.message || "Login failed");

      }

    } catch (err) {

      setError("Server error");

    }

    setLoading(false);

  };



  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-4">


      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-[#111] border border-[#E6C97A]/20 rounded-xl p-8 shadow-xl">


        {/* LOGO */}
        <div className="text-center mb-8">

          <span className="font-display font-bold text-4xl tracking-wide bg-gradient-to-r from-[#E6C97A] via-[#C6A75E] to-[#A8893E] bg-clip-text text-transparent block">
            Amma
          </span>

          <span className="text-[#E6C97A] text-xs tracking-[0.3em] uppercase">
            Homestay
          </span>

        </div>



        {/* TITLE */}
        <div className="text-center mb-6">

          <h2 className="text-2xl font-semibold text-white">
            Admin Login
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Dashboard Access
          </p>

        </div>



        {/* ERROR */}
        {error && (

          <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded mb-4 text-sm">
            {error}
          </div>

        )}



        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">


          {/* EMAIL */}
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              bg-black
              border border-[#E6C97A]/30
              text-white
              px-4 py-3
              rounded
              focus:outline-none
              focus:border-[#E6C97A]
            "
          />



          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              bg-black
              border border-[#E6C97A]/30
              text-white
              px-4 py-3
              rounded
              focus:outline-none
              focus:border-[#E6C97A]
            "
          />



          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3
              rounded
              font-semibold
              text-black
              bg-gradient-to-r
              from-[#E6C97A]
              via-[#C6A75E]
              to-[#A8893E]
              hover:opacity-90
              transition
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>


        </form>



        {/* BACK LINK */}
        <div className="text-center mt-6">

          <button
            onClick={() => navigate("/")}
            className="text-[#E6C97A] hover:underline text-sm"
          >
            ← Back to Website
          </button>

        </div>


      </div>


    </div>

  );

}
