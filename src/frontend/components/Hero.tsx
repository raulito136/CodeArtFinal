// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-green-500 text-white text-center py-20 px-6">
      <h2 className="text-4xl font-extrabold mb-4">Bienvenidos a Mi Aplicación</h2>
      <p className="text-xl mb-8">Soluciones innovadoras para tu negocio</p>
      <div>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg mr-4"
        >
          Comienza ahora
        </a>
        <a
          href="#"
          className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 py-3 px-6 rounded-lg text-lg"
        >
          Más información
        </a>
      </div>
    </section>
  );
}

export default Hero;