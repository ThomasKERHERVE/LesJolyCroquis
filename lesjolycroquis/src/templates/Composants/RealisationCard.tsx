import { motion } from "framer-motion";

export default function RealisationCard({ image, description }: { image: string; description: string }) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 2 }}>
      <div className="break-inside-avoid mb-6 p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col gap-8 font-caveat">
        <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden max-w-md ">
          <img 
          src={image} 
          alt="Réalisation" 
          className="w-full h-auto object-cover" />
        </div>
        <div className="py-4 px-6 text-gray-700 text-lg text-center">
          {description}
        </div>
      </div>
      </motion.div>
    );
  }
  