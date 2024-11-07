import Link from 'next/link'
import React from 'react'

export default function ProjetoDois() {
  return (
    <div>
      <div className="paginas">
        <Link href="/projetos">Projetos/Porjeto 2</Link>
      </div>
      <div className="introducao_p_dois">
        <h1>
          Projeto Solar na Cidade de Petrolina, Pernambuco
        </h1>
        <p>
          Petrolina, uma cidade do sertão pernambucano, implementou um projeto de energia solar em grande escala, tanto para residências quanto 
          para pequenas empresas. O uso de energia solar no município permitiu uma drástica redução nos custos de energia elétrica, além de 
          aumentar a autonomia e a sustentabilidade da cidade. Pequenos comerciantes e moradores agora conseguem gerar sua própria energia, 
          reduzindo a dependência da rede elétrica tradicional, que era instável e cara. O projeto também gerou novos empregos na cidade, com a 
          instalação e manutenção dos sistemas solares, e ajudou a atrair investidores para o setor de energia renovável.
        </p>
      </div>
    </div>
  )
}
