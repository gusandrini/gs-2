import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Face from '@/Image/facebook.png';
import Insta from '@/Image/instagram.png';

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
            <li>
              <Link className='facebook' target='_blank' rel='noopener' title='site Facebook' href="/">
                <Image src={Face} alt='Facebook' />
              </Link>
            </li>
            <li>
              <Link className='instagram' target='_blank' rel='noopener' title='site Instagram' href="/">
                <Image src={Insta} alt='Instagram' />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Rodape;
