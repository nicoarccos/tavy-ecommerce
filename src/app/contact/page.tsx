import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Tavy4x4',
  description: 'Contacta con nosotros para cualquier consulta sobre nuestros productos y servicios para tu vehículo',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contacto</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre productos, pedidos o asesoría técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Información de contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Información de contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-slate-900">Teléfono</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      +54 11 1234-5678
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Lunes a Viernes: 9:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-slate-900">Email</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      info@tavy4x4.com
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Respondemos dentro de las 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-slate-900">Dirección</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Av. Libertador 1234
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      CABA, Buenos Aires
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Lunes a Sábado: 9:00 - 20:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-slate-900">Soporte</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      soporte@tavy4x4.com
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Asistencia técnica y posventa
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-slate-900 mb-3">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-500 hover:text-blue-600">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-blue-600">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.666.254 1.23.598 1.8 1.153a4.99 4.99 0 011.153 1.8c.247.636.416 1.363.465 2.427.047 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.986 4.986 0 01-1.153 1.8c-.57.555-1.134.899-1.8 1.153-.636.247-1.363.416-2.427.465-1.024.047-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.989 4.989 0 01-1.8-1.153 4.99 4.99 0 01-1.153-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.985 4.985 0 011.153-1.8c.57-.555 1.134-.899 1.8-1.153.636-.247 1.363-.416 2.427-.465 1.024-.047 1.379-.06 3.808-.06zm0 1.66c-2.39 0-2.733.013-3.72.06-.896.041-1.382.19-1.707.317a3.325 3.325 0 00-1.2.776 3.33 3.33 0 00-.776 1.2c-.126.325-.275.811-.317 1.707-.047.987-.06 1.33-.06 3.72 0 2.39.013 2.733.06 3.72.041.896.19 1.382.317 1.707.17.455.405.837.776 1.2.363.37.745.605 1.2.776.325.126.811.275 1.707.317.987.047 1.33.06 3.72.06s2.733-.013 3.72-.06c.896-.041 1.382-.19 1.707-.317a3.325 3.325 0 001.2-.776c.37-.363.605-.745.776-1.2.126-.325.275-.811.317-1.707.047-.987.06-1.33.06-3.72s-.013-2.733-.06-3.72c-.041-.896-.19-1.382-.317-1.707a3.325 3.325 0 00-.776-1.2 3.328 3.328 0 00-1.2-.776c-.325-.126-.811-.275-1.707-.317-.987-.047-1.33-.06-3.72-.06zm0 11.32a3.32 3.32 0 100-6.64 3.32 3.32 0 000 6.64zm0-8.44a5.12 5.12 0 110 10.24 5.12 5.12 0 010-10.24zm6.53-.08a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-blue-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-blue-600">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Pérez"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+54 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-slate-700">
                      Acepto la política de privacidad
                    </label>
                    <p className="text-slate-500">
                      Al enviar este formulario, confirmas que has leído y aceptado nuestra política de privacidad.
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa y ubicación */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Nuestra ubicación</h2>
          
          <div className="relative h-96 rounded-lg overflow-hidden">
            {/* Aquí iría un mapa, en producción se usaría un componente de mapa real como Google Maps o Leaflet */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <div className="text-center p-4">
                <svg className="h-12 w-12 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-slate-600">
                  Mapa de ubicación - Av. Libertador 1234, CABA, Buenos Aires
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Preguntas frecuentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">¿Cuál es el tiempo de entrega?</h3>
              <p className="text-slate-600">
                El tiempo de entrega depende de tu ubicación. Para CABA y alrededores, la entrega es de 24-48 horas hábiles.
                Para el resto del país, el tiempo de entrega es de 3-7 días hábiles.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">¿Ofrecen instalación de los productos?</h3>
              <p className="text-slate-600">
                Sí, ofrecemos servicio de instalación en nuestro taller ubicado en CABA. Puedes agregar este servicio
                durante el proceso de compra o contactarnos para más información.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">¿Cómo puedo verificar si un producto es compatible con mi vehículo?</h3>
              <p className="text-slate-600">
                En la descripción de cada producto encontrarás información sobre la compatibilidad con diferentes
                marcas y modelos de vehículos. Si tienes dudas, puedes contactarnos a través del formulario o por
                teléfono y te asesoraremos.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">¿Cuál es la política de devoluciones?</h3>
              <p className="text-slate-600">
                Tienes 14 días desde la recepción del producto para solicitar una devolución. El producto debe estar
                sin usar y en su embalaje original. Para más detalles, consulta nuestra política de devoluciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 