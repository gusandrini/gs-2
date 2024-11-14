"use client";
import { TipoEnergia } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Saiba = () => {
  const [mensagemSaiba, setMensagemSaiba] = useState('');
  const router = useRouter();
  const [saiba, setSaiba] = useState<TipoEnergia>({
    id_es: 0,
    tp_energia: "",
    localizacao_geografica: "",
    energia_mensal: "",
    obj_implementacao: "",
    orcamento: "",
    necessidade_atendimento: "",
    usuario_es: "",
    preferencia_contato: "",
    contato: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/fonte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saiba),
      });

      if (response.ok) {
        setSaiba({
          id_es: 0,
          tp_energia: "",
          localizacao_geografica: "",
          energia_mensal: "",
          obj_implementacao: "",
          orcamento: "",
          necessidade_atendimento: "",
          usuario_es: "",
          preferencia_contato: "",
          contato: "",
        });
        setMensagemSaiba("Usuário cadastrado com sucesso!");
        router.push("/");
      } else {
        const errorText = await response.text();
        const errorMessage = errorText ? JSON.parse(errorText).message : "Erro desconhecido.";
        setMensagemSaiba(errorMessage);
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagemSaiba(`Erro ao cadastrar: ${error instanceof Error ? error.message : 'Erro no frontend.'}`);
    }
  };

  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Saiba mais</Link>
      </div>
      <div className="introducao_saiba">
        <h1>O que é Energia Sustentável?</h1>
        <p>
          Energia sustentável refere-se a fontes de energia que podem ser utilizadas sem comprometer a capacidade das gerações futuras de 
          atenderem às suas necessidades energéticas. Trata-se de um conceito voltado para o uso de recursos renováveis e de baixo impacto 
          ambiental, promovendo um equilíbrio entre desenvolvimento e preservação do meio ambiente.
        </p>
      </div>

      <div className="princi_fontes">
        <h1>Principais Fontes de Energia Sustentável</h1>
        <div className="solar">
          <h2>Energia solar</h2>
          <p>
            Captada através de painéis solares, essa energia converte a luz do sol em eletricidade ou calor. É limpa, abundante e pode ser usada 
            em diversas escalas, desde residências até grandes indústrias.
          </p>
        </div>

        <div className="eolica">
          <h2>Energia Eólica</h2>
          <p>
            Gerada pelo vento, essa energia é captada por turbinas eólicas, que convertem o movimento do vento em eletricidade. É altamente 
            eficiente em áreas com ventos constantes e reduz significativamente as emissões de carbono.
          </p>
        </div>

        <div className="biomassa">
          <h2>Biomassa</h2>
          <p>
            A biomassa inclui materiais orgânicos, como resíduos agrícolas e florestais, que podem ser convertidos em energia através de 
            processos como combustão ou digestão anaeróbica. Ela aproveita materiais que seriam descartados e os transforma em uma fonte de 
            energia renovável.
          </p>
        </div>

        <div className="hidraeletrica">
          <h2>Energia Hidraelétrica de Pequena Escala</h2>
          <p>
            Embora a energia hidrelétrica tradicional possa causar impactos ambientais, as pequenas usinas hidrelétricas (PCHs) são uma alternativa 
            com menos impactos, aproveitando a força da água em pequenas quedas ou rios sem necessidade de grandes barragens.
          </p>
        </div>

        <div className="geotermica">
          <h2>Energia Geotérmica</h2>
          <p>
            Essa fonte utiliza o calor interno da Terra para gerar eletricidade ou aquecer ambientes. Embora mais comum em áreas geologicamente 
            ativas, a geotermia é uma opção promissora e contínua em algumas regiões.
          </p>
        </div>
      </div>

      <div className="beneficios">
        <h1>Benefícios da Energia Sustentável</h1>
        <p>
          Redução de Emissões de Carbono: <br /> Por serem fontes limpas, energias sustentáveis emitem pouco ou nenhum gás de efeito estufa, 
          ajudando a reduzir o aquecimento global e seus impactos climáticos.
        </p>
        <p>
          Independência Energética: <br /> Ao adotar fontes renováveis, os países e regiões podem diminuir a dependência de combustíveis fósseis importados, 
          fortalecendo a economia local e aumentando a segurança energética.
        </p>
        <p>
          Economia e Sustentabilidade Financeira: <br /> Após o investimento inicial, muitas fontes de energia sustentável geram eletricidade a um custo mais 
          baixo. No longo prazo, isso representa economia para residências, empresas e governos.
        </p>
      </div>

      <div className="impacto">
        <h1>Como a Energia Sustentável Impacta o Futuro</h1>
        <p>
          O uso de energia sustentável está cada vez mais no centro das discussões sobre o futuro do planeta. Com a crescente demanda energética e as 
          mudanças climáticas, é fundamental que países e indivíduos adotem práticas e tecnologias mais limpas e eficientes.
        </p>
      </div>

      <div className="iniciativas">
        <h1>Iniciativas para um Futuro Sustentável:</h1>
        <p>
          Empresas, governos e comunidades ao redor do mundo estão inovando para tornar a energia sustentável mais acessível e prática para todos. 
          Incentivos governamentais, investimentos em pesquisa e desenvolvimento, e a expansão de redes inteligentes estão ajudando a tornar essa 
          realidade mais próxima.
        </p>
      </div>

      <div className="porque_investir">
        <h1>Por que Investir em Energia Sustentável?</h1>
        <p>
          Investir em energia sustentável não é apenas uma escolha ambientalmente responsável, mas também econômica. A transição para energias 
          renováveis representa uma oportunidade de preservar o planeta enquanto promove o desenvolvimento econômico sustentável.
        </p>
      </div>

      <div className="use">
        <h1>Aplique em seu dia a dia</h1>
      </div>

      <div className="energias">
        <section className="section-energia">
          <form className="formulario-energia" onSubmit={handleSubmit}>
            <div className="titulo-fontes-energia">
              <h1>FONTES DE ENERGIA</h1>
            </div>
            
            <fieldset>
              <div>
                <label htmlFor="tipo_energia">Tipo de Energia de Interesse:</label>
                <select 
                  id="tipo_energia" 
                  name="tp_energia"
                  value={saiba.tp_energia}
                  onChange={(e) => setSaiba({ ...saiba, tp_energia: e.target.value })}
                >
                  <option value="solar">Energia Solar</option>
                  <option value="eolica">Energia Eólica</option>
                  <option value="biomassa">Biomassa</option>
                  <option value="hidreletrica">Hidrelétrica</option>
                  <option value="geotermica">Geotérmica</option>
                  <option value="outra">Outras</option>
                </select>
              </div>

              <div>
                <label htmlFor="localizacao_geografica">Localização Geográfica:</label>
                <select
                  id="localizacao_geografica"
                  name="localizacao_geografica"
                  value={saiba.localizacao_geografica}
                  onChange={(e) => setSaiba({ ...saiba, localizacao_geografica: e.target.value })}
                >
                  <option value="Acre">Acre</option>
                  <option value="Alagoas">Alagoas</option>
                  <option value="Amapa">Amapá</option>
                  <option value="Amazonas">Amazonas</option>
                  <option value="Bahia">Bahia</option>
                  <option value="Ceara">Ceará</option>
                  <option value="Distrito Federal">Distrito Federal</option>
                  <option value="Espirito Santo">Espírito Santo</option>
                  <option value="Goias">Goiás</option>
                  <option value="Maranhao">Maranhão</option>
                  <option value="Mato Grosso">Mato Grosso</option>
                  <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                  <option value="Minas Gerais">Minas Gerais</option>
                  <option value="Para">Pará</option>
                  <option value="Paraiba">Paraíba</option>
                  <option value="Parana">Paraná</option>
                  <option value="Pernambuco">Pernambuco</option>
                  <option value="Piaui">Piauí</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                  <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                  <option value="Rondonia">Rondônia</option>
                  <option value="Roraima">Roraima</option>
                  <option value="Santa Catarina">Santa Catarina</option>
                  <option value="Sao Paulo">São Paulo</option>
                  <option value="Sergipe">Sergipe</option>
                  <option value="Tocantins">Tocantins</option>
                </select>
              </div>

              <div>
                <label htmlFor="energia_mensal">Consumo Mensal de Energia (kWh):</label>
                <input
                  type="number"
                  id="energia_mensal"
                  name="energia_mensal"
                  value={saiba.energia_mensal}
                  onChange={(e) => setSaiba({ ...saiba, energia_mensal: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="obj_implementacao">Objetivo de Implementação:</label>
                <select
                  id="obj_implementacao"
                  name="obj_implementacao"
                  value={saiba.obj_implementacao}
                  onChange={(e) => setSaiba({ ...saiba, obj_implementacao: e.target.value })}
                >
                  <option value="rural">Rural</option>
                  <option value="domestico">Doméstico</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>

              <div>
                <label htmlFor="orcamento">Orçamento Aproximado (R$):</label>
                <input
                  type="number"
                  id="orcamento"
                  name="orcamento"
                  value={saiba.orcamento}
                  onChange={(e) => setSaiba({ ...saiba, orcamento: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="necessidade_atendimento">Necessidade de Atendimento:</label>
                <select 
                  id="necessidade_atendimento"
                  name="necessidade_atendimento"
                  value={saiba.necessidade_atendimento}
                  onChange={(e) => setSaiba({ ...saiba, necessidade_atendimento: e.target.value })}
                >
                  <option value="instalacao">Instalação</option>
                  <option value="manutencao">Manutenção</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="usuario_es">Possui Sistema de Energia Sustentável:</label>
                <select 
                  id="usuario_es"
                  name="usuario_es"
                  value={saiba.usuario_es}
                  onChange={(e) => setSaiba({ ...saiba, usuario_es: e.target.value })}
                >
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferencia_contato">Preferência de Contato:</label>
                <select 
                  id="preferencia_contato" 
                  name="preferencia_contato"
                  value={saiba.preferencia_contato}
                  onChange={(e) => setSaiba({ ...saiba, preferencia_contato: e.target.value })}
                >
                  <option value="email">Email</option>
                  <option value="telefone">Telefone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div>
                <label htmlFor="contato">Contato:</label>
                <input 
                  type="text"
                  id="contato"
                  name="contato"
                  value={saiba.contato}
                  onChange={(e) => setSaiba({ ...saiba, contato: e.target.value })}
                />
              </div>

              <button type="submit">Enviar</button>
            </fieldset>
          </form>
        </section>
      </div>

    </div>
  );
};

export default Saiba;
