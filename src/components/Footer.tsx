import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center text-2xl font-bold">
              TAVY<span className="text-blue-500">4x4</span>
            </Link>
            <p className="mt-4 text-sm text-slate-300">
              Tu tienda especializada en accesorios para vehículos 4x4, pickups y utilitarios. Calidad y asesoramiento experto desde 2010.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.666.254 1.23.598 1.8 1.153a4.99 4.99 0 011.153 1.8c.247.636.416 1.363.465 2.427.047 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.986 4.986 0 01-1.153 1.8c-.57.555-1.134.899-1.8 1.153-.636.247-1.363.416-2.427.465-1.024.047-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.989 4.989 0 01-1.8-1.153 4.99 4.99 0 01-1.153-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.985 4.985 0 011.153-1.8c.57-.555 1.134-.899 1.8-1.153.636-.247 1.363-.416 2.427-.465 1.024-.047 1.379-.06 3.808-.06zm0 1.66c-2.39 0-2.733.013-3.72.06-.896.041-1.382.19-1.707.317a3.325 3.325 0 00-1.2.776 3.33 3.33 0 00-.776 1.2c-.126.325-.275.811-.317 1.707-.047.987-.06 1.33-.06 3.72 0 2.39.013 2.733.06 3.72.041.896.19 1.382.317 1.707.17.455.405.837.776 1.2.363.37.745.605 1.2.776.325.126.811.275 1.707.317.987.047 1.33.06 3.72.06s2.733-.013 3.72-.06c.896-.041 1.382-.19 1.707-.317a3.325 3.325 0 001.2-.776c.37-.363.605-.745.776-1.2.126-.325.275-.811.317-1.707.047-.987.06-1.33.06-3.72s-.013-2.733-.06-3.72c-.041-.896-.19-1.382-.317-1.707a3.325 3.325 0 00-.776-1.2 3.328 3.328 0 00-1.2-.776c-.325-.126-.811-.275-1.707-.317-.987-.047-1.33-.06-3.72-.06zm0 11.32a3.32 3.32 0 100-6.64 3.32 3.32 0 000 6.64zm0-8.44a5.12 5.12 0 110 10.24 5.12 5.12 0 010-10.24zm6.53-.08a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Categorías
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/4x4" className="text-slate-400 hover:text-blue-500 transition-colors">
                  4x4
                </Link>
              </li>
              <li>
                <Link href="/categories/pickups" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Pickups
                </Link>
              </li>
              <li>
                <Link href="/categories/suvs" className="text-slate-400 hover:text-blue-500 transition-colors">
                  SUVs
                </Link>
              </li>
              <li>
                <Link href="/categories/utilitarios" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Utilitarios
                </Link>
              </li>
              <li>
                <Link href="/categories/accesorios" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Accesorios Universales
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-slate-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400">Av. Libertador 1234, CABA</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-slate-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-400">+54 11 1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-slate-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-400">info@tavy4x4.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-slate-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-400">Lun - Sáb: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-wrap justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Tavy4x4. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-blue-500 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms-of-service" className="text-sm text-slate-400 hover:text-blue-500 transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/shipping-policy" className="text-sm text-slate-400 hover:text-blue-500 transition-colors">
              Envíos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 