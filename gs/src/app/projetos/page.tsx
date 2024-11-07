import Link from 'next/link';
import React from 'react'

const Projetos = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Projetos</Link>
      </div>
        <div className="introducao_projetos">
          <h1>
            Veja aqui alguns projetos de Energia Renovável em ação
          </h1>
          <p>
            Explore projetos de energia renovável em comunidades, escolas e empresas ao redor do mundo. Cada projeto busca promover uma 
            abordagem sustentável e inovadora para o uso de energia, contribuindo para um futuro mais limpo e saudável para todos.
          </p>
        </div>

        <div className="projetos_exemplos">
          <div className="projeto_um">
            <h3>Aldeia Kariri-Xocó</h3>
            <button className="btn_p_um"><Link href="/projetos/p_um">Veja mais sobre</Link></button>
          </div>

          <div className="projeto_dois">
            <h3>Cidade de Petrolina</h3>
            <button className="btn_p_dois"><Link href="/projetos/p_dois">Veja mais sobre</Link></button>
          </div>

          <div className="projeto_tres">
            <h3>Fazenda Solar em Goiás</h3>
            <button className="btn_p_tres"><Link href="/projetos/p_tres">Veja mais sobre</Link></button>
          </div>
        </div>

        <div className="fim_projetos">
          <p>
            Esses casos mostram como a adoção de energia sustentável tem transformado a vida de pessoas e comunidades no Brasil, 
            promovendo maior qualidade de vida, redução de custos e sustentabilidade ambiental.
          </p>
        </div>

        
    </div>
  )
}
export default Projetos;
