import Link from 'next/link'
import React from 'react'

export default function ProjetoUm() {
  return (
    <div>

      <div className="paginas">
        <Link href="/projetos">Projetos/Porjeto 1</Link>
      </div>
      <div className="introducao_p_um">
        <h1>
        Aldeia Kariri-Xocó, em Alagoas
        </h1>
        <p>
          A Aldeia Kariri-Xocó, localizada no estado de Alagoas, foi uma das primeiras comunidades indígenas do Brasil a adotar a energia solar. 
          Antes da instalação dos sistemas fotovoltaicos, a aldeia enfrentava dificuldades para acessar eletricidade, o que impactava a qualidade 
          de vida dos moradores. A implementação da energia solar não só proporcionou iluminação e acesso à comunicação, mas também contribuiu para 
          a preservação do meio ambiente e a autonomia da comunidade. Com a energia solar, a aldeia conseguiu reduzir o custo com geradores a diesel 
          e aumentar a qualidade de vida, promovendo também a educação e a saúde, com melhor acesso a tecnologias e comunicação.
        </p>
      </div>
    </div>
  )
}
