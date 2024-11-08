import Link from 'next/link';
import React from 'react'

const Contato = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Contato</Link>
      </div>

      <div className="introducao_contato">
        <h1>
          Área de contato
        </h1>
        <p>
        Quer saber mais sobre como a energia renovável pode transformar sua vida? Ou tem dúvidas sobre os nossos serviços? Estamos aqui para 
        ajudar! Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
        </p>
      </div>

    <div className="contato">
      <section className="stato">
        <form className="ftato">
          <div className="consultoria_online">
            <h1>CONSULTORIA ONLINE</h1>
          </div>
          <fieldset>
            <div>
              <label htmlFor="name">Nome:</label>
              <input 
                type="text"
                id="nome"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input 
                type="email"
                id="email"
                placeholder="Digite seu email para contato"
              />
            </div>

            <div>
              <label htmlFor="duvidas">Dúvidas:</label>
              <input
                type="message"
                id="message"
                placeholder="Digite sua dúvida"
                autoComplete="off"
              />
            </div>

            <div className="center">
              <button type="submit" className="botao_submit">Enviar</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>


    <div className="informacoes_contato">
      <h1>
        Informações de contato
      </h1>
      <p>
        <strong>Endereço:</strong> Avenida Energia Sustentável, 123, Centro, Cidade Verde, BR
      </p>
      <p>
        <strong>Telefone:</strong> (11) 1234-5678
      </p>
      <p>
        <strong>E-mail:</strong> contato@energiaecologica.com
      </p>
    </div>

    <div className="porque_contato">
      <h1>
        Por Que Entrar em Contato?
      </h1>
      <p>
        <strong>Consultoria Gratuita:</strong> Quer saber como adotar energia renovável em sua casa ou empresa? Oferecemos uma primeira consulta 
        gratuita para ajudar você a encontrar a melhor solução.
      </p>
      <p>
        <strong>Consultoria Especializada:</strong> Agende uma conversa com um dos nossos especialistas e tire todas as suas 
        dúvidas sobre energia solar, eólica, eficiência energética e muito mais.
      </p>
      <p>
        <strong>Solicite um Orçamento:</strong> Receba um orçamento personalizado de acordo com o seu perfil de consumo, suas necessidades e 
        localização.
      </p>
      <p>
        <strong>Parcerias e Projetos:</strong> Está interessado em parcerias ou quer propor um projeto conjunto? Adoramos explorar novas 
        oportunidades para promover um futuro sustentável.
      </p>
    </div>

    <div className="faq">
      <h1>
        FAQ - Perguntas Frequentes
      </h1>
      <p>
        <strong>Quais tipos de serviços vocês oferecem?</strong> Oferecemos instalação de painéis solares, consultoria em eficiência 
        energética e manutenção de sistemas renováveis.
      </p>
      <p>
        <strong>Vocês atendem em quais regiões?</strong> Atendemos em todo o território nacional e temos escritórios regionais em várias capitais.
      </p>
      <p>
        <strong>Quanto tempo leva para instalar um sistema de energia solar?</strong> A instalação depende do projeto e da localização, mas 
        geralmente leva de 1 a 3 dias.
      </p>
    </div>

    </div>

  )
}
export default Contato;
