"use client";
import { TipoConta } from '@/types/types';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Calculadora = () => {
  const [mensagemFeedback, setMensagemFeedback] = useState('');
  const [calculo, setCalculo] = useState<TipoConta>({
    id_economia: 0,
    consumo_mensal_energia: '',
    custo_energia: '',
    economia_es: '',
    economia_total: '',
  });

  // Recupera os dados iniciais via GET
  useEffect(() => {
    const fetchDadosCalculadora = async () => {
      try {
        const response = await fetch('http://localhost:8080/economia'); // Endpoint fictício
        const data = await response.json();
        if (data) {
          // Preencher com dados iniciais, se necessário
        }
      } catch (error) {
        console.error('Erro ao recuperar dados iniciais:', error);
        setMensagemFeedback('Falha ao carregar os dados iniciais.');
      }
    };

    fetchDadosCalculadora();
  }, []);

  // Função para tratar as mudanças nos campos de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCalculo({
      ...calculo,
      [name]: value, // Atualiza o estado com o nome do campo e o valor
    });
  };

  // Função para calcular economia
  const calcularEconomia = async (e: React.FormEvent) => {
    e.preventDefault();

    // Converte os valores para números antes de enviar
    const consumoMensalEnergia = parseFloat(calculo.consumo_mensal_energia);
    const custoEnergia = parseFloat(calculo.custo_energia);
    const economiaEs = parseFloat(calculo.economia_es);

    // Verifica se os valores são válidos
    if (isNaN(consumoMensalEnergia) || isNaN(custoEnergia) || isNaN(economiaEs)) {
      setMensagemFeedback('Por favor, insira valores válidos para todos os campos.');
      return;
    }

    const economiaTotal = consumoMensalEnergia * custoEnergia * (economiaEs / 100);

    // Atualiza o estado com a economia calculada
    setCalculo({
      ...calculo,
      economia_total: economiaTotal.toFixed(2), // Mostra 2 casas decimais
    });

    // Envia os dados para o servidor via POST
    try {
      const response = await fetch('http://localhost:8080/economia', {
        method: 'POST', // Use PUT se for uma atualização
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          consumo_mensal_energia: consumoMensalEnergia,
          custo_energia: custoEnergia,
          economia_es: economiaEs,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setMensagemFeedback('Cálculo realizado com sucesso!');
      } else {
        setMensagemFeedback('Falha ao enviar os dados para o servidor.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setMensagemFeedback('Erro ao calcular economia.');
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
                  value={calculo.consumo_mensal_energia}
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
                  value={calculo.custo_energia}
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
                  value={calculo.economia_es}
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
                <label htmlFor="economia_total">Percentual de Economia com Energia Solar (%):</label>
                <input
                  type="number"
                  id="economia_total"
                  name="economia_total"
                  value={calculo.economia_total}
                  onChange={handleChange}
                  placeholder="Ex: 70"
                  required
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
