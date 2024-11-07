import Link from 'next/link';
import React from 'react'

const Saiba = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Saiba mais</Link>
      </div>
        <h3>
            Painéis Interativos de Tipos de Energia: Solar, eólica, hidrelétrica e biomassa, cada um com uma breve explicação visual. Quando o visitante interage, abre-se uma explicação animada, mostrando como cada tipo contribui para um futuro sustentável.
            Infográficos Animados: Gráficos que mostram o impacto ambiental da energia renovável, incluindo redução de emissões de CO₂ e estatísticas sobre seu crescimento nos últimos anos.
            Mapa Mundial da Energia Limpa: Mapa interativo que destaca os países líderes em energia renovável e as fontes principais utilizadas, permitindo visualizar o avanço global.
        </h3>
    </div>
  )
}
export default Saiba;
