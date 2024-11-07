import Link from 'next/link'
import React from 'react'

export default function ProjetoTres() {
  return (
    <div>
      <div className="paginas">
        <Link href="/projetos">Projetos/Porjeto 3</Link>
      </div>
      <div className="introducao_p_tres">
        <h1>
        Fazenda Solar em Goiás – Fazenda São João
        </h1>
        <p>
          A Fazenda São João, localizada no interior de Goiás, é um exemplo de transformação através da energia solar no agronegócio. Antes da 
          instalação de painéis solares, a fazenda enfrentava altos custos com eletricidade, essencial para o funcionamento das bombas de 
          irrigação e das instalações de resfriamento de produtos. Com a implementação de um sistema de energia solar, a fazenda conseguiu 
          reduzir em até 70% seus custos com eletricidade, o que resultou em uma melhora significativa na rentabilidade do negócio. Além disso, o 
          projeto promoveu uma maior sustentabilidade, já que a energia solar não apenas reduziu custos, mas também diminuiu a pegada de carbono 
          da produção agrícola. Esse exemplo de sucesso tem incentivado outras propriedades rurais a adotarem soluções de energia renovável.
        </p>
      </div>
    </div>
  )
}
