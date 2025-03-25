import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registro - Tavy4x4',
  description: 'Crea una cuenta en Tavy4x4 y disfruta de beneficios exclusivos para comprar accesorios para vehículos',
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 