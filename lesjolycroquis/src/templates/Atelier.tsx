import Header from './Composants/Header'
import Footer from './Composants/Footer'
import image from '../assets/images/Atelier1.jpg'
import image2 from '../assets/images/Atelier2.jpg'

export default function Atelier() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col gap-8 font-caveat">
          
          {/* Première partie */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full">
              <img
                src={image}
                alt="Atelier de dessin"
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 w-full text-gray-800 text-xl">
              <p>
                Situé tout proche du regroupement scolaire Giraut de Borneil, dans une belle et ancienne demeure d'Excideuil,
                l'atelier des Joly Croquis s'adresse particulièrement aux enfants et aux jeunes, débutants ou avancés...
              </p>
              <br />
              <p>
                Les groupes ne comporteront que de petits effectifs, idéalement 5 ou 6, mais ne dépassant pas 8 personnes.
              </p>
            </div>
          </div>

          {/* Ligne de séparation */}
          <hr className="border-t-2 border-[#e0d6cb] my-4 mx-auto w-2/3" />

          {/* Deuxième partie */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 w-full">
              <img
                src={image2}
                alt="Matériel et thématiques"
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 w-full text-gray-800 text-xl space-y-4">
              <p>
                Chacun apprendra tout d'abord à regarder pour mieux retranscrire. <br/>
                Des techniques différentes seront proposées puis expérimentées avec un matériel que je mets à la disposition de tous.
                (Chevalets, papier de qualité, crayons, fusains, pastels, aquarelle, encre...)
              </p>
              <p>
                Des thématiques variées seront choisies, souvent d'ailleurs par les élèves eux-mêmes. Nous en profiterons pour faire le
                parallèle avec des œuvres et ainsi s'initier à l'histoire de l'art.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
