'use client';
import React from 'react';
import styles from './Methods.module.scss';
import Button from '../components/Button';

// Definindo os itens da lista
const listItems = [
  { id: 1, description: 'Fechar <span>clientes mais fácil</span> e aumentar o preço do seu serviço, fazendo sua empresa ser reconhecida como a melhor da sua cidade' },
  { id: 2, description: '<span>Aumentar o seu faturamento</span> com os mesmos scripts criados e validados por mim que já me ajudaram a faturar milhões com higienização e impermeabilização' },
  { id: 3, description: '<span>Vender com muito mais facilidade,</span> mesmo que você não tenha o hábito de vender' },
  { id: 4, description: 'Vai pode transformar o negócio de higienização em uma <span>empresa lucrativa</span>' },
  { id: 5, description: 'Vai <span>se tornar reconhecido</span> por ter um atendimento diferenciado;' },
  { id: 6, description: 'Vai <span>fidelizar os clientes</span> ao ponto deles nunca esquecerem de você ou do seus serviços;' }
];

const CustomSection: React.FC = () => {
  return (
    <>
      <section className={styles.customSection}>
        <h2 className={styles.title}>Arguição</h2>

        <div className={styles.container}>
          {/* Imagem Central */}
          <div className={styles.imageWrapper}>
            <img src="/image/tripleA.png" alt="Imagem Central" className={styles.centerImage} />
          </div>

          {/* Cards ao redor da imagem */}
          <div className={`${styles.card} ${styles.topCard}`}>
            <p>Você vai aprender a fazer com que o cliente reconheça sua marca como a melhor solução para o problema dele.</p>
          </div>

          <div className={`${styles.card} ${styles.leftCard}`}>
            <h3>Atração</h3>
            <p>Você vai descobrir os segredos para Atrair os melhores Clientes</p>
          </div>

          <div className={`${styles.card} ${styles.rightCard}`}>
            <h3>Ação</h3>
            <p>Fazer com que o cliente feche com você, mesmo cobrando ainda mais caro do que a concorrência.</p>
          </div>

          {/* Linhas conectando os cards */}
          <div className={styles.line}>
            <img src="/image/line1.svg" alt="Linha" className={styles.lineOne} />
          </div>
          <div className={styles.line}>
            <img src="/image/line2.svg" alt="Linha" className={styles.lineTwo} />
          </div>
          <div className={styles.line}>
            <img src="/image/line3.svg" alt="Linha" className={styles.lineTree} />
          </div>
        </div>
      </section>
      <section className={styles.mob}>
        <img className={styles.mobLogo} src="/image/Amob.png" alt="Logo Triple A" />
      </section>

      <section className={styles.down}>
        <div className="container">
          <h3 className={styles.downTitle}>Entenda como funciona<br /> o Método Triple A…</h3>
          <p className={styles.downText}>O Método Triple A foi dividido em 3 etapas rápidas e práticas para você poder extrair o máximo de conhecimento, aplicar imediatamente e já começar a multiplicar o seu faturamento nos próximos dias.</p>
          <div className={styles.mob}>
          <div className={styles.card}>
            <h3>Arguição</h3>
            <p>Você vai aprender a fazer com que o cliente reconheça sua marca como a melhor solução para o problema dele.</p>
          </div>

          <div className={styles.card}>
            <h3>Atração</h3>
            <p>Você vai descobrir os segredos para Atrair os melhores Clientes</p>
          </div>

          <div className={styles.card}>
            <h3>Ação</h3>
            <p>Fazer com que o cliente feche com você, mesmo cobrando ainda mais caro do que a concorrência.</p>
          </div>
        </div>
          <img id="scrollArrow" className={styles.downArrow} src="/image/arrowdown.svg" alt="Seta indicando para baixo" />
        </div>
        <div className={styles.lines}></div>
      </section>

      <section className={styles.list}>
        <div className="container">
          <h4 className={styles.listTitle}>Com o Método<br />  Triple A, você vai…</h4>
          <ul className={styles.listContent}>
            {listItems.map(item => (
              <li key={item.id} className={styles.listItem}>
                <img src="/image/icon-list-met.svg" alt="Ícone" className={styles.listIcon} />
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </li>
            ))}
          </ul>
          <br />
          <br />
          <Button text="SIM, QUERO TER ACESSO AO SCRIPT SECRETO" imageUrl="/image/icons-security.svg" />
        </div>
      </section>
    </>
  );
};

export default CustomSection;
