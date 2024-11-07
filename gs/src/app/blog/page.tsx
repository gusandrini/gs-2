import Link from 'next/link';
import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Blog</Link>
      </div>
        <h3>
            Artigos Educativos Interativos: Cada artigo traz infográficos e gráficos interativos. Exemplo: um artigo sobre “Impacto Ambiental” que ilustra a diferença entre fontes de energia tradicional e renovável.
            Tutoriais e Simulações: Postagens práticas sobre como economizar energia, instalar painéis solares, e dicas de eficiência energética.
            Eventos e Webinars: Calendário com eventos do setor, como workshops gratuitos, palestras com especialistas, e lançamentos de novas tecnologias.
        </h3>
    </div>
  )
}
export default Blog;
