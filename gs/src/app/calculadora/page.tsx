"use client";
import { useState, useEffect } from 'react';
import { TipoConta } from '@/types/types';
import Link from 'next/link';

const Calculadora = () => {
  const [mensagemFeedback, setMensagemFeedback] = useState('');
  const [calculo, setCalculo] = useState<TipoConta>({
    id_economia: 0,
    consumo_mensal_energia: '',
    custo_energia: '',
    economia_es: '',
    economia_total: '',
  });


  useEffect(() => {
    chamadaApi(); // Chama a API quando o componente é montado
  }, []);

  // Função para chamar a API e recuperar os dados do usuário
  const chamadaApi = async () => {
    try {
      const response = await fetch('http://localhost:8080/economia');
      const data = await response.json();
      if (data) {
        setCalculo({
          ...data,
          economia_total: data.economia_total || '', // Garante que 'economia_total' seja atualizado
        });
      } else {
        setMensagemFeedback('Nenhum dado encontrado.');
      }
    } catch (error) {
      console.error("Falha na listagem", error);
      setMensagemFeedback('Falha ao carregar os dados.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCalculo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calcularEconomia = async (e: React.FormEvent) => {
    e.preventDefault();

    const consumoMensalEnergia = parseFloat(calculo.consumo_mensal_energia);
    const custoEnergia = parseFloat(calculo.custo_energia);
    const economiaEs = parseFloat(calculo.economia_es);

    if (isNaN(consumoMensalEnergia) || isNaN(custoEnergia) || isNaN(economiaEs)) {
      setMensagemFeedback('Por favor, insira valores válidos para todos os campos.');
      return;
    }

    const economiaTotal = consumoMensalEnergia * custoEnergia * (economiaEs / 100);
    const economiaFinal = economiaTotal.toFixed(2);

    try {
      const response = await fetch('http://localhost:8080/economia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...calculo,
          consumo_mensal_energia: consumoMensalEnergia,
          economia_total: economiaFinal,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro na resposta do servidor: ${errorText}`);
      }

      setMensagemFeedback('Cálculo realizado com sucesso!');
      setCalculo({
        id_economia: 0,
        consumo_mensal_energia: '',
        custo_energia: '',
        economia_es: '',
        economia_total: '',
      });
      chamadaApi(); // Atualiza os dados após o cálculo
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error('Erro ao enviar os dados:', error);
      setMensagemFeedback(`Erro ao calcular economia: ${errorMessage}`);
    }
  };

  return (
    <div>
      <div className="paginas">
        <Link href="/">Home / Calculadora de Economia</Link>
      </div>
      <div className="calculadora_economia">
        <h1>Calculadora de Economia com Energia Sustentável</h1>
        <p>
          Descubra quanto você pode economizar ao investir em energia renovável! Nossa calculadora permite que você estime as economias potenciais ao adotar sistemas de energia solar para sua casa ou empresa. Insira seus dados e veja os resultados para planejar um futuro mais sustentável.
        </p>

        <section className="formulario-calculadora">
          <form className="form-calculadora" onSubmit={calcularEconomia}>
            <fieldset>
              <legend>Calcule sua Economia</legend>

              <div>
                <label htmlFor="consumo_mensal_energia">Consumo Mensal de Energia (kWh):</label>
                <input
                  type="number"
                  id="consumo_mensal_energia"
                  name="consumo_mensal_energia"
                  value={calculo.consumo_mensal_energia || ''}
                  onChange={handleChange}
                  placeholder="Ex: 300"
                  required
                />
              </div>

              <div>
                <label htmlFor="custo_energia">Custo da Energia (R$/kWh):</label>
                <input
                  type="number"
                  id="custo_energia"
                  name="custo_energia"
                  value={calculo.custo_energia || ''}
                  onChange={handleChange}
                  placeholder="Ex: 0.50"
                  required
                />
              </div>

              <div>
                <label htmlFor="economia_es">Percentual de Economia com Energia Solar (%):</label>
                <input
                  type="number"
                  id="economia_es"
                  name="economia_es"
                  value={calculo.economia_es || ''}
                  onChange={handleChange}
                  placeholder="Ex: 70"
                  required
                />
              </div>

              <div className="center">
                <button type="submit" className="botao-calcular">Calcular Economia</button>
              </div>
            </fieldset>
          </form>
        </section>

        <div className="resultado_calculadora">
          <h2>Resultado Estimado</h2>
          <p>
            Após preencher os campos acima e clicar em "Calcular Economia", você verá aqui o valor aproximado que poderá economizar em sua conta de energia ao adotar a energia solar.
          </p>

          <section className="formulario-calculadora">
            <form className="form-calculadora">
              <div>
                <label htmlFor="economia_total">Economia Total Estimada (R$):</label>
                <input
                  type="number"
                  id="economia_total"
                  name="economia_total"
                  value={calculo.economia_total || '0.00'} 
                  readOnly
                />
              </div>
            </form>
          </section>
        </div>

        {mensagemFeedback && <p>{mensagemFeedback}</p>}
      </div>
    </div>
  );
};

export default Calculadora;
