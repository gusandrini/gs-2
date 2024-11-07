import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EcoBot from '@/Image/ecobot.png'

const Cabecalho = () => {
  return (
    <header>
        <div className="login_inicio">
            <button><Link href="/login">Log in</Link></button>
        </div>
        <div className="foto_menu">
        <Link href="/">
            <Image
            src={EcoBot}
            alt='Logo da EcoBot'
            />
        </Link>
        </div>
        <div className="container-cabecalho">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link href="/sobre" className="link">SOBRE NÓS</Link></li>
                        <li><Link href="/blog" className="link">BLOG</Link></li>
                        <li><Link href="/desafios" className="link">DESAFIOS</Link></li>
                        <li><Link href="/contato" className="link">CONTATO</Link></li>
                        <li><Link href="/" className="link">ECOBOT</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Cabecalho;
