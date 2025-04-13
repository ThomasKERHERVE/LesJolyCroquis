export default function RealisationCard({ image, description }: { image: string; description: string }) {
    return (
      <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden max-w-md">
        <img src={image} alt="Réalisation" className="w-full object-cover h-64" />
        <div className="p-4 text-gray-700 text-lg">{description}</div>
      </div>
    );
  }
  