import Header from './Composants/Header'
import Footer from './Composants/Footer'
import RealisationCard from './Composants/RealisationCard'
import { useEffect, useState } from 'react'

export default function Realisations() {
  const [realisations, setRealisations] = useState<{ image: string; description: string }[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('realisations')
    if (saved) setRealisations(JSON.parse(saved))
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1 bg-[#fefaf6] px-4 py-12">
        <h1 className="text-center text-4xl font-bold mb-10 font-caveat">Les Réalisations</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {realisations.map((r, i) => (
            <RealisationCard key={i} image={r.image} description={r.description} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
