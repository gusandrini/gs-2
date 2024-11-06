import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import Energia from '@/Image/energia-inicio.jpg'
import Calculadora from '@/Image/calculadora-inicio.jpg'
import Projetos from '@/Image/projetos-inicio.jpg'

const Inicial = () => {
  return (
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
            Navegação Rápida: Botões principais para “O que é Energia Renovável?”, “Calculadora de Economia” e “Projetos de Sucesso”, facilitando o acesso às áreas mais populares.
            Destaques de Vantagens: Três ícones com breves descrições como “Sustentável”, “Econômico a Longo Prazo”, e “Reduz Emissões”.
            <br />
            EcoBot Visível e Acessível: Um chatbot amigável que aparece imediatamente na página inicial, convidando o usuário a aprender sobre energia sustentável com perguntas simples, como: "Você sabia que pode economizar com energia renovável? Posso ajudar você a calcular isso!"
            Introdução ao EcoBot: Uma breve explicação de como o EcoBot pode ajudar, incluindo tópicos que ele cobre, como dicas de economia, orientação para escolher fontes de energia, e informações sobre impacto ambiental.
        </h3>
    </div>
  )
}
export default Inicial;
