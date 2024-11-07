import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import Energia from '@/Image/energia-inicio.jpg'
import Calculadora from '@/Image/calculadora-inicio.jpg'
import Projetos from '@/Image/projetos-inicio.jpg'

const Inicial = () => {
  return (
    <div>

      <div className='cards'>
        <div className="energia">
          <Image
          src={Energia}
          alt='Energia sustentável'
          />
          <Link className="btn_energia" href="/saiba-mais">O que é Energia Sustentável?</Link>
        </div>

        <div className="calculadora">
          <Image
          src={Calculadora}
          alt='Calculadora de gastos energéticos'
          />
          <Link className="btn_calculadora" href="/calculadora">Calculadora de Economia</Link>
        </div>

        <div className="projetos">
          <Image
          src={Projetos}
          alt='Projetos sustetáveis'
          />
          <Link className="btn_projetos" href="/projetos">Projetos de sucesso</Link>
        </div>
          <h3>
              Banner Visual Dinâmico: Imagem ou vídeo de alta resolução com turbinas eólicas girando sobre colinas verdes e painéis solares sob o sol. No centro, um slogan chamativo: “A Natureza é a Nossa Maior Fonte de Energia. Vamos Protegê-la.”
          </h3>
      </div>
    </div>
  )
}
export default Inicial;
