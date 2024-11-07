import Link from 'next/link';
import React from 'react'
import PaisagemSobre from '../paisagem-sobre/page';
import Image from 'next/image';
import Duda from '@/Image/foto-duda.jpg'
import Gu from '@/Image/foto-cv.jpg'
import Vi from '@/Image/foto-vitor.jpg'

const Sobre = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Sobre nós</Link>
      </div>
        <PaisagemSobre/>

        <div className="introducao_sobre">
          <h1>Missão</h1>
          <p>Um breve parágrafo sobre a missão da empresa ou do projeto, destacando o compromisso com a sustentabilidade e a inovação em energia limpa.</p>
        </div>

        <div className="nossa_historia">
          <h1>História</h1>
          <p>Fundação e primeiros passos: Como e quando a empresa foi criada e qual era o propósito inicial.
              Primeiros Projetos: Descrição do primeiro projeto de energia renovável, com uma foto ou breve vídeo.
              Expansão e Parcerias: Momentos em que a empresa ampliou seu impacto ou formou parcerias importantes.
              Inovações Recentes: Destaque de avanços tecnológicos ou novos produtos/serviços que mostram a evolução da empresa.
          </p>
        </div>


        <div className="nossa_equipe_titulo">
          <h1>Equipe</h1>
        </div>
        <div className="nossa_equipe">

            <div className="duda">
                <Image alt='Imagem de Eduarda' src={Duda}/>
                <h2>Eduarda Tiemi <br /> RM:XXXXXX</h2>
            </div>

            <div className="gu">
                <Image alt='Imagem de Gustavo' src={Gu}/>
                <h2>Gustavo Sandrini <br /> RM:XXXXXX</h2>
            </div>

            <div className="vi">
                <Image alt='Imagem de Victor' src={Vi}/>
                <h2>Victor Agrela <br /> RM:XXXXXX</h2>
            </div>
        </div>

        <div className="parceirias_colaboracoes">
        <h1>Parceirias</h1>
        <p>espaço para falar sobre as parceirias</p>
        </div>

        <div className="junte">
        <h1>Junte-se a nós</h1>
        <p>
            Chamada para Engajamento: Um convite inspirador, como “Acreditamos que cada um de nós pode fazer a diferença. Junte-se a nós e faça parte dessa jornada sustentável.”
            Link para Vagas de Emprego e Voluntariado: Uma área com oportunidades para quem quer trabalhar com a empresa ou voluntariar-se em projetos ambientais.
            Botões para Conectar-se: Botões chamativos para redes sociais, inscrição para newsletter e formulário de contato para os visitantes interagirem com a empresa.
        </p>
        </div>

        
    </div>
  )
}
export default Sobre;
