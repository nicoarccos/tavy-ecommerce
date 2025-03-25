'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';
  
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-2 py-1 rounded text-white font-bold text-xl">
                Tavy<span className="text-blue-400">4x4</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-sm font-medium">
              <Link href="/" className="text-slate-800 hover:text-slate-600 transition-colors">Inicio</Link>
              <Link href="/shop" className="text-slate-800 hover:text-slate-600 transition-colors">Tienda</Link>
              <Link href="/categories" className="text-slate-800 hover:text-slate-600 transition-colors">Categorías</Link>
              <Link href="/about" className="text-slate-800 hover:text-slate-600 transition-colors">Nosotros</Link>
              <Link href="/contact" className="text-slate-800 hover:text-slate-600 transition-colors">Contacto</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    href="/profile" 
                    className="text-slate-800 hover:text-slate-600 transition-colors font-medium"
                  >
                    {session?.user?.name || 'Mi cuenta'}
                  </Link>
                  <button 
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-slate-800 hover:text-slate-600 transition-colors font-medium">
                    Ingresar
                  </Link>
                  <Link 
                    href="/register" 
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    Registrarse
                  </Link>
                </>
              )}
              <div className="relative">
                <Link href="/cart" className="flex items-center text-slate-800 hover:text-slate-600 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-slate-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tienda
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Categorías
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mi cuenta
                </Link>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: '/' });
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Registrarse
                </Link>
              </>
            )}
            
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Carrito (3)
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 