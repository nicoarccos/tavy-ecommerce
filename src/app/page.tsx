import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/ford-raptor.jpg"
            alt="Ford Raptor Argentina"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-6xl font-bold mb-6 leading-tight">Tu Aventura Comienza Aquí</h1>
              <p className="text-xl mb-8 text-slate-200">Descubre nuestra selección premium de accesorios para 4x4, pickups y vehículos de alta gama. Calidad y rendimiento garantizados.</p>
              <div className="flex space-x-4">
                <Link
                  href="/shop"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-md"
                >
                  Explorar Catálogo
                </Link>
                <Link
                  href="/categories"
                  className="bg-slate-800/80 hover:bg-slate-700/80 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600/30 transition-colors"
                >
                  Ver Categorías
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 relative bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -bottom-20 -right-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Categorías Destacadas</h2>
            <p className="text-lg text-slate-300">Encuentra los accesorios perfectos para tu vehículo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: '4x4',
                description: 'Accesorios para todoterrenos',
                image: '/images/amarok.jpg'
              },
              {
                name: 'Pickups',
                description: 'Todo para tu camioneta',
                image: '/images/strada.jpg'
              },
              {
                name: 'SUV',
                description: 'Accesorios para SUVs',
                image: '/images/10.jpg'
              },
              {
                name: 'Hatchback',
                description: 'Accesorios para autos compactos',
                image: '/images/golf.png'
              }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
                className="group relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900"
              >
                <Image 
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-between p-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md group-hover:translate-x-1 transition-transform">{category.name}</h3>
                    <p className="text-slate-100 text-lg drop-shadow group-hover:translate-x-1 transition-transform duration-300">{category.description}</p>
                    <div className="mt-4 inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors">
                      <span>Ver productos</span>
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-slate-900">Calidad Premium</h3>
              <p className="text-slate-600 text-center">Productos de alta calidad con garantía de satisfacción y durabilidad</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-slate-900">Envío Rápido</h3>
              <p className="text-slate-600 text-center">Entrega rápida y segura en todo el país con seguimiento en tiempo real</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-slate-900">Soporte 24/7</h3>
              <p className="text-slate-600 text-center">Asesoramiento técnico y atención al cliente disponible todo el día</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Mejorar tu Vehículo?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Únete a nuestra comunidad y descubre las mejores ofertas en accesorios premium para tu vehículo</p>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-md inline-block"
          >
            Crear Cuenta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
