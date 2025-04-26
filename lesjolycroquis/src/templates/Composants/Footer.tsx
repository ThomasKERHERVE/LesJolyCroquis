export default function Footer() {
    return (
      <footer className="bg-[#f8f1e8] border-t border-[#e0d6cb] shadow-inner shadow-[#00000010]">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Les Joly Croquis. Tous droits réservés.
          </p>
          <div className="flex font-caveat space-x-6">
            <a>
              Catherine JOLY MOUTAULT
            </a>
          </div>
        </div>
      </footer>
    )
  }
  