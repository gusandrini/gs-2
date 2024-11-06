import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EcoBot from '@/Image/ecobot.png'

const Cabecalho = () => {
  return (
    <header>
        <div className="foto_menu">
            <Image
            src={EcoBot}
            alt='Logo da EcoBot'
            />
        </div>
        <div className="container-cabecalho">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link href="/" className="link">home</Link></li>
                        <li><Link href="/saiba-mais" className="link">saiba mais</Link></li>
                        <li><Link href="/calculadora" className="link">calculadora</Link></li>
                        <li><Link href="/projetos" className="link">projetos</Link></li>
                        <li><Link href="/blog" className="link">blog</Link></li>
                        <li><Link href="/desafios" className="link">desafios</Link></li>
                        <li><Link href="/contato" className="link">contato</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Cabecalho;
