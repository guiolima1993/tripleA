'use client';
import React, { useState } from 'react';
import styles from './Ceo.module.scss';

interface AccordionItem {
  question: string;
  answer: string;
  iconSrc: string;
  expandedIconSrc: string;
}

interface CeoProps {
  faq: AccordionItem[];
}

const Ceo: React.FC<CeoProps> = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.ceoContainer}>
      <div className={styles.ceoContent}>
        <img
          src="https://cdn.shopify.com/s/files/1/0709/7086/7961/files/image-tv.webp?v=1723986043"
          alt="CEO"
          className={styles.ceoImage}
        />
        <div className={styles.texts}>
          <h6 className={styles.textsInfo}>A mente por trás de tudo</h6>
          <h3 className={styles.textsName}>
            Fritz Paixão <img className={styles.check} src="/image/check-name.png" alt="Check Name Fritz Paixao" />
          </h3>
          <p className={styles.text}>
            Prazer, meu nome é Fritz Paixão e depois que descobri como atuar neste mercado, eu larguei a <span>carreira de apresentador</span> de TV do Multishow, apenas para lavar estofados.
          </p>
          <p className={styles.text}> Pode até parecer estranho, mas hoje eu...</p>
          <ul className={styles.list}>
            <li>
              <div className={styles.bgIcon}><img src="/image/list-1.png" alt="Icone Realidade" /></div>
              <p>Mudei por completo minha realidade</p>
            </li>
            <li>
              <div className={styles.bgIcon}><img src="/image/list-2.png" alt="Icone Realidade" /></div>
              <p>Transformei meu negócio em uma franquia presente em 4 continentes e 12 países</p>
            </li>
            <li>
              <div className={styles.bgIcon}><img src="/image/list-3.png" alt="Icone Realidade" /></div>
              <p>Me tornei o empreendedor mais reconhecido e premiado do segmento</p>
            </li>
            <li>
              <div className={styles.bgIcon}><img src="/image/list-4.png" alt="Icone Realidade" /></div>
              <p>Tenho apoiado centenas de outros lavadores de sofá</p>
            </li>
            <li className={styles.last}>
              <div className={styles.bgIcon}><img src="./image/list-5.png" alt="Icone Realidade" /></div>
              <p>Descobri uma mina de ouro inexplorada nesse segmento.</p>
            </li>
          </ul>
          <p className={styles.colorYellow}>"Mas se é tão bom, porque tem pouca gente atuando?"</p>
          <p className={styles.colorWhite}>Porque pouca gente sabe que esse mercado dá dinheiro!</p>
          <p className={styles.colorWhite}>Foi este mercado que permitiu eu conhecer o mundo, morar em Miami com minha família, realizar o sonho da casa própria e comprar o carro que sempre sonhei.</p>
          <p className={styles.colorYellow}>Agora chegou a hora de mostrar como VOCÊ TAMBÉM pode mudar a sua vida usando meu conhecimento, um detergente, uma escova e o seu celular.</p>
        </div>
      </div>

      <img className={styles.logoFaq} src="/image/logo-faq.png" alt="Logo Triple A" />

      <div className={styles.accordionSection}>
        <h2 className={styles.accordionTitle}>
          Ainda em dúvida? Então veja algumas das dúvidas mais frequentes:
        </h2>
        {faq.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(index)}>
              <span>{item.question}</span>
              <img
                src={activeIndex === index ? item.expandedIconSrc : item.iconSrc}
                alt="Toggle"
                className={styles.accordionIcon}
              />
            </div>
            {activeIndex === index && (
              <div className={styles.accordionContent}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ceo;
