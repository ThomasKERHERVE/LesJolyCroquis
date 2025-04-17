import Header from './Composants/Header'
import Footer from './Composants/Footer'

import im1 from '../assets/images/Realisations/AndreaAquarelle.jpg'
import im2 from '../assets/images/Realisations/ElzaFusainGraphite.jpg'
import im3 from '../assets/images/Realisations/FloraAcrylique.jpg'
import im4 from '../assets/images/Realisations/Leonie.jpg'
import im5 from '../assets/images/Realisations/LinaAquarelle.jpg'
import im6 from '../assets/images/Realisations/MargotAcrylique.jpg'
import im7 from '../assets/images/Realisations/FloraGouachePastelSec.jpg'
import im8 from '../assets/images/Realisations/TechniqueQuadriallage.jpg'

import RealisationCard from './Composants/RealisationCard'

export default function Realisations() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="font-caveat flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-8 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-xl">
          <h1 className="text-center text-4xl font-bold mb-10 font-caveat">Les Réalisations</h1>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">

            <RealisationCard image={im1} description={'Réalisation d\'Andréa à l\'aquarelle'}/>
            <RealisationCard image={im2} description={'Réalisation d\'Elza au fusain / graphite '}/>
            <RealisationCard image={im3} description={'Réalisation de Flora à l\'acrylique'}/>
            <RealisationCard image={im4} description={'Réalisation de Léonie'}/>
            <RealisationCard image={im5} description={'Réalisation de Lina à l\'aquarelle'}/>
            <RealisationCard image={im6} description={'Réalisation de Margot à l\'acrylique'}/>
            <RealisationCard image={im7} description={'Réalisation de Flora à la gouache et aux pastels secs'}/>
            <RealisationCard image={im8} description={'Technique du quadrillage'}/>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
