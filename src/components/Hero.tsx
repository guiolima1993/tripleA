import React from 'react';
import Image from 'next/image';
import './Hero.scss';
import Button from '../components/Button';
import Midia from '../components/Midia';

interface HeroProps {
  buttonIconSrc: string;
  headline: string;
  subheadline: string;
  videoEmbedCode: string
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  videoEmbedCode
}) => {
  return (
    <section className="hero-section">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <img className='logoA' src="/image/logo-price.png" alt="Logo trple a" />
        <h1 dangerouslySetInnerHTML={{ __html: headline }} className='hero-section-title' />
        <p className='hero-section-subtitle'>{subheadline}</p>
        <div className="video-wrapper">
          <div dangerouslySetInnerHTML={{ __html: videoEmbedCode }} />
        </div>
        <br />
        <br />
        <Button text="SIM, QUERO TER ACESSO AO SCRIPT SECRETO" imageUrl="/image/icons-security.svg" /> 
      </div>
      <Midia />
    </section>
  );
};

export default Hero;
