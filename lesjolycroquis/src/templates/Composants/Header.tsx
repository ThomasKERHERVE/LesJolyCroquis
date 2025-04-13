import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/atelier", label: "L'atelier" },
    { to: "/LesCours", label: "Les Cours" },
    { to: "/LesStages", label: "Les stages" },
    { to: "/actualite", label: "L'actualité" },
    { to: "/realisations", label: "Quelques réalisations" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#f8f1e8] border-b border-[#e0d6cb] w-full">
      <nav className="max-w-screen-xl mx-auto flex flex-col items-center py-6 px-4">
        {/* Sur PC */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-700 hover:text-[#b88c5a] font-caveat text-xl transition-colors duration-200 px-4 py-2 border-2 border-transparent hover:border-[#b88c5a] rounded-md hover:bg-[#f8f1e8]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Test Sur Téléphone */}
        <div className="lg:hidden w-full">
          <button
            className="mx-auto text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden w-full">
            <ul className="flex flex-col items-center gap-4 py-4">
              {navLinks.map(({ to, label }) => (
                <li key={to} className="w-full text-center">
                  <Link
                    to={to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-[#b88c5a] font-caveat text-xl transition-colors duration-200 px-4 py-2 border-b border-transparent hover:border-[#b88c5a]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
