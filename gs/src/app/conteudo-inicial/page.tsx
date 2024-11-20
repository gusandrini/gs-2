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
          <Link className="btn_energia" href="/saiba-mais">Use energia sustentável</Link>
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
      </div>
    </div>
  )
}
export default Inicial;