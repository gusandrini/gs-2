import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Face from '@/Image/facebook.png';
import Insta from '@/Image/instagram.png';
import GitHub from '@/Image/github.png';

const Rodape = () => {
  return (
    <div>
      <footer>
        <h2 className="titulo_rodape">
            PARCEIROS
        </h2>
        <div className="parceiros">
          <ul>
            <li><Link className='fiap' href='https://www.fiap.com.br/'>FIAP</Link></li>
          </ul>
        </div>

        
        <h2 className="titulo_rodape">
            REDES SOCIAIS
        </h2>
        <div className="redes_sociais">
          <div className="face">
            <ul>
              <li>
                <Link className='facebook' target='_blank' rel='noopener' title='site Facebook' href="/">
                  <Image src={Face} alt='Facebook' />
                </Link>
              </li>
            </ul>
          </div>

          <div className="insta">
            <ul>
              <li>
                <Link className='instagram' target='_blank' rel='noopener' title='site Instagram' href="/">
                  <Image src={Insta} alt='Instagram' />
                </Link>
              </li>
            </ul>
          </div>

          <div className="git">
            <ul>
              <li>
                <Link className='GitHub' target='_blank' rel='noopener' title='site GitHub' href="/">
                  <Image src={GitHub} alt='GitHub' />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Rodape;
