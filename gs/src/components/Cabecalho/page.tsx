import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EcoBot from '@/Image/ecobot.png'

const Cabecalho = () => {
  return (
    <header>
        <div className="foto_menu">
        <div className="login_inicio">
            <button className="botao_inicio"><Link href="/login">Login</Link></button>
        </div>

        <Link href="/">
            <Image
            src={EcoBot}
            alt='Logo da EcoBot'
            />
        </Link>

        <div className="perfil_inicio">
            <button className="botao_inicio"><Link href="/perfil">Perfil</Link></button>
        </div>
        </div>
        
        

        

        <div className="container-cabecalho">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link href="/sobre" className="link">SOBRE NÓS</Link></li>
                        <li><Link href="/blog" className="link">BLOG</Link></li>
                        <li><Link href="/desafios" className="link">DESAFIOS</Link></li>
                        <li><Link href="/contato" className="link">CONTATO</Link></li>
                        <li><Link href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=ee9d55a3-29ed-4126-93b6-10efbc270a95&serviceInstanceID=609fa58f-fe11-4167-b11c-79f1243e9d94 " className="link">ECOBOT</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Cabecalho;
