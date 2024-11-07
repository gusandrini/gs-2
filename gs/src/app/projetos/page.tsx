import Link from 'next/link';
import React from 'react'

const Projetos = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Projetos</Link>
      </div>
        <h3>
            Galeria com Realidade Aumentada: Visualize projetos reais de energia renovável (escolas, comunidades e empresas), com antes e depois em realidade aumentada. Exemplos incluem painéis solares em escolas e fazendas sustentáveis.
            Depoimentos e Histórias: Depoimentos em vídeo e textos que mostram como cada projeto impactou as comunidades, destacando benefícios ambientais e sociais.
            Destaque Mensal de Projeto: Todo mês, uma nova história de sucesso é detalhada para incentivar visitas contínuas.
        </h3>
    </div>
  )
}
export default Projetos;
