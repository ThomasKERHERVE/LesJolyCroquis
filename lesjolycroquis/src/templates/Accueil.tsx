import Header from './Composants/Header'
import Footer from './Composants/Footer'

export default function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl font-caveat mx-auto flex flex-col justify-center items-center gap-12 min-h-screen">
          
          {/* Texte centré au milieu de la page */}
          <div className="text-center mb-12">
            <h1 className="text-3xl text-gray-800 mb-4 font-[Dancing_Script]">Atelier de dessin à Excideuil :</h1>
            <h2 className="text-5xl text-gray-800 font-[Dancing_Script]">Les Joly Croquis</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Texte à gauche */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                " Donnez vie à vos idées ! " <br/>
              </h1>
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                * Cours de dessin pour stimuler la créativité des enfants et des adolescents <br/>
              </h1>
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                 * Des ateliers d'éveil artistique pour les très jeunes enfants <br/>
              </h1>
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                 * Des stages pour adultes qui veulent explorer et développer leurs talents <br/>
              </h1>
            </div>

            {/* Image à droite */}
            <div className="flex-1">
              <div className="rounded-2xl border-4 border-[#e0d6cb] shadow-lg overflow-hidden">
                <img
                  src="/images/ibellulle.jpg"
                  alt="Cours de dessin"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
