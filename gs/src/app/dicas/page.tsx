import Link from 'next/link'
import React from 'react'

export default function Dicas() {
  return (
    <div>
        <div className="paginas">
            <Link href="/desafios">Desafios/Dicas</Link>
        </div>
        <div className="dicas">
            <h1>Dicas para uma Vida Sustentável</h1>

            <h2>1. Adote Energias Renováveis</h2>
            <p>Aproveite as fontes de energia limpa como a solar e a eólica. A EcoBot oferece soluções e informações sobre como você pode mudar para fontes de energia sustentáveis em sua casa ou empresa.</p>

            <h2>2. Reduza, Reutilize, Recicle</h2>
            <p>Antes de comprar algo novo, pergunte-se se você pode reutilizar ou reciclar algo que já tenha. A EcoBot também ensina como implementar práticas de reciclagem em seu dia a dia.</p>

            <h2>3. Consuma Conscientemente</h2>
            <p>Escolha produtos que gerem menos impacto ambiental. Além disso, priorize alimentos orgânicos e locais. Ao consumir de maneira mais responsável, você contribui para a preservação do meio ambiente.</p>

            <h2>4. Economize Água e Energia</h2>
            <p>Feche a torneira enquanto escova os dentes, tome banhos mais curtos e desligue os aparelhos eletrônicos quando não estiverem em uso. Isso não só economiza recursos, mas também reduz suas despesas.</p>

            <h2>5. Apoie Empresas Sustentáveis</h2>
            <p>Escolha empresas que estejam comprometidas com a sustentabilidade. A EcoBot está aqui para ajudá-lo a encontrar soluções ecológicas para seu cotidiano.</p>

            <h2>6. Mobilize-se e Faça Parte da Mudança</h2>
            <p>Acreditamos que cada um de nós pode fazer a diferença. Junte-se a nós na nossa jornada por um futuro mais verde e saudável. A EcoBot tem várias formas de você colaborar, seja como voluntário ou parte do time.</p>

            <h2>Fique Conectado e Participe!</h2>
            <p>Para mais dicas, novidades e como você pode colaborar em nossos projetos sustentáveis, siga-nos nas redes sociais ou inscreva-se na nossa newsletter!</p>
        </div>

    </div>
  )
}
