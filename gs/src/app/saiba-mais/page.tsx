import Link from 'next/link';
import React from 'react'

const Saiba = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Saiba mais</Link>
      </div>
      <div className="introducao_saiba">
        <h1>
        O que é Energia Sustentável?
        </h1>
        <p>
          Energia sustentável refere-se a fontes de energia que podem ser utilizadas sem comprometer a capacidade das gerações futuras de 
          atenderem às suas necessidades energéticas. Trata-se de um conceito voltado para o uso de recursos renováveis e de baixo impacto 
          ambiental, promovendo um equilíbrio entre desenvolvimento e preservação do meio ambiente.
        </p>
      </div>

      <div className="princi_fontes">
        <h1>
          Principais Fontes de Energia Sustentável
        </h1>
        <div className="solar">
          <h2>
            Energia solar
          </h2>
          <p>
          Captada através de painéis solares, essa energia converte a luz do sol em eletricidade ou calor. É limpa, abundante e pode ser usada 
          em diversas escalas, desde residências até grandes indústrias.
          </p>
        </div>

        <div className="eolica">
          <h2>
            Energia Eólica
          </h2>
          <p>
          Gerada pelo vento, essa energia é captada por turbinas eólicas, que convertem o movimento do vento em eletricidade. É altamente 
          eficiente em áreas com ventos constantes e reduz significativamente as emissões de carbono.
          </p>
        </div>

        <div className="biomassa">
          <h2>
            Biomassa
          </h2>
          <p>
          A biomassa inclui materiais orgânicos, como resíduos agrícolas e florestais, que podem ser convertidos em energia através de 
          processos como combustão ou digestão anaeróbica. Ela aproveita materiais que seriam descartados e os transforma em uma fonte de 
          energia renovável.
          </p>
        </div>

        <div className="hidraeletrica">
          <h2>
            Energia Hidraelétrica de Pequena Escala
          </h2>
          <p>
          Embora a energia hidrelétrica tradicional possa causar impactos ambientais, as pequenas usinas hidrelétricas (PCHs) são uma alternativa 
          com menos impactos, aproveitando a força da água em pequenas quedas ou rios sem necessidade de grandes barragens.
          </p>
        </div>

        <div className="geotermica">
          <h2>
            Energia Geotérmica
          </h2>
          <p>
          Essa fonte utiliza o calor interno da Terra para gerar eletricidade ou aquecer ambientes. Embora mais comum em áreas geologicamente 
          ativas, a geotermia é uma opção promissora e contínua em algumas regiões.
          </p>
        </div>
      </div>


    <div className="beneficios">
      <h1>
      Benefícios da Energia Sustentável
      </h1>
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
      <h1>
      Como a Energia Sustentável Impacta o Futuro
      </h1>
      <p>
      O uso de energia sustentável está cada vez mais no centro das discussões sobre o futuro do planeta. Com a crescente demanda energética e as 
      mudanças climáticas, é fundamental que países e indivíduos adotem práticas e tecnologias mais limpas e eficientes.
      </p>
    </div>

    <div className="iniciativas">
      <h1>
      Iniciativas para um Futuro Sustentável:
      </h1>
      <p>
      Empresas, governos e comunidades ao redor do mundo estão inovando para tornar a energia sustentável mais acessível e prática para todos. 
      Incentivos governamentais, investimentos em pesquisa e desenvolvimento, e a expansão de redes inteligentes estão ajudando a tornar essa 
      realidade mais próxima.
      </p>
    </div>

    <div className="porque_investir">
      <h1>
      Por que Investir em Energia Sustentável?
      </h1>
      <p>
      Investir em energia sustentável não é apenas uma escolha ambientalmente responsável, mas também econômica. A transição para energias 
      renováveis representa uma oportunidade de preservar o planeta enquanto promove o desenvolvimento econômico sustentável.
      </p>
    </div>

    <div className="use">
      <h1>
        Aplique em seu dia a dia
      </h1>
    </div>

    <div className="energias">
      <section className="senergia">
        <form className="fenergia">
          <div className="fontes_energia">
            <h1>FONTES DE ENERGIA</h1>
          </div>
          
          <fieldset>
            {/* <!-- Tipo de Energia de Interesse --> */}
            <div>
              <label htmlFor="tipo_energia">Tipo de Energia de Interesse:</label>
              <select id="tipo_energia">
                <option value="solar">Energia Solar</option>
                <option value="eolica">Energia Eólica</option>
                <option value="biomassa">Biomassa</option>
                <option value="hidreletrica">Hidrelétrica</option>
                <option value="geotermica">Geotérmica</option>
                <option value="outra">Outras</option>
              </select>
            </div>

            {/* <!-- Localização Geográfica --> */}
            <div>
              <label htmlFor="localizacao">Localização Geográfica:</label>
              <select id="localizacao">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>

            {/* <!-- Consumo Mensal de Energia --> */}
            <div>
              <label htmlFor="consumo_mensal">Consumo Mensal de Energia (kWh):</label>
              <input 
                type="number"
                id="consumo_mensal"
                placeholder="Ex: 500"
              />
            </div>

            {/* <!-- Objetivo da Implementação --> */}
            <div>
              <label htmlFor="objetivo">Objetivo da Implementação:</label>
              <select id="objetivo">
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
                <option value="industrial">Industrial</option>
                <option value="rural">Rural</option>
              </select>
            </div>

            {/* <!-- Orçamento Aproximado --> */}
            <div>
              <label htmlFor="orcamento">Orçamento Aproximado (R$):</label>
              <input 
                type="number"
                id="orcamento"
                placeholder="Ex: 10000"
              />
            </div>

            {/* <!-- Necessidade de Consultoria Técnica --> */}
            <div>
              <label htmlFor="consultoria_tecnica">Necessidade de Consultoria Técnica:</label>
              <input 
                type="checkbox"
                id="consultoria_tecnica"
              /> Sim
            </div>

            {/* <!-- Possui Sistema Atual? --> */}
            <div>
              <label htmlFor="sistema_atual">Possui Sistema Atual de Energia Sustentável?</label>
              <input 
                type="checkbox"
                id="sistema_atual"
              /> Sim
            </div>

            {/* <!-- Preferências de Contato --> */}
            <div>
              <label htmlFor="preferencia_contato">Preferência de Contato:</label>
              <select id="preferencia_contato">
                <option value="email">Email</option>
                <option value="telefone">Telefone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              <input 
                type="text"
                id="contato"
                placeholder="Seu contato"
              />
            </div>


            <div className="center">
              <button type="submit" className="botao_submit">Enviar</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>


    </div>
  )
}
export default Saiba;
