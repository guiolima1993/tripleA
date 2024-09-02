import React from 'react';
import styles from './CtaCards.module.scss';

const cardItems = [
  {
    id: 1,
    icon: '/image/sofa.png',
    description: 'Já tem uma empresa de higienização de estofados e quer aumentar o faturamento',
  },
  {
    id: 2,
    icon: '/image/money.png',
    description: 'Quer vender mais, agregando valor ao seu serviço e ser reconhecido',
  },
  {
    id: 3,
    icon: '/image/bau.png', 
    description: 'Quer ter acesso a um método secreto que já transformou pessoas normais em empreendedores extraordinários',
  },
];

const CtaCards: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>O Método Triple A<br></br> é para você:</h2>
      <div className={styles.cardGrid}>
        {cardItems.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={item.icon} alt={`Ícone ${item.id}`} className={styles.icon} />
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CtaCards;
