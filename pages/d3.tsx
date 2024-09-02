'use client';
import React, { useEffect, useState } from 'react';
import "../src/app/globals.css";

const Upsell = () => {
  const vturbVideoHtml = `
  <script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="66d47212d2b3ac000cb6201f"></script> <div id="ifr_66d47212d2b3ac000cb6201f_wrapper" style="margin: 0 auto; width: 100%"> <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_66d47212d2b3ac000cb6201f_aspect"> <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66d47212d2b3ac000cb6201f/embed.html" id="ifr_66d47212d2b3ac000cb6201f" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe> </div> </div> <style> .elementor-element:has(#ifr_66d47212d2b3ac000cb6201f_wrapper) { width: 100%; } </style>
  `;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90 ) {
          clearInterval(interval);
          return oldProgress;
        }
        return oldProgress + 1;
      });
    }, 60);
  }, []);

  const handleAccept = () => {
    window.location.href = 'https://pay.hotmart.com/W95095167O'; 
  };

  const handleDecline = () => {
    window.location.href = '/d3'; 
  };

  return (
    <section className="upsell-section">
      <div className="content-container">
        <div className="progress-bar-background">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>

        <h1 className="upsell-headline">Minha última oportunidade pra você…</h1>

        <p className='upsell-subheadline'>Saia na frente da concorrência e pegue todos os clientes primeiro!</p>
        
        <div className="upsell-video" dangerouslySetInnerHTML={{ __html: vturbVideoHtml }} />
        
        <div className="upsell-buttons">
        <button
            className="upsell-accept-button"
            onClick={handleAccept}
          >
            ADICIONAR AO PACOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Upsell;
