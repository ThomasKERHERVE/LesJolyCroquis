import { useState } from 'react'
import Header from './Composants/Header'
import Footer from './Composants/Footer'

export default function AdminRealisations() {
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const previous = JSON.parse(localStorage.getItem('realisations') || '[]')
    const updated = [...previous, { image, description }]
    localStorage.setItem('realisations', JSON.stringify(updated))
    setImage('')
    setDescription('')
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1 bg-[#f0f9ff] px-4 py-12">
        <h1 className="text-center text-3xl font-bold mb-8">Ajouter une Réalisation</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-2xl border-4 border-[#e0d6cb] shadow-md">
          <div>
            <label className="block mb-2 text-lg">Image (lien URL ou base64) :</label>
            <input
              type="text"
              value={image}
              onChange={e => setImage(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg">Description :</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-[#e0d6cb] px-4 py-2 rounded shadow-md hover:bg-[#d5c4b8]">
            Ajouter
          </button>
          {saved && <p className="text-green-600 mt-2">Réalisation ajoutée !</p>}
        </form>
      </section>
      <Footer />
    </div>
  )
}
