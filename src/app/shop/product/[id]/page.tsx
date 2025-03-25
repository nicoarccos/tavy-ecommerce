import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Datos de productos de ejemplo (en un caso real estarían en una base de datos o API)
const products = [
  {
    id: 1,
    name: 'Barra Antivuelco Premium',
    description: 'Barra antivuelco de acero inoxidable para pickup, resistente a la intemperie. Proporciona protección adicional en caso de volcadura y añade un aspecto robusto a tu vehículo. Fabricada con materiales de alta calidad para asegurar durabilidad y resistencia.',
    price: 290000.00,
    category: 'pickups',
    image: '/images/4x4/barra-negra-frontier.jpg',
    rating: 4.8,
    reviews: 12,
    stock: 15,
    features: [
      'Fabricada en acero inoxidable de alta resistencia',
      'Tratamiento anticorrosión para mayor durabilidad',
      'Diseño aerodinámico de bajo impacto en el consumo',
      'Incluye kit completo de instalación',
      'Compatible con la mayoría de modelos de pickups',
    ],
    specifications: {
      material: 'Acero inoxidable',
      finish: 'Pulido',
      weight: '45 kg',
      dimensions: '150 x 85 x 75 cm',
      warranty: '2 años',
    },
    relatedProducts: [2, 3, 7],
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
    stock: 8,
    features: [
      'Elevación de 5cm para mayor altura libre al suelo',
      'Amortiguadores reforzados de doble tubo',
      'Muelles helicoidales de alta resistencia',
      'Mejora la capacidad de todoterreno',
      'Instalación compatible con sistemas electrónicos originales',
    ],
    specifications: {
      material: 'Acero aleado',
      finish: 'Recubrimiento anti-corrosión',
      weight: '32 kg',
      liftHeight: '5 cm',
      warranty: '3 años o 60,000 km',
    },
    relatedProducts: [1, 5, 7],
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
    stock: 21,
    features: [
      'Fabricados en aluminio de alta resistencia',
      'Estribos reforzados planos de aluminio. Los más elegantes del mercado.'
    ],
    specifications: {
      material: 'Aluminio reforzado',
      finish: 'Negro texturizado',
      weight: '18 kg por par',
      dimensions: '180 x 25 cm por lado',
      warranty: '2 años',
    },
    relatedProducts: [1, 4, 6],
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
    stock: 32,
    features: [
      'Tecnología LED de última generación',
      'Resistentes al agua y al polvo (IP67)',
      'Bajo consumo de energía',
      'Haz de luz de largo alcance',
      'Incluye arnés de cableado y relé',
    ],
    specifications: {
      potencia: '120W',
      voltaje: '12-24V',
      lúmenes: '12000lm',
      temperatura: '6000K',
      warranty: '1 año',
    },
    relatedProducts: [3, 5, 7],
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
    stock: 11,
    features: [
      'Acople esfera con amortiguación, superficie color negro mate, diámetro del bástago de la bocha 30m, la bocha es de 2 pulgadas, el tornillo es de 3/4, ancho y alto 50mm.'
    ],
    specifications: {
      material: 'Polietileno UV resistente',
      finish: 'Negro mate',
      diameter: '3.5 pulgadas',
      compatibility: 'Múltiples modelos 4x4',
      warranty: '2 años',
    },
    relatedProducts: [2, 4, 7],
  },
  {
    id: 6,
    name: 'Tapa rigida Trifold Durabox',
    description: 'Tapa fabricada en duraluminio con estructura. Seguridad para sus viajes.',
    price: 1149000.00,
    category: 'utilitarios',
    image: '/images/4x4/tapa-rigida-Winbo.jpg',
    rating: 4.5,
    reviews: 11,
    stock: 14,
    features: [
      'Estructura de acero con tratamiento anticorrosión',
      'Perfil bajo para reducir la resistencia al viento.'
    ],
    specifications: {
      material: 'Acero con recubrimiento epóxico',
      finish: 'Negro',
      weight: '12 kg',
      dimensions: '120 x 100 cm',
      warranty: '3 años',
    },
    relatedProducts: [1, 3, 8],
  },
  {
    id: 7,
    name: 'Bidón 12 Litros',
    description: 'Bidón 12 Litros Homologado.',
    price: 48.000,
    category: '4x4',
    image: '/images/4x4/bidon12l.jpg',
    rating: 4.8,
    reviews: 19,
    stock: 6,
    features: [
      'Capacidad de tracción de 12000 libras (5443 kg)',
      'Motor series-wound de alto rendimiento',
      'Control remoto inalámbrico incluido',
      'Freno automático para mayor seguridad',
      'Diseño sellado resistente al agua (IP67)',
    ],
    specifications: {
      capacity: '12000 lbs / 5443 kg',
      motor: '6.0 HP Series Wound',
      gearRatio: '218:1',
      ropeSize: '9.5mm x 26m',
      warranty: '5 años (mecánica) / 1 año (eléctrica)',
    },
    relatedProducts: [2, 4, 5],
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
    stock: 27,
    features: [
      'Fabricada en materiales de alta resistencia',
      'Protege la carga de la intemperie y robos',
      'Sistema de cierre seguro con llave',
      'Fácil instalación sin necesidad de perforaciones',
      'Diseño aerodinámico que reduce el consumo de combustible',
    ],
    specifications: {
      material: 'ABS de alta resistencia',
      thickness: '4mm',
      weight: '25 kg',
      compatibility: 'Múltiples modelos de pickups',
      warranty: '3 años',
    },
    relatedProducts: [1, 3, 6],
  },
];

// Esta sería normalmente una función de generación dinámica en Next.js
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // En un caso real, obtendríamos los datos del producto de una API o base de datos
  const product = products.find((p) => p.id === parseInt(params.id));

  return {
    title: product ? `${product.name} - Tavy4x4` : 'Producto - Tavy4x4',
    description: product?.description || 'Detalle de producto en Tavy4x4, accesorios premium para vehículos',
  };
}

// Definimos un tipo para nuestros productos para ayudar a TypeScript
type Product = typeof products[0];

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Producto no encontrado</h1>
          <p className="text-slate-600 mb-8">
            Lo sentimos, el producto que estás buscando no existe o ha sido removido.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = product.relatedProducts
    ? product.relatedProducts
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is Product => p !== undefined)
    : [];

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Migas de pan */}
        <nav className="flex mb-8 text-sm text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-blue-600 transition-colors">
            Tienda
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-blue-600 transition-colors"
          >
            {product.category === '4x4'
              ? '4x4'
              : product.category === 'pickups'
              ? 'Pickups'
              : 'Utilitarios'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-400">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Imagen del producto */}
          <div>
            <div className="relative h-[500px] overflow-hidden rounded-xl shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain bg-white p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Información del producto */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-800 mr-2">
                  {product.category === '4x4'
                    ? '4x4'
                    : product.category === 'pickups'
                    ? 'Pickups'
                    : 'Utilitarios'}
                </span>
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
                  <span className="ml-2 text-sm text-slate-600">{product.reviews} reseñas</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
              <p className="text-lg text-slate-700 mb-6">{product.description}</p>

              <div className="flex items-center mb-8">
                <span className="text-3xl font-bold text-slate-900">${product.price.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                <span className="ml-4 text-sm text-slate-500 line-through">
                  ${(product.price * 1.2).toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
                <span className="ml-2 text-sm text-green-600">20% descuento</span>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.stock > 10
                        ? 'bg-green-100 text-green-800'
                        : product.stock > 0
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.stock > 10
                      ? `En stock (${product.stock} disponibles)`
                      : product.stock > 0
                      ? `¡Apresúrate! Solo quedan ${product.stock}`
                      : 'Agotado temporalmente'}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32">
                    <label htmlFor="quantity" className="sr-only">
                      Cantidad
                    </label>
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        className="w-10 h-10 rounded-l-lg bg-slate-100 flex items-center justify-center border border-r-0 border-slate-300 text-slate-600 hover:bg-slate-200"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        id="quantity"
                        className="w-full h-10 border-y border-slate-300 text-center text-slate-900 text-sm focus:outline-none"
                        min="1"
                        max={product.stock}
                        defaultValue="1"
                      />
                      <button
                        type="button"
                        className="w-10 h-10 rounded-r-lg bg-slate-100 flex items-center justify-center border border-l-0 border-slate-300 text-slate-600 hover:bg-slate-200"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    disabled={product.stock <= 0}
                  >
                    Agregar al carrito
                  </button>

                  <button
                    type="button"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                    disabled={product.stock <= 0}
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Características</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pestañas de detalles, especificaciones y reseñas */}
        <div className="mb-16">
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8">
              {['Detalles', 'Especificaciones', 'Reseñas'].map((tab, index) => (
                <button
                  key={index}
                  className={`py-4 px-1 text-sm font-medium border-b-2 ${
                    index === 0
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Detalle del producto</h3>
            <div className="prose prose-slate max-w-none">
              <p>
                {product.description} Nuestros productos están diseñados para maximizar el rendimiento y durabilidad en 
                condiciones extremas, asegurando la mejor experiencia para los amantes del offroad y aventuras.
              </p>
              <p>
                Todos nuestros productos cuentan con garantía directa del fabricante y soporte técnico especializado. 
                La instalación puede realizarse en nuestros centros autorizados o por cuenta propia siguiendo el manual 
                incluido.
              </p>
              <h4>Especificaciones técnicas:</h4>
              <ul>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <div key={related.id} className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                  <Link href={`/shop/product/${related.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{related.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-slate-900">${related.price.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-slate-600">{related.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 