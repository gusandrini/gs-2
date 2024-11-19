"use client";
import { TipoConta } from '@/types/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Calculadora = () => {
  const [calculo, setCalculo] = useState<TipoConta>({
    id_economia: 0,
    consumo_mensal_energia: '',
    custo_energia: '',
    economia_es: '',
    economia_total: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [mensagemFeedback, setMensagemFeedback] = useState<string>('');

  // Recupera os dados iniciais via GET
  useEffect(() => {
    const fetchDadosCalculadora = async () => {
      try {
        const response = await fetch('http://localhost:8080/economia');
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
    setIsLoading(true); // Ativa o carregamento enquanto calcula
    setMensagemFeedback(''); // Limpa mensagens anteriores

    // Converte os valores para números antes de enviar
    const consumoMensalEnergia = parseFloat(calculo.consumo_mensal_energia);
    const custoEnergia = parseFloat(calculo.custo_energia);
    const economiaEs = parseFloat(calculo.economia_es);

    // Verifica se os valores são válidos
    if (isNaN(consumoMensalEnergia) || isNaN(custoEnergia) || isNaN(economiaEs)) {
      setMensagemFeedback('Por favor, insira valores válidos para todos os campos.');
      setIsLoading(false); // Desativa o carregamento
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          consumo_mensal_energia: consumoMensalEnergia,
          custo_energia: custoEnergia,
          economia_es: economiaEs,
        }),
      });

      // Verifica o status da resposta
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao enviar os dados:', errorData); // Log da resposta de erro
        setMensagemFeedback('Falha ao enviar os dados para o servidor.');
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      if (data.success) {
        setMensagemFeedback('Cálculo realizado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para resetar os campos e o estado para permitir novo cálculo
  const novoCalculo = () => {
    setCalculo({
      id_economia: 0,
      consumo_mensal_energia: '',
      custo_energia: '',
      economia_es: '',
      economia_total: '',
    });
    setMensagemFeedback(''); // Limpa qualquer mensagem de feedback
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
                  min="0"
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
                  min="0"
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
                  min="0"
                  required
                />
              </div>

              <div className='calcular'>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Calculando...' : 'Calcular Economia'}
                </button>
              </div>
            </fieldset>
          </form>
        </section>

        <div className="resultado_calculadora">
          <h2>Resultado Estimado</h2>
          <p>
            Após preencher os campos acima e clicar em &quot;Resultado aqui&quot;, você verá aqui o valor aproximado que poderá economizar em sua conta de energia ao adotar a energia solar.
          </p>
          <p>Economia Mensal Estimada: R$ <span id="resultado-mensal">{calculo.economia_total}</span></p>
        </div>

        {/* Exibe mensagem de feedback */}
        {mensagemFeedback && (
          <div className="mensagem-feedback">
            <p>{mensagemFeedback}</p>
          </div>
        )}

        {/* Botão para novo cálculo */}
        <div className='btn_atualizar'>
          <h2>Deseja fazer outro cálculo?</h2>
          <button onClick={novoCalculo}>Clique aqui</button>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
