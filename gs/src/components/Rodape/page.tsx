import React from 'react'
import Link from 'next/link';

const Rodape = () => {
  return (
    <div>
        <footer>
            <div className="parceiros">
                <h2 className="titulo_rodape"></h2>
                <ul>
                    <li><Link className='' href='/'>1</Link></li>
                    <li><Link className='' href='/'>2</Link></li>
                    <li><Link className='' href='/'>3</Link></li>
                </ul>
            </div>

            <div className="redes_sociais">
                <h2 className="titulo_rodape"></h2>
                <ul>
                    <li><Link className='' href='/'>4</Link></li>
                    <li><Link className='' href='/'>5</Link></li>
                    <li><Link className='' href='/'>6</Link></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}
export default Rodape;
