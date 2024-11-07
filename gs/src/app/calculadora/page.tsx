import Link from 'next/link';
import React from 'react'

const Calculadora = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Calculado de Economia</Link>
      </div>
      <div className="calculadora_economia">
          <h1>
            Calculadora de Economia com Energia Sustentável
          </h1>
          <p>
            Descubra quanto você pode economizar ao investir em energia renovável! Nossa calculadora permite que você estime as economias potenciais ao adotar sistemas de energia solar para sua casa ou empresa. Insira seus dados e veja os resultados para planejar um futuro mais sustentável.
          </p>

        <section className="formulario-calculadora">
          <form className="form-calculadora">
            <fieldset>
              <legend>Calcule sua Economia</legend>

              <div>
                <label htmlFor="consumo">Consumo Mensal de Energia (kWh):</label>
                <input 
                  type="number" 
                  id="consumo" 
                  placeholder="Ex: 300" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="custo-energia">Custo da Energia (R$/kWh):</label>
                <input 
                  type="number" 
                  id="custo-energia" 
                  placeholder="Ex: 0.50" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="percentual-economia">Percentual de Economia com Energia Solar (%):</label>
                <input 
                  type="number" 
                  id="percentual-economia" 
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
          <h2>
            Resultado Estimado
          </h2>
          <p>
            Após preencher os campos acima e clicar em "Calcular Economia", você verá aqui o valor aproximado que poderá economizar em sua conta de energia ao adotar a energia solar.
          </p>
          <p>Economia Mensal Estimada: R$ <span id="resultado-mensal">0,00</span></p>
          <p>Economia Anual Estimada: R$ <span id="resultado-anual">0,00</span></p>
        </div>

      </div>

    </div>
  )
}
export default Calculadora;
