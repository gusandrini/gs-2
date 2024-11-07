import Link from 'next/link';
import React from 'react'

const Desafio = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Desafios</Link>
      </div>
        <div className='introducao_desafio'>
          <h1>
            Desafio de Energia Sustentável
          </h1>
          <p>
          Participe do Desafio de Energia Sustentável e veja o impacto positivo que você pode gerar em casa e na sua comunidade! <br />
          Queremos que todos experimentem o poder da energia sustentável e façam pequenas mudanças que somam grandes resultados. Junte-se a nós neste desafio e transforme suas ações em um futuro mais limpo e verde.
          </p>
        </div>

        <div className="obj_desafio">
          <h1>
            Objetivo do desafio
          </h1>
          <p>
          Nosso objetivo é ajudar você a reduzir seu consumo de energia e adotar práticas sustentáveis em seu dia a dia. No decorrer do desafio, você aprenderá sobre alternativas mais verdes para economizar energia, reduzir sua pegada de carbono, e poderá acompanhar os resultados ao longo do tempo.
          </p>
        </div>

        <div className="como_participar">
          <h1>
            Como participar?
          </h1>
          <p>
            1° Escolha uma Meta Sustentável: Escolha entre várias ações sustentáveis, como instalar painéis solares, trocar lâmpadas para modelos 
            LED, adotar um consumo consciente de eletricidade, ou até mesmo instalar um medidor de energia para acompanhar o consumo. <br />
            2° Acompanhe Seu Progresso: Use nosso aplicativo ou a calculadora de economia energética para ver quantos quilowatts e dinheiro você 
            economizou, além da redução nas emissões de CO₂. <br />
            3° Compartilhe sua Jornada: Publique fotos, compartilhe histórias e acompanhe o progresso de outros participantes em nossas redes 
            sociais. Use a hashtag #EnergiaSustentável e nos marque para inspirar e chegar em mais pessoas!
          </p>
        </div>

        <div className="exemplo_desafios">
          <h1>
          Exemplos de Desafios que Você Pode Adotar
          </h1>
          <p>
          Troque todas as lâmpadas para LEDs: As lâmpadas LED são muito mais eficientes do que as lâmpadas convencionais e têm uma vida útil mais 
          longa. <br />
          Reduza o uso do ar-condicionado: Use ventiladores, cortinas térmicas ou janelas com isolamento térmico para refrescar o ambiente de 
          forma natural. <br />
          Instale painéis solares: Se possível, explore a instalação de painéis solares para reduzir sua dependência da rede elétrica e gerar 
          sua própria energia limpa.
          </p>
        </div>

        <div className="premiacao">
          <h1>
          Prêmios e Reconhecimentos
          </h1>
          <p>
          Conclua o desafio e compartilhe seus resultados para ter a chance de ganhar prêmios sustentáveis, como kits de eficiência energética, 
          descontos em serviços de instalação solar, ou consultorias para tornar sua casa mais verde. Ao final do desafio, daremos destaque em 
          nossas redes sociais aos participantes que se destacaram e mostraram o maior impacto!
          </p>
        </div>

        <div className="recursos_comecar">
          <h1>
          Recursos para Começar
          </h1>
          <p>
          Calculadora de Economia de Energia: Descubra o quanto você pode economizar mudando pequenos hábitos em casa. <br />
          Guia de Instalação Solar: Aprenda o que é necessário para instalar um sistema solar e começar a gerar sua própria energia. <br />
          Dicas de Sustentabilidade: Confira nossa seção de dicas para tornar seu dia a dia mais sustentável, desde o uso consciente de energia 
          até a redução de desperdício.
          </p>
        </div>
    </div>
  )
}
export default Desafio;
