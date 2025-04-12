import { Link } from "react-router-dom";

export default function Header() {
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
    <header className="bg-[#f8f1e8] border-b border-[#e0d6cb]">
      <nav className="flex justify-center py-6 space-x-8">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="text-gray-700 hover:text-[#b88c5a] font-caveat text-xl transition-colors duration-200 px-4 py-2 border-2 border-transparent hover:border-[#b88c5a] rounded-md hover:bg-[#f8f1e8]"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
