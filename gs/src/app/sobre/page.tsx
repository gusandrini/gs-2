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
          <p>
          A missão da EcoBot é promover um futuro sustentável por meio de tecnologias inovadoras que incentivam o uso consciente de recursos 
          naturais. A empresa busca integrar soluções de energia limpa e renovável no cotidiano das pessoas e organizações, oferecendo produtos 
          e serviços que não só contribuem para a preservação ambiental, mas também geram economia e eficiência energética. Por meio de 
          inteligência artificial e automação, a EcoBot visa transformar a maneira como interagimos com a energia, proporcionando um impacto 
          positivo para o planeta e para as futuras gerações.
          </p>
        </div>

        <div className="nossa_historia">
          <h1>História</h1>
          <p>
            A EcoBot foi fundada por três estudantes do curso de Análise e Desenvolvimento de Sistemas da FIAP, com o intuito de criar uma solução 
            inovadora no campo da energia renovável. Durante o trabalho Global Solution, proposto pela faculdade, Eduarda, Gustavo e Victor uniram 
            suas habilidades e conhecimentos para desenvolver uma tecnologia que integra sustentabilidade e eficiência energética. Estamos no final 
            do primeiro ano do curso e, com a orientação de nossos professores, buscamos aplicar o aprendizado acadêmico para impactar positivamente 
            o meio ambiente. Através da EcoBot, nossa missão é democratizar o acesso à energia limpa e contribuir para um futuro mais sustentável.
          </p>
        </div>


        <div className="nossa_equipe_titulo">
          <h1>Equipe</h1>
        </div>

        <div className="nossa_equipe">
          <div className="duda">
              <Image alt="Imagem de Eduarda" src={Duda} />
              <p>Eduarda Tiemi</p>
              <p>
                  <Link href="https://github.com/dudatiemiak">GitHub</Link>
              </p>
              <p>
                  <Link href="">LinkedIn</Link>
              </p>
              <p>Turma: 1TDSPH</p>
              <p>RM: 554756</p>
          </div>

          <div className="gu">
              <Image alt="Imagem de Gustavo" src={Gu} />
              <p>Gustavo Sandrini</p>
              <p>
                  <Link href="https://github.com/gusandrini">GitHub</Link>
              </p>
              <p>
                  <Link href="https://www.linkedin.com/in/gustavo-oliveira-7311ba2ab/">LinkedIn</Link>
              </p>
              <p>Turma: 1TDSPH</p>
              <p>RM: 557505</p>
          </div>

          <div className="vi">
              <Image alt="Imagem de Victor" src={Vi} />
              <p>Victor Agrela</p>
              <p>
                  <Link href="https://github.com/victoragrela">GitHub</Link>
              </p>
              <p>
                  <Link href="">LinkedIn</Link>
              </p>
              <p>Turma: 1TDSPH</p>
              <p>RM: 557345</p>
          </div>
        </div>

        <div className="parceirias_colaboracoes">
        <h1>Parceiros</h1>
        <p>
          A EcoBot tem a honra de contar com a FIAP como nossa parceira acadêmica. Como estudantes dessa renomada instituição, nossa parceria vai 
          além de um simples vínculo educacional; ela representa uma fonte constante de apoio, orientação e inovação. A FIAP, ao propor o trabalho 
          Global Solution, nos incentivou a criar soluções tecnológicas com um impacto real e positivo no mundo, especialmente no setor de energia 
          renovável. Através dessa parceria, temos acesso a recursos valiosos, como professores especializados e infraestrutura de ponta, que nos 
          ajudam a transformar ideias criativas em soluções práticas. Nossa colaboração com a FIAP é um pilar fundamental para o sucesso da EcoBot 
          e para o nosso crescimento contínuo como desenvolvedores e empreendedores comprometidos com a sustentabilidade.
        </p>
        </div>

        <div className="junte">
        <h1>Junte-se a nós</h1>
        <p>
          Acreditamos que cada um de nós tem o poder de impactar positivamente o mundo. A EcoBot nasceu com a missão de transformar o futuro da 
          energia renovável, e queremos que você faça parte dessa jornada. Se você é apaixonado por sustentabilidade, tecnologia e inovação, 
          temos oportunidades para você! Junte-se à nossa equipe e contribua para um futuro mais verde, seja por meio de um trabalho conosco ou 
          como voluntário em projetos que realmente fazem a diferença.Explore as vagas de emprego e oportunidades de voluntariado que temos 
          disponíveis e venha construir soluções inovadoras com a gente. Seja no desenvolvimento de novas tecnologias ou no engajamento com a 
          comunidade, há espaço para todos que compartilham de nossa visão de um planeta mais sustentável. <br />
          Para entrar em contato com a EcoBot, envie-nos um email ou então entre em contato através das nossas redes sociais. Estamos prontos 
          para responder às suas dúvidas, ouvir suas sugestões e discutir oportunidades de colaboração. Não hesite em nos procurar, estamos sempre 
          abertos para criar um futuro mais sustentável com você!
        </p>
        </div>

        
    </div>
  )
}
export default Sobre;
