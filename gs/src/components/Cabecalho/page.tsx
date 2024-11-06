import React from 'react';
import Link from 'next/link';
import { headers } from 'next/headers';

const Cabecalho = () => {
  return (
    <header>
        <div className="container-cabecalho">
            <div className="menu">
                <nav>
                <ul>
                    <li><Link href="/" className="link">Teste1</Link></li>
                    <li><Link href="/" className="link">Teste2</Link></li>
                    <li><Link href="/" className="link">Teste3</Link></li>
                    <li><Link href="/" className="link">Teste4</Link></li>
                </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Cabecalho;
