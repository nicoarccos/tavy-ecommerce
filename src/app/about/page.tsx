import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Acerca de Nosotros - Tavy4x4',
  description: 'Conoce más sobre Tavy4x4, nuestra historia, misión, valores y el equipo detrás de la mejor tienda de accesorios para vehículos 4x4',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Acerca de Nosotros</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Descubre quiénes somos y por qué somos la opción preferida para equipar tu vehículo con los mejores accesorios del mercado.
          </p>
        </div>

        {/* Historia de la empresa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
            <div className="prose prose-slate max-w-none">
              <p>
                Fundada en 2010, Tavy4x4 nació de la pasión de un grupo de entusiastas por los vehículos todo terreno y la aventura off-road. Lo que comenzó como un pequeño taller especializado en Buenos Aires, se ha convertido en una referencia nacional en el mundo de los accesorios para vehículos 4x4, pickups y utilitarios.
              </p>
              <p>
                A lo largo de los años, hemos expandido nuestro catálogo y mejorado constantemente nuestros servicios, siempre con el compromiso de ofrecer productos de la más alta calidad y un asesoramiento técnico especializado.
              </p>
              <p>
                Hoy, con más de una década de experiencia, seguimos creciendo y adaptándonos a las necesidades de nuestros clientes, manteniendo siempre la misma pasión por los vehículos que nos impulsó desde el primer día.
              </p>
            </div>
          </div>
          <div className="relative h-96 lg:h-auto rounded-xl overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <div className="text-center p-4">
                <svg className="h-12 w-12 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-slate-600">
                  Imagen histórica de Tavy4x4 - Desde 2010
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Misión, Visión y Valores</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Estos son los principios que guían nuestro trabajo diario y nos ayudan a mantener nuestro compromiso con la calidad y el servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4 mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-3">Misión</h3>
              <p className="text-slate-600 text-center">
                Proporcionar a nuestros clientes los mejores accesorios y servicios para sus vehículos 4x4, pickups y utilitarios, garantizando calidad, durabilidad y asesoramiento experto en cada compra.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4 mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-3">Visión</h3>
              <p className="text-slate-600 text-center">
                Ser reconocidos como el líder nacional en el mercado de accesorios para vehículos 4x4, destacándonos por la innovación, el servicio personalizado y el compromiso con la satisfacción de nuestros clientes.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4 mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-3">Valores</h3>
              <p className="text-slate-600 text-center">
                Nos guiamos por la excelencia, la honestidad, la pasión por lo que hacemos, el respeto por nuestros clientes y el compromiso con el medio ambiente y la seguridad en cada uno de los productos que ofrecemos.
              </p>
            </div>
          </div>
        </div>

        {/* Por qué elegirnos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Por qué elegirnos?</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              En Tavy4x4 nos distinguimos por ofrecer mucho más que productos. Creamos experiencias completas para nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Experiencia</h3>
              <p className="text-slate-600">
                Más de 10 años en el mercado nos avalan, con un equipo de expertos en el sector de accesorios para vehículos.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Calidad garantizada</h3>
              <p className="text-slate-600">
                Trabajamos únicamente con las mejores marcas y productos que cumplen los más altos estándares de calidad.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Asesoramiento personalizado</h3>
              <p className="text-slate-600">
                Nuestro equipo te guiará para que encuentres exactamente lo que necesitas para tu vehículo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Innovación constante</h3>
              <p className="text-slate-600">
                Nos mantenemos actualizados con las últimas tendencias y novedades en accesorios para vehículos 4x4.
              </p>
            </div>
          </div>
        </div>

        {/* Nuestro equipo */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestro Equipo</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Detrás de Tavy4x4 hay un equipo apasionado y comprometido con brindar la mejor experiencia a nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Miembro del equipo 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full bg-slate-200">
                <div className="flex items-center justify-center h-64">
                  <svg className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Martín Rodriguez</h3>
                <p className="text-blue-600 mb-4">Fundador y Director</p>
                <p className="text-slate-600 text-sm">
                  Con más de 15 años de experiencia en el sector automotriz, Martín lidera nuestro equipo con visión y pasión.
                </p>
              </div>
            </div>

            {/* Miembro del equipo 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full bg-slate-200">
                <div className="flex items-center justify-center h-64">
                  <svg className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Laura Gómez</h3>
                <p className="text-blue-600 mb-4">Jefa de Producto</p>
                <p className="text-slate-600 text-sm">
                  Laura se encarga de seleccionar los mejores productos y garantizar que nuestro catálogo siempre ofrezca la máxima calidad.
                </p>
              </div>
            </div>

            {/* Miembro del equipo 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full bg-slate-200">
                <div className="flex items-center justify-center h-64">
                  <svg className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Carlos Méndez</h3>
                <p className="text-blue-600 mb-4">Jefe de Taller</p>
                <p className="text-slate-600 text-sm">
                  Con su amplia experiencia técnica, Carlos lidera nuestro equipo de instalación y mantenimiento.
                </p>
              </div>
            </div>

            {/* Miembro del equipo 4 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full bg-slate-200">
                <div className="flex items-center justify-center h-64">
                  <svg className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Ana Martínez</h3>
                <p className="text-blue-600 mb-4">Atención al Cliente</p>
                <p className="text-slate-600 text-sm">
                  Ana asegura que cada cliente reciba un servicio excepcional y resuelve cualquier consulta con profesionalidad y amabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Listo para mejorar tu vehículo?</h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-6">
            Explora nuestra tienda y descubre la amplia gama de accesorios que tenemos para ti. Nuestro equipo está listo para asesorarte.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors">
              Ver productos
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 