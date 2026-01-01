import React from "react";
const navbarLinks = [
  { href: "#about", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
const Navbar = () => {
  return (
    <header className=" fixed top-0 right-0 left-0 bg-transparent py-5 ">
      <nav className=" container mx-auto px-6 flex items-center justify-between">
        <a href="#" className=" text-xl font-bold tracking-tight ">
          <span>/</span>
        </a>
        {/* desktop navbar */}
        <div className=" flex items-center gap-1 ">
          <div className="glass">
            {navbarLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
