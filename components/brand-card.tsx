import Image from "next/image"

interface BrandCardProps {
  name: string
  logo: string
  description: string
}

export default function BrandCard({ name, logo, description }: BrandCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-2">
      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 mb-4 flex items-center justify-center">
          <Image
            src={logo || "/placeholder.svg"}
            alt={name}
            width={128}
            height={128}
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  )
}
