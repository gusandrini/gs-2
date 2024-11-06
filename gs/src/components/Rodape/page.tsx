import React from 'react'
import Link from 'next/link';

const Rodape = () => {
  return (
    <div>
        <footer>
            <div className="parceiros">
                <h2 className="titulo_rodape"></h2>
                <ul>
                    <li><Link className='' href='/'></Link></li>
                    <li><Link className='' href='/'></Link></li>
                    <li><Link className='' href='/'></Link></li>
                </ul>
            </div>

            <div className="redes_sociais">
                <div className="parceiros">
                    <h2 className="titulo_rodape"></h2>
                    <ul>
                        <li><Link className='' href='/'></Link></li>
                        <li><Link className='' href='/'></Link></li>
                        <li><Link className='' href='/'></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}
export default Rodape;
