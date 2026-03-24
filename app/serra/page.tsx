import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Star, ArrowRight, ChevronRight } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import BrandCarousel from "@/components/brand-carousel"
import TestimonialCarousel from "@/components/testimonial-carousel"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"
import NavLink from "@/components/nav-link"

// Atualizar os testimonials para incluir rating
const testimonials = [
  {
    id: 1,
    name: "Maria Sônia Silva",
    role: "Cliente",
    content:
      "Excelente atendimento e preço justo! Cumpriu a entrega de acordo com o combinado. Parabéns pelo atendimento do vendedor Wellington.",
    rating: 5,
  },
  {
    id: 2,
    name: "Denilson dos santos",
    role: "Local Guide",
    content: "Loja climatizada e atendimento espetacular, produtos para sua necessidades, gostei muito.",
    rating: 5,
  },
  {
    id: 3,
    name: "Erick silva",
    role: "Local Guide",
    content:
      "Comprei alguns materiais lá. Fui muito bem atendido por todos: vendedor, caixa, expedição, todos prestam um ótimo serviço.",
    rating: 5,
  },
  {
    id: 4,
    name: "Thaina Santos",
    role: "Local Guide",
    content:
      "Fui muito bem atendida, profissionais dedicados a te vender somente o que você precisa e não é aquele tipo de local que você vai e os vendedores vão te empurrando um monte de coisas desnecessárias.",
    rating: 4,
  },
  {
    id: 5,
    name: "Debora Passos",
    role: "Local Guide",
    content:
      "Fui comprar cabos elétricos pq lá também é eletromil, gostei do atendimento, ambiente sempre que eu precisar irei lá.",
    rating: 5,
  },
  {
    id: 6,
    name: "raul weber",
    role: "Local Guide",
    content: "Tintas e material elétrico com preços competitivos e de ótima qualidade",
    rating: 5,
  },
]

const brands = [
  {
    name: "Coral",
    logo: "/images/coral-240x160.png",
    description: "Líder em tintas decorativas e de alta performance",
  },
  {
    name: "Suvinil",
    logo: "/images/suvinil-240x160.png",
    description: "Referência em tintas premium para ambientes internos e externos",
  },
  {
    name: "Argalit",
    logo: "/images/argalit-240x160.png",
    description: "Qualidade além das cores para todos os tipos de projetos",
  },
  {
    name: "Sherwin Williams",
    logo: "/images/sherwin_willians-240x160.png",
    description: "Soluções em tintas para todos os tipos de superfícies",
  },
  {
    name: "Atlas",
    logo: "/images/logo-atlas.png",
    description: "Ferramentas e acessórios de alta qualidade para pintura",
  },
  {
    name: "Andaluz",
    logo: "/images/logo-andaluz.png",
    description: "Especialista em materiais elétricos e acessórios",
  },
  {
    name: "Anjo Tintas",
    logo: "/images/logo-anjo.png",
    description: "Tintas e vernizes de alta tecnologia e durabilidade",
  },
  {
    name: "Tigre",
    logo: "/images/logo-tigre.png",
    description: "Líder em tubos, conexões e acessórios para construção",
  },
  {
    name: "Corfio",
    logo: "/images/logo-corfio.jpeg",
    description: "Excelência em fios e cabos elétricos",
  },
  {
    name: "Chint",
    logo: "/images/logo-chint.png",
    description: "Produtos elétricos de alta qualidade e segurança",
  },
  {
    name: "Alessi",
    logo: "/images/logo-alessi.png",
    description: "Tintas e texturas com cores que fazem história",
  },
  {
    name: "Renner",
    logo: "/images/logo-renner.png",
    description: "Tintas premium para proteção e beleza",
  },
]

export default function SerraPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="27 99273-9913" store="serra" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/pagina-inicial">
              <Image
                src="/images/logo-eletrotintas.png"
                alt="Eletrotintas"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#inicio">Início</NavLink>
            <NavLink href="#produtos">Produtos</NavLink>
            <NavLink href="#marcas">Marcas</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <NavLink href="#localizacao">Localização</NavLink>
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fachada-eletrotintas-serra.png"
            alt="ELETROMIL Serra"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/70"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in text-white pr-4 md:pr-12">
              <div className="inline-block px-4 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-300 font-semibold mb-4 border border-yellow-500/30">
                Bem-vindo à Eletrotintas Serra
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tudo para seu projeto em um só{" "}
                <span className="text-yellow-300 relative">
                  LUGAR!
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300/70"></span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-light text-gray-200">
                Na ELETROTINTAS de Serra, você encontra a linha completa de materiais elétricos e as melhores tintas
                para projetos residenciais, comerciais e industriais.
              </p>

              <div className="pt-6 flex flex-wrap gap-6">
                <Link
                  href="#produtos"
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-red-500/30 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Conheça Nossos Produtos
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Link>

                <Link
                  href="#localizacao"
                  className="group relative overflow-hidden rounded-lg bg-transparent px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-white/20 hover:shadow-xl border border-white/30 backdrop-blur-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Como Chegar
                    <MapPin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                    <Clock className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Experiência</p>
                    <p className="font-bold text-white">+20 anos</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                    <Phone className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Contato</p>
                    <p className="font-bold text-white">(27) 3335-3300</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] hidden md:block animate-fade-in animate-delay-200">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 animate-pulse-slow"></div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/40 to-blue-400/20 rounded-2xl backdrop-blur-sm rotate-6 transform-gpu"></div>

              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-600/40 to-red-400/20 rounded-2xl backdrop-blur-sm -rotate-6 transform-gpu"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/fachada-eletrotintas-serra.png"
                  alt="ELETROMIL Serra"
                  fill
                  className="object-cover"
                />
              </div>

              <a
                href="https://wa.me/5527992739913"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-20 animate-float flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Visite Nossa Loja!
              </a>
            </div>
          </div>
        </div>

        {/* Novo degradê responsivo */}
        <div
          className="absolute bottom-0 left-0 right-0 w-full"
          style={{ height: "150px", background: "linear-gradient(to top, white, transparent)" }}
        ></div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Produtos <span className="text-blue-600">Campeões</span> de Vendas
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              ELETROTINTAS é referência em materiais elétricos e tintas, com os itens mais escolhidos por profissionais
              da região. Tudo para o seu projeto!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 - NovaCor Piso Premium */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-100">
              <div className="p-6">
                <Image
                  src="/images/novacor-piso-premium.webp"
                  alt="Sherwin Williams NovaCor Piso Premium"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">NovaCor Piso Premium</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Tintas
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Tinta acrílica premium para pisos internos e externos com acabamento fosco e alta resistência.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 2 - Metalatex Super Lavável */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-200">
              <div className="p-6">
                <Image
                  src="/images/metalatex-super-lavavel-transparente.png"
                  alt="Sherwin Williams Metalatex Super Lavável"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Metalatex Super Lavável</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Tintas
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Tinta acrílica premium com acabamento fosco e fórmula sem cheiro para ambientes internos e externos.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 3 - Suvinil Toque Fosco */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-300">
              <div className="p-6">
                <Image
                  src="/images/suvinil-toque-fosco.png"
                  alt="Suvinil Toque Fosco Completo"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Suvinil Toque Fosco</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Tintas
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Tinta acrílica premium com acabamento fosco impecável, super liso e uniforme para ambientes internos e
                  externos.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 4 - Disjuntores WEG */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-100">
              <div className="p-6">
                <Image
                  src="/images/disjuntores-weg.png"
                  alt="Disjuntores WEG"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Disjuntores WEG</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Elétrica
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Disjuntores de alta qualidade para proteção de circuitos elétricos residenciais e comerciais.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 5 - Fios Corfio Flex */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-200">
              <div className="p-6">
                <Image
                  src="/images/fios-corfio-flex.png"
                  alt="Fios Corfio Flex"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Fios Corfio Flex</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Elétrica
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Cabos flexíveis antichama de alta qualidade para instalações elétricas seguras e duráveis.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 6 - Lumax Painel Slim */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-300">
              <div className="p-6">
                <Image
                  src="/images/lumax-painel-slim.png"
                  alt="Lumax Painel Slim"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Lumax Painel Slim 18W</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Iluminação
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Painel LED slim de embutir com 18W, disponível em formatos redondo e quadrado com diferentes
                  temperaturas de cor.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="marcas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossas <span className="text-blue-600">Marcas</span> Parceiras
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as melhores marcas do mercado para garantir qualidade e durabilidade em todos os nossos
              produtos. Confira algumas das marcas disponíveis em nossa loja.
            </p>
          </div>

          <BrandCarousel brands={brands} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              O Que <span className="text-blue-600">Dizem</span> Nossos Clientes
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Confira os depoimentos reais de clientes que confiam na ELETROTINTAS para seus projetos.
            </p>
          </div>

          <div className="h-[500px] mx-auto max-w-3xl">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Onde Nos <span className="text-blue-600">Encontrar</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos localizados em Serra, Espírito Santo, prontos para atender você com os melhores produtos e
              serviços. Venha nos visitar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="shadow-lg rounded-xl overflow-hidden animate-fade-in">
              <iframe
                src="https://maps.google.com/maps?q=Av.+Des.+M%C3%A1rio+da+Silva+Nunes%2C+88%2C+Jardim+Limoeiro%2C+Serra%2C+ES%2C+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 animate-fade-in animate-delay-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Av. Des. Mário da Silva Nunes, 88 - Jardim Limoeiro, Serra - ES</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">Telefone</h4>
                  <p className="text-gray-600">(27) 3335-3300</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>

              <Link
                href="tel:2732212866"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-green-500/30 hover:shadow-xl inline-block mt-8"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ligar Agora
                  <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <span className="absolute inset-0 z-0 bg-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
              <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl animate-fade-in animate-delay-200 group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/fachada-eletrotintas-serra.png"
                    alt="Fachada ELETROTINTAS Serra"
                    fill
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Eletrotintas Serra</h3>
                    <p className="text-white/90">Sua loja completa de materiais elétricos e tintas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <p className="text-gray-300 mr-2 font-semibold">ELETROTINTAS - Parte do Grupo</p>
                <Image
                  src="/images/logo-eletromil.png"
                  alt="Grupo Eletromil"
                  width={140}
                  height={50}
                  className="h-10 w-auto p-1"
                />
              </div>
              <p className="text-gray-300">
                Referência em materiais elétricos e tintas no Espírito Santo há mais de 20 anos.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full transition duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"></path>
                  </svg>
                </Link>
                <Link href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 pb-2 border-b border-gray-700">Produtos</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#produtos" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Materiais Elétricos
                  </Link>
                </li>
                <li>
                  <Link href="#produtos" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Tintas
                  </Link>
                </li>
                <li>
                  <Link href="#produtos" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Iluminação
                  </Link>
                </li>
                <li>
                  <Link href="#produtos" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Ferramentas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 pb-2 border-b border-gray-700">Institucional</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/pagina-inicial"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" /> Nossas Lojas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#depoimentos"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" /> Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#marcas" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Marcas Parceiras
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 pb-2 border-b border-gray-700">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <Link href="#localizacao" className="text-gray-300 hover:text-white transition-colors">
                    Av. Des. Mário da Silva Nunes, 88 - Jardim Limoeiro, Serra - ES
                  </Link>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-3" />
                  <Link href="tel:2733353300" className="text-gray-300 hover:text-white transition-colors">
                    (27) 3335-3300
                  </Link>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-3" />
                  <Link
                    href="mailto:contato@eletrotintas.com.br"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contato@eletrotintas.com.br
                  </Link>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-300">Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} ELETROMIL. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  )
}
