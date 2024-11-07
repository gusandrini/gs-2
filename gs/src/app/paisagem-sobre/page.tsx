import React from 'react';
import Solar from '@/Image/energia-solar-sobre.jpg';

const PaisagemSobre = () => {
  return (
    
    <div>
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${Solar.src})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="relative z-10 flex justify-center items-center h-full text-white">
            <h1 className="flex justify-center items-center px-10 text-center text-4xl font-bold"><em>Comprometidos com um futuro sustentável, trabalhamos para tornar o mundo 
              mais limpo e verde para as próximas gerações</em>
            </h1>
          </div>
        </div>
    </div>
  );
};

export default PaisagemSobre;
