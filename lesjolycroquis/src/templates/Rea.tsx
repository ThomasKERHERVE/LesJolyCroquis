import Header from './Composants/Header'
import Footer from './Composants/Footer'

export default function Rea() {
    return (
        <div className="flex flex-col min-h-screen">
              <Header/>
              <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
                <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col md:flex-row gap-8 font-caveat">

                </div>
              </section>
              <Footer/>
        </div>
    )
}