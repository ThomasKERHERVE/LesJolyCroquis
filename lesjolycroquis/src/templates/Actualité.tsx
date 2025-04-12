import Header from './Composants/Header'
import Footer from './Composants/Footer'
import image from '../assets/images/Désert.jpg'

// Année scolaire dynamique
const today = new Date()
const currentYear = today.getFullYear()
const currentMonth = today.getMonth() + 1

const startYear = currentMonth >= 9 ? currentYear : currentYear - 1
const endYear = startYear + 1

// Trouver le lundi de la 3ᵉ semaine complète de septembre
function getWeekStart(year: number, targetWeek: number) {
  const september = new Date(year, 8, 1) // Mois 8 = septembre
  let day = september.getDay()
  let offset = (day === 0 ? 1 : 8 - day) // Décale au lundi suivant si le 1er n'est pas un lundi

  // Premier lundi complet
  const firstMonday = new Date(year, 8, 1 + offset)

  // Lundi de la nᵉ semaine complète
  const monday = new Date(firstMonday)
  monday.setDate(monday.getDate() + (targetWeek - 1) * 7)
  return monday
}

// Lundi de la 3ᵉ semaine complète de septembre
const mondayOfThirdWeek = getWeekStart(startYear, 3)

// Jeudi & Vendredi de cette semaine
const thursday = new Date(mondayOfThirdWeek)
thursday.setDate(thursday.getDate() + 3)

const friday = new Date(mondayOfThirdWeek)
friday.setDate(friday.getDate() + 4)



const formatDate = (date: Date) =>
  `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} à ${date.getDay() === 4 ? '17h30' : '16h30'}`

export default function Actu() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col gap-8 font-caveat">
          
          {/* Image */}
          <div className="w-full rounded-2xl border-4 border-[#e0d6cb] shadow-lg overflow-hidden">
            <img
              src={image}
              alt="Atelier de dessin"
              className="object-cover w-full max-h-[800px]"
            />
          </div>

          {/* Texte */}
          <div className="w-full text-gray-800 text-xl space-y-6">
            <h1 className="text-center text-3xl font-bold text-gray-800">L'Actualité</h1>

            <p className="text-center text-2xl font-semibold">
              Saison {startYear}-{endYear}
            </p>

            <div className="text-center space-y-2">
              <p>Reprise des cours pour :</p>
              <ul className="list-disc list-inside">
                <li>Les 8-10 ans : {formatDate(friday)}</li>
                <li>Les 12-14 ans : {formatDate(thursday)}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
