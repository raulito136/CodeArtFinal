// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Aplicación</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200">Inicio</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">Acerca de</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">Servicios</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;  // Asegúrate de que esto esté aquí