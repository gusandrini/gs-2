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
                    <li><Link href="/" className="link">Home</Link></li>
                    <li><Link href="/" className="link"></Link></li>
                    <li><Link href="/" className="link"></Link></li>
                    <li><Link href="/" className="link"></Link></li>
                    <li><Link href="/" className="link"></Link></li>
                </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Cabecalho;
