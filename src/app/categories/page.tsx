import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categorías - Tavy4x4',
  description: 'Explora nuestras categorías de accesorios premium para 4x4, pickups y vehículos utilitarios',
};

// Datos de categorías
const categories = [
  {
    id: '4x4',
    name: '4x4',
    description: 'Accesorios específicos para vehículos todoterreno, diseñados para afrontar los terrenos más difíciles.',
    image: '/images/4x4/defensa-baja.jpg',
    subcategories: [
      { id: 'suspension', name: 'Suspensión' },
      { id: 'snorkels', name: 'Snorkels' },
      { id: 'winches', name: 'Winches' },
      { id: 'lighting', name: 'Iluminación LED' },
      { id: 'protection', name: 'Protección de bajos' },
      { id: 'extras', name: 'Accesorios off-road' }
    ]
  },
  {
    id: 'pickups',
    name: 'Pickups',
    description: 'Todo lo que necesitas para equipar tu pickup, tanto para uso profesional como recreativo.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
    subcategories: [
      { id: 'rollbars', name: 'Barras antivuelco' },
      { id: 'bedliners', name: 'Protectores de caja' },
      { id: 'steps', name: 'Estribos laterales' },
      { id: 'covers', name: 'Lonas y cubiertas' },
      { id: 'cargo', name: 'Sistemas de carga' },
      { id: 'styling', name: 'Personalización' }
    ]
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Accesorios premium para SUVs que combinan confort urbano con capacidades fuera del asfalto.',
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80',
    subcategories: [
      { id: 'roof-racks', name: 'Barras de techo' },
      { id: 'storage', name: 'Organizadores' },
      { id: 'steps', name: 'Estribos' },
      { id: 'styling', name: 'Exterior' },
      { id: 'interior', name: 'Interior' },
      { id: 'outdoor', name: 'Accesorios outdoor' }
    ]
  },
  {
    id: 'utilitarios',
    name: 'Utilitarios',
    description: 'Soluciones para vehículos comerciales y utilitarios que aumentan su funcionalidad y eficiencia.',
    image: 'https://images.unsplash.com/photo-1541899824044-f4378835665c?auto=format&fit=crop&q=80',
    subcategories: [
      { id: 'cargo', name: 'Sistemas de carga' },
      { id: 'protection', name: 'Protección' },
      { id: 'lighting', name: 'Iluminación' },
      { id: 'accessories', name: 'Accesorios trabajo' },
      { id: 'racks', name: 'Portaequipajes' },
      { id: 'tools', name: 'Portaherramientas' }
    ]
  },
  {
    id: 'universal',
    name: 'Accesorios Universales',
    description: 'Accesorios compatibles con múltiples vehículos, desde gadgets electrónicos hasta kits de emergencia.',
    image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&q=80',
    subcategories: [
      { id: 'electronics', name: 'Electrónica' },
      { id: 'outdoor', name: 'Camping y outdoor' },
      { id: 'security', name: 'Seguridad' },
      { id: 'maintenance', name: 'Mantenimiento' },
      { id: 'tools', name: 'Herramientas' },
      { id: 'accessories', name: 'Accesorios generales' }
    ]
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Mejora el rendimiento de tu vehículo con accesorios diseñados para potenciar su desempeño.',
    image: 'https://images.unsplash.com/photo-1621252179027-9262c7630972?auto=format&fit=crop&q=80',
    subcategories: [
      { id: 'intake', name: 'Admisión' },
      { id: 'exhaust', name: 'Escape' },
      { id: 'chips', name: 'Chips de potencia' },
      { id: 'suspension', name: 'Suspensión deportiva' },
      { id: 'brakes', name: 'Frenos' },
      { id: 'drivetrain', name: 'Transmisión' }
    ]
  }
];

export default function CategoriesPage() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Categorías</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explora nuestra amplia gama de accesorios premium categorizados para diferentes tipos de vehículos
            y necesidades específicas.
          </p>
        </div>

        {/* Categorías principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <Link href={`/shop?category=${category.id}`}>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{category.name}</h2>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((subcategory) => (
                      <span 
                        key={subcategory.id} 
                        className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {subcategory.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="px-5 pb-5">
                <Link 
                  href={`/shop?category=${category.id}`}
                  className="block w-full text-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Ver productos
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de categorías destacadas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Categorías Destacadas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/4x4/barra-negra-frontier.jpg"
                alt="Equipamiento para aventuras off-road"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Equipamiento Off-Road</h3>
                <p className="text-slate-200 mb-4">Todo lo que necesitas para tus aventuras fuera del asfalto</p>
                <Link 
                  href="/shop?category=4x4"
                  className="inline-block bg-white text-slate-900 py-2 px-4 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  Explorar
                </Link>
              </div>
            </div>
            
            <div className="relative h-80 rounded-xl overflow-hidden shadow-md group">
              <Image
                src="https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&q=80"
                alt="Gadgets y accesorios para tu vehículo"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Gadgets y Electrónica</h3>
                <p className="text-slate-200 mb-4">La mejor tecnología para mejorar tu experiencia de conducción</p>
                <Link 
                  href="/shop?category=universal&subcategory=electronics"
                  className="inline-block bg-white text-slate-900 py-2 px-4 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Guía de compra */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Guía para elegir los accesorios adecuados</h2>
          
          <div className="prose prose-slate max-w-none">
            <p>
              Elegir los accesorios correctos para tu vehículo puede marcar la diferencia no solo en su apariencia,
              sino también en su funcionalidad y rendimiento. En Tavy4x4 nos especializamos en accesorios premium 
              que mejoran significativamente la experiencia con tu vehículo.
            </p>
            
            <h3>Considera el tipo de uso</h3>
            <p>
              Piensa en el uso principal que le das a tu vehículo. Si realizas regularmente actividades off-road,
              los accesorios de protección y rendimiento serán prioritarios. Para uso urbano, quizás te interesen
              más los accesorios de confort y estilo.
            </p>
            
            <h3>Compatible con tu modelo</h3>
            <p>
              Todos nuestros productos especifican claramente la compatibilidad con diferentes marcas y modelos.
              Asegúrate de verificar que el accesorio sea compatible con tu vehículo antes de realizar la compra.
            </p>
            
            <h3>Calidad y garantía</h3>
            <p>
              En Tavy4x4 solo ofrecemos productos de primeras marcas con garantía del fabricante. Invertir en
              accesorios de calidad no solo asegura un mejor rendimiento, sino también mayor durabilidad.
            </p>
            
            <div className="mt-6">
              <Link 
                href="/contacto"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ¿Necesitas ayuda para elegir? Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 