'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="text-center">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-slate-700">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; // No renderizamos nada, useEffect redirigirá al usuario
  }

  return (
    <div className="py-16 bg-gradient-to-br from-slate-100 to-slate-200 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Mi Cuenta</h1>
          <p className="text-slate-600">Gestiona tu información y compras</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Menú lateral */}
          <div className="md:col-span-1">
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <div className="flex items-center space-x-4">
                  <div className="bg-slate-700 h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold">
                    {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <p className="font-medium text-lg">{session.user?.name || 'Usuario'}</p>
                    <p className="text-slate-300 text-sm">{session.user?.email}</p>
                  </div>
                </div>
              </div>
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <Link href="/profile" className="block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium">
                      Mi perfil
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile/orders" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                      Mis pedidos
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile/addresses" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                      Direcciones
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile/favorites" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                      Favoritos
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile/settings" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                      Configuración
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 shadow-md rounded-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Información Personal</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={session.user?.name || ''}
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={session.user?.email || ''}
                    disabled
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Actividad reciente</h3>
              
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm text-slate-500">No hay actividad reciente para mostrar.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 shadow-md rounded-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Pedidos recientes</h2>
              
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm text-slate-500">No has realizado ningún pedido todavía.</p>
                </div>
                <div className="p-4 text-center">
                  <Link 
                    href="/shop" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Explorar productos
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 