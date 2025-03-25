import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar Sesión - Tavy4x4',
  description: 'Accede a tu cuenta en Tavy4x4 y gestiona tus pedidos de accesorios para vehículos',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 