import Header from './Composants/Header'
import Footer from './Composants/Footer'
import image from '../assets/images/ibellulle.jpg'

export default function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-8 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-xl">

          <div className="font-caveat flex flex-col justify-center items-center gap-12">

            {/* Titre */}
            <div className="text-center mb-4">
              <h1 className="text-4xl text-gray-800 mb-2 font-[Dancing_Script]">Atelier de dessin à Excideuil :</h1>
              <h2 className="text-5xl text-gray-800 font-[Dancing_Script]">Les Joly Croquis</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Texte à gauche */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                  " Donnez vie à vos idées ! "
                </h1>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                  * Cours de dessin pour stimuler la créativité des enfants et des adolescents
                </h1>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                  * Ateliers d'éveil artistique pour les très jeunes enfants
                </h1>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                  * Stages pour adultes souhaitant explorer et développer leurs talents
                </h1>
              </div>

              {/* Image à droite */}
              <div className="flex-1">
                <div className="rounded-2xl border-4 border-[#e0d6cb] shadow-lg overflow-hidden">
                  <img
                    src={image}
                    alt="Cours de dessin"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
