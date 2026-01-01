import React from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navbarLinks = [
  { href: "#about", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" fixed top-0 right-0 left-0 bg-transparent py-5 ">
      <nav className=" container mx-auto px-6 flex items-center justify-between">
        <a href="#" className=" text-xl font-bold tracking-tight ">
          <span>/</span>
        </a>
        {/* desktop navbar */}
        <div className=" hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navbarLinks.map((link) => (
              <a
                className=" px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full hover:bg-surface"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* cta */}
        <div className=" hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
        {/* mobile button */}
        <Button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className=" md:hidden p-2 text-foreground cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>
      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className=" md:hidden glass-strong mt-0.5 animate-fade-in">
          <div className=" container mx-auto px-6 py-6 flex flex-col gap-4">
            {navbarLinks.map((link) => (
              <a
                className=" text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full hover:bg-surface py-2"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="cursor-pointer">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
