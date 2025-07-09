import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons from lucide-react

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-primary p-4 relative">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl text-white">Mini Tools</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about_us">About Us</Link>
          </li>
          <li>
            <Link to="/contact_us">Contact Us</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-primary flex flex-col gap-4 p-4 text-white md:hidden z-50">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about_us" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact_us" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
