import Header from './Composants/Header'
import Footer from './Composants/Footer'
import coursImage from '../assets/images/palette.jpg'
export default function LesCours() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col md:flex-row gap-8 font-caveat">

          {/* Texte à gauche */}
          <div className="md:w-1/2 w-full text-gray-800 text-xl space-y-6">
            <h2 className="text-3xl font-semibold mb-4">Les Cours</h2>

            <div className="space-y-4 border-b pb-4">
              <p className="font-semibold">3 à 5 ans avec un parent :</p>
              <p>Le samedi matin<br/>Max 5 enfants</p>
            </div>

            <div className="space-y-4 border-b pb-4">
              <p className="font-semibold">6 à 7 ans :</p>
              <p>Le mercredi après-midi<br/>Max 8 enfants<br/>210€ l’année scolaire</p>
            </div>

            <div className="space-y-4 border-b pb-4">
              <p className="font-semibold">8 à 10 ans :</p>
              <p>Le vendredi de 16h30 à 18h00<br/>Max 8 enfants<br/>210€ l’année scolaire</p>
            </div>

            <div className="space-y-4 border-b pb-4">
              <p className="font-semibold">12 à 15 ans :</p>
              <p>Le jeudi de 17h30 à 19h00<br/>Max 8 jeunes<br/>210€ l’année scolaire</p>
            </div>

            <div className="space-y-4 border-b pb-4">
              <p className="font-semibold">À partir de 16 ans et adultes :</p>
              <p>Le samedi après-midi ou sous forme de stage</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Cours particulier</p>
            </div>
          </div>

          {/* Image à droite */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <img
              src={coursImage}
              alt="Cours de dessin"
              className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[600px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
