import React from 'react';
import Eolica from '@/Image/eolica.jpg';

const Paisagem = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${Eolica.src})`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay de transparência */}
      <div className="relative z-10 flex justify-center items-center h-full text-white text-center ">
        <h1 className="text-4xl font-bold"><em>A Natureza é a Nossa Maior Fonte de Energia. Vamos Protegê-la.</em></h1>
      </div>
    </div>
  );
};

export default Paisagem;
