// midia.tsx
import React from 'react';
import './Midia.scss';
import Button from '../components/Button';

const Midia: React.FC = () => {
  return (
    <>
      <section className="midia">
        <div className='container'>
          <div className="media-section">
            <h2>Esse Script de Vendas foi o responsável por grande parte desse resultado:</h2>
            <div className="media-images">
              <img src="/image/midia-1.webp" alt="Imagem 1" className="media-image" />
              <img src="/image/midia-2.png" alt="Imagem 2" className="media-image" />
            </div>
          </div>
        </div>
      </section>
      <Button text="SIM, QUERO TER ACESSO AO SCRIPT SECRETO" imageUrl="/image/icons-security.svg" />
      <section className="cta">
        <div className="cta-section">
          <h2 className="cta-title">Por 8 anos, guardei esse<br></br> segredo a 7 chaves…</h2>
          <p className="cta-text">E agora, pela primeira vez, resolvi revelá-lo em um treinamento secreto, que chamei de método TRIPLE A…</p>
        </div>
        <div className='lines'>
          <img src="/image/test.svg" alt="" />
          <img className='lines-two' src="/image/test.svg" alt="" />
          <img className='lines-tree' src="/image/test.svg" alt="" />
          <img className='ellipse' src="/image/ellipse-green.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Midia;
