import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Building, ArrowRight, CheckCircle2, Target, Award, ChevronRight } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/100 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo-eletrotintas.png"
              alt="Eletrotintas"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/cariacica#inicio"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Cariacica
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/serra#inicio"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Serra
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/vila-velha#inicio"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Vila Velha
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/vitoria#inicio"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              Vitória
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
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
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/2 w-80 h-80 bg-yellow-500 opacity-10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 font-semibold mb-6 border border-blue-500/30 animate-fade-in">
              Mais de 3 décadas de excelência
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Bem-vindo à{" "}
              <span className="text-yellow-300 relative inline-block">
                Eletrotintas
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300/70"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Sinônimo de inovação e qualidade em tintas e revestimentos no mercado capixaba. Escolha a loja mais
              próxima de você e conheça nossos produtos e serviços.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {/* Cariacica Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20 group">
                <div className="relative h-48">
                  <Image
                    src="/images/fachada-eletrotintas-cariacica.png"
                    alt="Eletrotintas Cariacica"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">Cariacica</h3>
                  </div>
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-start mb-3">
                    <MapPin className="h-5 w-5 text-yellow-300 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-100 text-sm">Av. Mário Gurgel, 4640 - Vila Capixaba</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-yellow-300 mr-2 flex-shrink-0" />
                    <p className="text-gray-200 text-sm">(27) 3045-9555</p>
                  </div>
                  <Link
                    href="/cariacica"
                    className="mt-4 flex items-center justify-center w-full bg-blue-600/80 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>Visitar Loja</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Serra Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20 group">
                <div className="relative h-48">
                  <Image
                    src="/images/fachada-eletrotintas-serra.png"
                    alt="Eletrotintas Serra"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">Serra</h3>
                  </div>
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-start mb-3">
                    <MapPin className="h-5 w-5 text-yellow-300 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-100 text-sm">Av. Des. Mário da Silva Nunes, 88 - Jardim Limoeiro</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-yellow-300 mr-2 flex-shrink-0" />
                    <p className="text-gray-200 text-sm">(27) 3335-3300</p>
                  </div>
                  <Link
                    href="/serra"
                    className="mt-4 flex items-center justify-center w-full bg-blue-600/80 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>Visitar Loja</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Vila Velha Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20 group">
                <div className="relative h-48">
                  <Image
                    src="/images/nossas-lojas-vila-velha.png"
                    alt="Eletrotintas Vila Velha"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">Vila Velha</h3>
                  </div>
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-start mb-3">
                    <MapPin className="h-5 w-5 text-yellow-300 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-100 text-sm">Rua Henrique Moscoso, 1146 - Centro</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-yellow-300 mr-2 flex-shrink-0" />
                    <p className="text-gray-200 text-sm">(27) 3320-9000</p>
                  </div>
                  <Link
                    href="/vila-velha"
                    className="mt-4 flex items-center justify-center w-full bg-blue-600/80 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>Visitar Loja</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Vitória Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/20 group">
                <div className="relative h-48">
                  <Image
                    src="/images/fachada-eletrotintas-vitoria.png"
                    alt="Eletrotintas Vitória"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">Vitória</h3>
                  </div>
                </div>
                <div className="p-5 text-white">
                  <div className="flex items-start mb-3">
                    <MapPin className="h-5 w-5 text-yellow-300 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-100 text-sm">Av. Leitão da Silva, 1451, lj. 1</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-yellow-300 mr-2 flex-shrink-0" />
                    <p className="text-gray-200 text-sm">(27) 3335-3300</p>
                  </div>
                  <Link
                    href="/vitoria"
                    className="mt-4 flex items-center justify-center w-full bg-blue-600/80 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>Visitar Loja</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 text-white"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full translate-x-1/3 translate-y-1/2 blur-3xl opacity-70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4 justify-center">
              <Building className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Sobre a <span className="text-blue-600">Eletrotintas</span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-10"></div>

            <div className="mb-16">
              <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                Com mais de 3 décadas no mercado capixaba, a Eletrotintas, nossa divisão especializada em tintas e
                revestimentos, é sinônimo de inovação e qualidade. Atendemos às necessidades de nossos clientes com um
                portfólio diversificado, garantindo as melhores soluções em tintas imobiliárias e industriais a fim de
                proporcionar para nossos clientes proteção e acabamento para os mais variados projetos.
              </p>
              <p className="text-lg text-gray-700 mb-6 text-center">
                A Eletrotintas tem sua sede em Vitória e filiais nas cidades de Vila Velha, Serra e Cariacica.
              </p>
            </div>

            <div className="mb-16 bg-gray-50 p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">NOSSA HISTÓRIA</h3>
              <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                Possuímos mais de 10 mil cores a sua disposição, através de máquinas tintométricas dos principais
                fabricantes de tintas. Além de ambiente climatizado e profissionais qualificados para a orientação na
                escolha da cor, sem custo adicional.
              </p>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                A parceria com clientes, fornecedores e profissionais confere a Eletrotintas sucesso de vendas e
                atendimento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mr-4">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">MISSÃO</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Atender com excelência, oferecendo soluções em tintas e acabamentos. Trabalhamos com transparência,
                  qualidade e agilidade, buscando sempre orientar corretamente nossos clientes e garantir sua satisfação
                  com produtos eficientes e atendimento especializado.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">VISÃO</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Ser referência no mercado de tintas e acabamentos, destacando-se pela inovação, variedade e
                  atendimento diferenciado. Queremos crescer com responsabilidade, fortalecendo a marca e conquistando a
                  confiança dos nossos clientes e parceiros.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">VALORES</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Agimos com ética, respeito e transparência. Valorizamos colaboradores, clientes e fornecedores.
                  Buscamos qualidade em tudo o que fazemos, mantendo o compromisso com a confiança, o bom atendimento e
                  o relacionamento duradouro no mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eletromil Group Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/pattern-bg.svg')" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-yellow-300 mr-3" />
              <h3 className="text-2xl font-bold">Somos uma empresa do grupo ELETROMIL</h3>
            </div>

            <p className="text-lg text-gray-100 leading-relaxed">
              A Eletrotintas é uma divisão especializada do Grupo Eletromil, referência em materiais elétricos no
              Espírito Santo. Esta parceria nos permite oferecer soluções completas para seus projetos, combinando
              qualidade em materiais elétricos e tintas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/images/pattern-bg.svg')" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white">ELETROTINTAS</h4>
              <p className="text-base text-gray-300">
                Referência em tintas e revestimentos no Espírito Santo há mais de 3 décadas.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 pb-2 border-b border-gray-700">Nossas Lojas</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/cariacica"
                    className="text-gray-200 hover:text-white transition-colors flex items-center group"
                  >
                    <MapPin className="h-4 w-4 mr-2 text-red-300 group-hover:text-red-200 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">Cariacica</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/serra"
                    className="text-gray-200 hover:text-white transition-colors flex items-center group"
                  >
                    <MapPin className="h-4 w-4 mr-2 text-red-300 group-hover:text-red-200 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">Serra</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vila-velha"
                    className="text-gray-200 hover:text-white transition-colors flex items-center group"
                  >
                    <MapPin className="h-4 w-4 mr-2 text-red-300 group-hover:text-red-200 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">Vila Velha</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vitoria#home"
                    className="text-gray-200 hover:text-white transition-colors flex items-center group"
                  >
                    <MapPin className="h-4 w-4 mr-2 text-red-300 group-hover:text-red-200 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">Vitória</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 pb-2 border-b border-gray-700">Produtos</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-200">
                  <ChevronRight className="h-4 w-4 text-blue-300 mr-2" />
                  <Link href="/cariacica#produtos" className="text-gray-200 hover:text-white transition-colors">
                    Tintas Imobiliárias
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <ChevronRight className="h-4 w-4 text-blue-300 mr-2" />
                  <Link href="/serra#produtos" className="text-gray-200 hover:text-white transition-colors">
                    Tintas Industriais
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <ChevronRight className="h-4 w-4 text-blue-300 mr-2" />
                  <Link href="/vila-velha#produtos" className="text-gray-200 hover:text-white transition-colors">
                    Revestimentos
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <ChevronRight className="h-4 w-4 text-blue-300 mr-2" />
                  <Link href="/vitoria#produtos" className="text-gray-200 hover:text-white transition-colors">
                    Acessórios para Pintura
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 pb-2 border-b border-gray-700">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3 group-hover:bg-red-500/30 transition-colors">
                    <Phone className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="text-gray-200">Central: (27) 3335-3300</span>
                </li>
                <li className="flex items-center group">
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3 group-hover:bg-red-500/30 transition-colors">
                    <Mail className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="text-gray-200">contato@eletrotintas.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Eletrotintas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton phoneNumber="27 99298-4038" store="geral" />
    </main>
  )
}
