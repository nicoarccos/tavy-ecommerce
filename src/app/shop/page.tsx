import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tienda - Tavy4x4',
  description: 'Explora nuestra colección de accesorios premium para vehículos 4x4, pickups y utilitarios',
};

// Datos de productos de ejemplo
const products = [
  {
    id: 1,
    name: 'Barra Antivuelco Premium',
    description: 'Barra antivuelco de acero inoxidable para pickup, resistente a la intemperie.',
    price: 290000.00,
    category: 'pickups',
    image: '/images/4x4/barra-negra-frontier.jpg',
    rating: 4.8,
    reviews: 12,
    featured: true,
    stock: 5,
  },
  {
    id: 2,
    name: 'Defensa Baja Acero Inoxidable',
    description: 'Defensa baja de acero inoxidable marca Bracco, tiene terminación pulido espejo cromada. Para todos los modelos de camionetas.',
    price: 320000.00,
    category: '4x4',
    image: '/images/4x4/defensa-baja.jpg',
    rating: 4.9,
    reviews: 28,
    featured: true,
    stock: 10,
  },
  {
    id: 3,
    name: 'Estribos Laterales Reforzados',
    description: 'Estribos laterales de aluminio con acabado antideslizante y capacidad de 250kg.',
    price: 420000.00,
    category: 'pickups',
    image: '/images/4x4/estribos-laterales.jpg',
    rating: 4.7,
    reviews: 9,
  },
  {
    id: 4,
    name: 'Faros LED Todoterreno',
    description: 'Set de faros LED de alto rendimiento para conducción nocturna off-road.',
    price: 22000.00,
    category: '4x4',
    image: '/images/4x4/faro-led-off-road.webp',
    rating: 4.6,
    reviews: 15,
  },
  {
    id: 5,
    name: 'Acople con esfera y amortiguación',
    description: 'Acople con esfera y amortiguación de color negro.',
    price: 870000.00,
    category: '4x4',
    image: '/images/4x4/acople-esfera-conamortiguacion.jpeg',
    rating: 4.9,
    reviews: 22,
  },
  {
    id: 6,
    name: 'Tapa rigida Trifold Durabox',
    description: 'Tapa fabricada en duraluminio con estructura. Seguridad para sus viajes.',
    price: 1149000.00,
    category: 'utilitarios',
    image: '/images/4x4/taparigida-trifold-durabox.jpg',
    rating: 4.5,
    reviews: 11,
    featured: false,
    stock: 3,
  },
  {
    id: 7,
    name: 'Bidón 12 Litros',
    description: 'Bidón 12 Litros Homologado.',
    price: 48000.00,
    category: '4x4',
    image: '/images/4x4/bidon12l.jpg',
    rating: 4.8,
    reviews: 19,
  },
  {
    id: 8,
    name: 'Tapa Rígida Plegable Winbo',
    description: 'Tapa rígida plegable con led marca Winbo, es fácil de montar y desmontar.',
    price: 1300000.00,
    category: 'pickups',
    image: '/images/4x4/tapa-rigida-Winbo.jpg',
    rating: 4.7,
    reviews: 8,
  },
];

// Tipos de filtrado disponibles
const categories = [
  { value: 'all', label: 'Todos' },
  { value: '4x4', label: '4x4' },
  { value: 'pickups', label: 'Pickups' },
  { value: 'utilitarios', label: 'Utilitarios' },
];

const priceRanges = [
  { value: 'all', label: 'Todos los precios' },
  { value: '0-100000', label: 'Menos de $100.000' },
  { value: '100000-200000', label: 'Entre $100.000 y $200.000' },
  { value: '200000-500000', label: 'Entre $200.000 y $500.000' },
  { value: '500000-plus', label: 'Más de $500.000' },
];

const sortOptions = [
  { value: 'relevance', label: 'Relevancia' },
  { value: 'price-low', label: 'Precio: Menor a Mayor' },
  { value: 'price-high', label: 'Precio: Mayor a Menor' },
  { value: 'rating', label: 'Por Valoración' },
  { value: 'newest', label: 'Más Recientes' },
];

export default function ShopPage() {
  // En un componente real, estos estados vendrían de useState o similar
  const selectedCategory = 'all';
  const selectedPriceRange = 'all';
  const selectedSort = 'relevance';
  const searchQuery = '';

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">Nuestra Tienda</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Encuentra los mejores accesorios para tu vehículo 4x4, pickup o utilitario con la
              calidad y garantía que solo Tavy4x4 te puede ofrecer.
            </p>
          </div>
        </div>
      </section>

      {/* Banner de productos destacados */}
      <section className="relative py-12 bg-gradient-to-r from-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Transforma Tu Vehículo</h2>
              <p className="text-lg text-blue-200 mb-6">
                Nuestros accesorios premium están diseñados para resistir los terrenos más difíciles y darle a tu vehículo el estilo que merece.
              </p>
              <Link 
                href="/shop?category=featured"
                className="inline-flex items-center text-sm font-bold bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
              >
                Ver Destacados
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative w-full md:w-96 h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="/images/ford-raptor.jpg"
                alt="Vehículo 4x4 personalizado"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                <div>
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">DESTACADO</span>
                  <h3 className="text-xl font-bold text-white mt-2">Accesorios 4x4 Premium</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filtros para pantallas grandes */}
            <div className="hidden lg:block w-64 space-y-6">
              {/* Barra de búsqueda para escritorio */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Buscar
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                    placeholder="¿Qué estás buscando?"
                    defaultValue={searchQuery}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Categorías
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.value} className="flex items-center">
                      <input
                        id={`category-${category.value}`}
                        name="category"
                        type="radio"
                        defaultChecked={category.value === selectedCategory}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                      />
                      <label
                        htmlFor={`category-${category.value}`}
                        className="ml-3 text-sm text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {category.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Precio
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.value} className="flex items-center">
                      <input
                        id={`price-${range.value}`}
                        name="price"
                        type="radio"
                        defaultChecked={range.value === selectedPriceRange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                      />
                      <label
                        htmlFor={`price-${range.value}`}
                        className="ml-3 text-sm text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="flex-1">
              {/* Opciones de filtro, búsqueda y ordenamiento */}
              <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-100 hover:shadow-md transition-all">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="lg:hidden mr-4 p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                  </button>
                  <span className="text-sm text-slate-500">Mostrando {products.length} productos</span>
                </div>

                {/* Barra de búsqueda móvil */}
                <div className="lg:hidden relative flex-1">
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white text-sm transition-all"
                    placeholder="Buscar productos..."
                    defaultValue={searchQuery}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-sm text-slate-700 mr-2">Ordenar por:</span>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-sm border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white"
                    defaultValue={selectedSort}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Grid de productos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col h-full border border-slate-100 relative">
                    {product.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-white">
                          DESTACADO
                        </span>
                      </div>
                    )}
                    {product.stock !== undefined && product.stock <= 5 && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                          ÚLTIMAS {product.stock} UNIDADES
                        </span>
                      </div>
                    )}
                    <Link href={`/shop/product/${product.id}`} className="flex-grow-0 relative">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-slate-300'
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-white">({product.reviews})</span>
                          </div>
                        </div>
                        
                        {/* Insignia de categoría */}
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white shadow-lg">
                            {product.category === '4x4' ? '4x4' : 
                             product.category === 'pickups' ? 'Pickups' : 'Utilitarios'}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="p-5 flex-grow flex flex-col">
                      <Link href={`/shop/product/${product.id}`} className="flex-grow">
                        <h3 className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">{product.name}</h3>
                        <p className="mt-1 text-sm text-slate-500 line-clamp-2 min-h-[40px]">{product.description}</p>
                      </Link>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-slate-900">${product.price.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                      </div>
                      <div className="mt-auto pt-4">
                        <button
                          type="button"
                          className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Agregar al carrito
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Paginación */}
              <div className="flex justify-center mt-12">
                <nav className="inline-flex items-center bg-white rounded-lg shadow-sm border border-slate-100 divide-x divide-slate-200 overflow-hidden">
                  <a
                    href="#"
                    className="px-3 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span className="sr-only">Anterior</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-600 text-white font-medium"
                    aria-current="page"
                  >
                    1
                  </a>
                  <a href="#" className="px-4 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors">
                    3
                  </a>
                  <span className="px-3 py-2 text-slate-400">...</span>
                  <a href="#" className="px-4 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors">
                    8
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span className="sr-only">Siguiente</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bloque "¿Necesitas ayuda?" */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white relative z-10">
                <h3 className="text-2xl font-medium mb-3">¿Necesitas ayuda?</h3>
                <p className="text-slate-300 mb-6">Nuestros expertos están listos para asesorarte en encontrar el accesorio perfecto para tu vehículo</p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
                >
                  Contactar a un asesor
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-800/20 rounded-full blur-2xl"></div>
            </div>
            
            <div className="lg:col-span-2 flex items-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full">
                <h3 className="text-2xl font-medium text-slate-900 mb-4">Productos Populares</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.filter(p => p.featured).slice(0, 2).map((product) => (
                    <Link key={product.id} href={`/shop/product/${product.id}`} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{product.name}</h4>
                        <p className="text-sm text-slate-500 line-clamp-1">{product.description}</p>
                        <span className="text-blue-600 font-semibold">${product.price.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link 
                    href="/shop?category=featured"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Ver todos los productos destacados
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section con transformación */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden relative">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-20 -right-20 animate-pulse" style={{animationDuration: '10s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto hover:bg-white/15 transition-all duration-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/30 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-lg text-slate-300 mb-6">
                Nuestro equipo de especialistas puede ayudarte a encontrar el accesorio perfecto para tu vehículo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md inline-flex items-center justify-center hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contactar Asesor
                </Link>
                <Link
                  href="/catalogo"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/20 inline-flex items-center justify-center hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 