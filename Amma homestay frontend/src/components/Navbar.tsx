import { useState, useEffect } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdmin(!!token);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleAdminClick = () => {

    if (isAdmin) {
      navigate("/admin/dashboard");
    } else {
      navigate("/admin");
    }

  };

  const handleLogout = () => {

    localStorage.removeItem("adminToken");
    setIsAdmin(false);
    navigate("/");

  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-gradient-to-r from-[#0c0c0c]/95 via-[#111111]/95 to-[#0c0c0c]/95
        backdrop-blur-md
        border-b border-[#C6A75E]/20
        shadow-[0_8px_30px_rgba(0,0,0,0.8)]
      "
    >

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="flex flex-col leading-none text-left"
        >
          <span className="font-display font-bold text-4xl tracking-wide bg-gradient-to-r from-[#E6C97A] via-[#C6A75E] to-[#A8893E] bg-clip-text text-transparent">
            Amma
          </span>

          <span className="text-[#E6C97A] font-body text-[12px] tracking-[0.25em] uppercase opacity-90">
            Homestay
          </span>
        </button>


        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">

          {navLinks.map((link) => (

            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="
                relative
                text-white/70
                font-body
                text-sm
                tracking-wide
                transition-all duration-500
                hover:text-[#E6C97A]
                before:absolute
                before:left-1/2
                before:-bottom-1
                before:h-[1.5px]
                before:w-0
                before:bg-gradient-to-r
                before:from-transparent
                before:via-[#E6C97A]
                before:to-transparent
                before:transition-all
                before:duration-500
                hover:before:w-full
                hover:before:left-0
                hover:-translate-y-[1px]
              "
            >
              {link.label}
            </button>

          ))}

        </nav>


        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 ml-auto">

          {/* Admin icon */}
          <button
            onClick={handleAdminClick}
            className="
              text-white/70
              hover:text-[#E6C97A]
              transition-all duration-300
              hover:scale-110
            "
            title="Admin"
          >
            <User size={20} />
          </button>


          {/* Logout icon (only if admin logged in) */}
          {isAdmin && (
            <button
              onClick={handleLogout}
              className="
                text-white/70
                hover:text-red-400
                transition-all duration-300
                hover:scale-110
              "
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          )}


          {/* Book now button */}
          <button
            onClick={() => scrollTo("#rooms")}
            className="
              relative
              px-7 py-2.5
              rounded-md
              font-body text-sm tracking-[0.18em]
              text-[#E6C97A]
              border border-[#C6A75E]/30
              bg-[#0b0b0b]
              transition-all duration-500 ease-out
              hover:-translate-y-[3px]
              hover:border-[#E6C97A]
              hover:text-white
              hover:shadow-[0_0_12px_rgba(230,201,122,0.35),
                            0_0_30px_rgba(198,167,94,0.25),
                            0_10px_40px_rgba(0,0,0,0.7)]
              active:translate-y-[1px]
            "
          >
            Book Now
          </button>

        </div>


        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-[#E6C97A]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>


      {/* Mobile menu */}
      {menuOpen && (

        <div className="md:hidden bg-[#111111] border-t border-[#C6A75E]/20 px-6 pb-6 pt-4 flex flex-col gap-4">

          {navLinks.map((link) => (

            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-white/80 text-left hover:text-[#E6C97A]"
            >
              {link.label}
            </button>

          ))}


          {/* Admin mobile */}
          <button
            onClick={handleAdminClick}
            className="text-white/80 text-left hover:text-[#E6C97A]"
          >
            Admin
          </button>


          {isAdmin && (
            <button
              onClick={handleLogout}
              className="text-red-400 text-left"
            >
              Logout
            </button>
          )}


        </div>

      )}

    </header>
  );
}
