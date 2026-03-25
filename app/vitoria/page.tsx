import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ChevronRight, Star, ExternalLink, ArrowRight, Building } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"
import AnimatedBackground from "@/components/animated-background"
// Substituir a importação de BrandCard por BrandCarousel
import BrandCarousel from "@/components/brand-carousel"
import TestimonialCarousel from "@/components/testimonial-carousel"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppLink from "@/components/whatsapp-link"
import NavLink from "@/components/nav-link"

// Atualizar os testimonials para incluir rating
const testimonials = [
  {
    id: 1,
    name: "Wesliey Barreto",
    role: "Cliente",
    content:
      "Excelência no atendimento, variedades, ambiente ótimo. Os atendentes são muito prestativos e rápidos. O rapaz da expedição me ajudou a pôr a lata de 18L na moto. Recomendo ir comprar lá.",
    rating: 5,
  },
  {
    id: 2,
    name: "toni novaes",
    role: "Local Guide",
    content: "A experiência não poderia ser melhor! Fui muito bem atendido! Estão de parabéns!",
    rating: 5,
  },
  {
    id: 3,
    name: "Lorran Oski",
    role: "Local Guide",
    content:
      "Que atendimento perfeito, o Clóvis vendedor foi super atencioso, estava junto a minha esposa e o mesmo nos ajudou as escolhas e tirou nossas dúvidas sem contar no desconto e preços que são muito bom.",
    rating: 5,
  },
  {
    id: 4,
    name: "Geraldo Cruz",
    role: "Local Guide",
    content:
      "Loja de tintas localizada na Leitão da Silva, estacionamento fácil em frente, grande variedade de tintas atendimento especializado recomendo com certeza",
    rating: 5,
  },
  {
    id: 5,
    name: "Denison Rodrigues",
    role: "Local Guide",
    content: "Excelente atendimento, e estão dispostos a cobrir orçamentos, além de muita variedade de produtos",
    rating: 5,
  },
  {
    id: 6,
    name: "Djair Souza",
    role: "Local Guide",
    content: "Ótimas opções de tintas e cores, e atendimento muito bom. O cafézinho é ótimo.",
    rating: 5,
  },
]

// Adicionar a lista de marcas:

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

export default function VitoriaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="27 99298-4038" store="vitoria" />

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
            src="/images/fachada-eletrotintas-vitoria.png"
            alt="ELETROMIL Vitória"
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
                Bem-vindo à Eletrotintas Vitória
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tudo para seu projeto em um só{" "}
                <span className="text-yellow-300 relative">
                  LUGAR!
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300/70"></span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-light text-gray-200">
                Na ELETROTINTAS de Vitória, você encontra a linha completa de materiais elétricos e as melhores tintas
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
                  src="/images/fachada-eletrotintas-vitoria.png"
                  alt="Fachada ELETROTINTAS Vitória"
                  fill
                  className="object-cover"
                />
              </div>

              <WhatsAppLink
                href="https://wa.me/5527992984038"
                store="vitoria"
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-20 animate-float flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Visite Nossa Loja!
              </WhatsAppLink>
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
              da região. Confira nossos produtos mais vendidos na loja de Vitória!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:grid-rows-2">
            {/* Product Card 1 - Sherwin Williams NovaCor Piso */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-100">
              <div className="p-6">
                <Image
                  src="/images/sherwin-williams-novacor-piso.webp"
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
                  Tinta acrílica premium para pisos com alta resistência e durabilidade. Ideal para áreas internas e
                  externas.
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

            {/* Product Card 2 - Alessi Textura */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-200">
              <div className="p-6">
                <Image
                  src="/images/alessi-textura.webp"
                  alt="Alessi Textura Acrílica"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Alessi Textura Acrílica</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Tintas
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Massa texturizada para efeitos decorativos em paredes internas e externas. Alto rendimento e fácil
                  aplicação.
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

            {/* Product Card 3 - Montana Osmocolor */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-300">
              <div className="p-6">
                <Image
                  src="/images/montana-osmocolor.jpeg"
                  alt="Montana Osmocolor Stain"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Montana Osmocolor Stain</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Vernizes
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Stain preservativo para madeiras que protege contra intempéries, raios UV e fungos. Realça a beleza
                  natural da madeira.
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

            {/* Product Card 4 - Renner RekolorPró */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-100 lg:col-start-1">
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100">
                <Image
                  src="/images/renner-rekolorpro.jpeg"
                  alt="Renner RekolorPró Acrílico Premium"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Renner RekolorPró Premium</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Tintas
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Tinta acrílica premium com acabamento semibrilho, alta resistência e cobertura. Ideal para áreas
                  litorâneas.
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

            {/* Product Card 5 - Crakgon PR10 */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden card-hover animate-fade-in animate-delay-200 lg:col-start-2">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                <Image
                  src="/images/crakgon-pr10.png"
                  alt="Crakgon PR10 Reforçador de Pintura"
                  width={300}
                  height={300}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Crakgon PR10 Reforçador</h3>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Acessórios
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Reforçador de pintura que previne trincas e fissuras. Ideal para áreas com dilatação térmica e
                  movimentação.
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
              Confira os depoimentos reais de clientes que confiam na ELETROMIL para seus projetos.
            </p>
          </div>

          <div className="h-[500px] mx-auto max-w-3xl">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Grupo Eletromil Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 animate-fade-in">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Somos uma empresa do <span className="text-blue-600">Grupo Eletromil</span>
                </h2>
              </div>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                A Eletrotintas faz parte do Grupo Eletromil, referência em materiais elétricos e tintas no Espírito
                Santo há mais de 20 anos. Com a força e tradição do Grupo Eletromil, oferecemos produtos de qualidade,
                preços competitivos e o melhor atendimento.
              </p>
              <div className="flex items-center">
                <div className="flex items-center mr-8">
                  <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Tradição</p>
                    <p className="text-sm text-gray-600">+20 anos no mercado</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Presença</p>
                    <p className="text-sm text-gray-600">Lojas em todo o ES</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in animate-delay-100">
              <div className="relative p-6 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src="/images/logo-eletromil.png"
                  alt="Grupo Eletromil"
                  width={400}
                  height={150}
                  className="object-contain"
                />
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-lg shadow-lg">
                  Grupo Eletromil
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa <span className="text-blue-600">Localização</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Visite nossa loja em Vitória e conheça nosso showroom completo de materiais elétricos e tintas.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Column - Map */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full animate-fade-in animate-delay-100 transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+Leit%C3%A3o+da+Silva%2C+1451%2C+Vit%C3%B3ria%2C+ES%2C+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="600"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[500px]"
                ></iframe>
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://goo.gl/maps/JZQm8zVfgH8ZQnSS6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <ExternalLink className="h-5 w-5" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>

            {/* Right Column - Store Info */}
            <div className="lg:w-1/2 flex flex-col space-y-8">
              {/* Store Image */}
              <div className="overflow-hidden rounded-2xl shadow-2xl animate-fade-in animate-delay-200 group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/fachada-eletrotintas-vitoria.png"
                    alt="Fachada ELETROTINTAS Vitória"
                    fill
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Eletrotintas Vitória</h3>
                    <p className="text-white/90">Sua loja completa de materiais elétricos e tintas</p>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl animate-fade-in animate-delay-300 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </span>
                  Informações de Contato
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Endereço:</p>
                      <Link href="#localizacao" className="text-gray-700 text-lg hover:text-gray-900 transition-colors">
                        Av. Leitão da Silva, 1451, lj. 1 - Vitória - ES
                      </Link>
                      <p className="text-gray-500 text-sm mt-1">CEP: 29.046-010</p>
                    </div>
                  </div>

                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Telefone:</p>
                      <Link
                        href="tel:2733353300"
                        className="text-gray-700 text-lg hover:text-gray-900 transition-colors"
                      >
                        (27) 3335-3300
                      </Link>
                      <p className="text-gray-500 text-sm mt-1">Atendimento comercial</p>
                    </div>
                  </div>

                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">E-mail:</p>
                      <Link
                        href="mailto:contato@eletrotintas.com.br"
                        className="text-gray-700 text-lg hover:text-gray-900 transition-colors"
                      >
                        contato@eletrotintas.com.br
                      </Link>
                      <p className="text-gray-500 text-sm mt-1">Vendas e orçamentos</p>
                    </div>
                  </div>

                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Horário de Funcionamento:</p>
                      <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-700">Sábado: 8h às 12h</p>
                      <p className="text-gray-500 text-sm mt-1">Domingos e feriados: fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar seu projeto?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visite nossa loja ou entre em contato conosco para obter os melhores produtos e o melhor atendimento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#localizacao"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Como Chegar
            </Link>
            <Link
              href="tel:2733353300"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ligar Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <p className="text-gray-300 mr-2 font-semibold">ELETROTINTAS - do Grupo</p>
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
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
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
                    Av. Leitão da Silva, 1451, lj. 1 - Vitória - ES
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

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}
