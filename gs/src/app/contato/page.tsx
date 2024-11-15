"use client"
import { TipoContato } from '@/types/types';
import Link from 'next/link';
import React, { useState } from 'react';

const Contato = () => {
  const [mensagemCadastro, setMensagemCadastro] = useState('');
  const [consultoria, setConsultoria] = useState<TipoContato>({
    id_consultoria: 0,
    duvidas: "",
    email_usuario: "",
    nome_usuario: "",
  });

  // Tornar a função assíncrona
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/consultoria', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consultoria),
      });

      if (response.ok) {
        // Limpar os campos após o envio
        setConsultoria({
          id_consultoria: 0,
          duvidas: "",
          email_usuario: "",
          nome_usuario: "",
        });
        setMensagemCadastro("Mensagem enviada com sucesso!");
      } else {
        alert('Ocorreu um erro ao enviar a mensagem.');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Ocorreu um erro na requisição.');
    }
  };

  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Contato</Link>
      </div>

      <div className="introducao_contato">
        <h1>Área de contato</h1>
        <p>
          Quer saber mais sobre como a energia renovável pode transformar sua vida? Ou tem dúvidas sobre os nossos serviços? Estamos aqui para 
          ajudar! Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
        </p>
      </div>

      <div className="contato">
        <section className="stato">
          <form className="ftato" onSubmit={handleSubmit}>
            <div className="consultoria_online">
              <h1>CONSULTORIA ONLINE</h1>
            </div>
            <fieldset>
              <div>
                <label htmlFor="nome">Nome:</label>
                <input 
                  type="text"
                  id="nome"
                  name="nome_usuario"
                  placeholder="Digite seu nome"
                  value={consultoria.nome_usuario}
                  onChange={(e) => setConsultoria({ ...consultoria, nome_usuario: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input 
                  type="email"
                  id="email"
                  name="email_usuario"
                  placeholder="Digite seu email para contato"
                  value={consultoria.email_usuario}
                  onChange={(e) => setConsultoria({ ...consultoria, email_usuario: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="mensagem">Dúvidas:</label>
                <textarea
                  id="mensagem"
                  name="duvidas"
                  placeholder="Digite sua dúvida"
                  value={consultoria.duvidas}
                  onChange={(e) => setConsultoria({ ...consultoria, duvidas: e.target.value })}
                  autoComplete="off"
                />
              </div>

              <div className="botao_submit">
                <button type="submit" className="botao_submit">Enviar</button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>

      {mensagemCadastro && <div className="mensagem-sucesso">{mensagemCadastro}</div>}

      <div className="informacoes_contato">
        <h1>Informações de contato</h1>
        <p>
          Endereço: 
          <br />
          Avenida Energia Sustentável, 123, Centro, Cidade Verde, BR
        </p>
        <p>
          Telefone: 
          <br />
          (11) 1234-5678
        </p>
        <p>
          E-mail: 
          <br />
          contato@energiaecologica.com
        </p>
      </div>

      <div className="porque_contato">
        <h1>Por Que Entrar em Contato?</h1>
        <p>
          Consultoria Gratuita: 
          <br />
          Quer saber como adotar energia renovável em sua casa ou empresa? Oferecemos uma primeira consulta gratuita para ajudar você a encontrar a melhor solução.
        </p>
        <p>
          Consultoria Especializada: 
          <br />
          Agende uma conversa com um dos nossos especialistas e tire todas as suas dúvidas sobre energia solar, eólica, eficiência energética e muito mais.
        </p>
        <p>
          Solicite um Orçamento: 
          <br />
          Receba um orçamento personalizado de acordo com o seu perfil de consumo, suas necessidades e localização.
        </p>
        <p>
          Parcerias e Projetos: 
          <br />
          Está interessado em parcerias ou quer propor um projeto conjunto? Adoramos explorar novas oportunidades para promover um futuro sustentável.
        </p>
      </div>

      <div className="faq">
        <h1>FAQ - Perguntas Frequentes</h1>
        <p>
          Quais tipos de serviços vocês oferecem? 
          <br />
          Oferecemos instalação de painéis solares, consultoria em eficiência energética e manutenção de sistemas renováveis.
        </p>
        <p>
          Vocês atendem em quais regiões? 
          <br />
          Atendemos em todo o território nacional e temos escritórios regionais em várias capitais.
        </p>
        <p>
          Quanto tempo leva para instalar um sistema de energia solar? 
          <br />
          A instalação depende do projeto e da localização, mas geralmente leva de 1 a 3 dias.
        </p>
      </div>
    </div>
  );
};

export default Contato;
