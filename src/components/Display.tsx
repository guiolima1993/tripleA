import React from 'react';
import styles from './Display.module.scss';
import Button from '../components/Button';
import CardPrice from '../components/CardPrice';
import CountdownTimer from '../components/CountdownTimer';

const Display: React.FC = () => {
  const listItems = [
    { icon: '/image/notes.png', description: 'Ter acesso aos mesmos scripts usados por mim que geraram milhões de reais com higienização de estofados no Brasil e no Exterior…' },
    { icon: '/image/headset.png', description: 'Ter um atendimento diferenciado que pode te destacar e colocar mais dinheiro no seu bolso…' },
    { icon: '/image/users.png', description: 'Ter clientes todos os dias te chamando querendo o seu serviço e te pagando muito bem por isso…' },
    { icon: '/image/stars.png', description: 'Ter acesso às técnicas de vendas que faz os clientes implorar pelos seus serviços, mesmo que eles chamem só por curiosidade.' }
  ];

  const cardPriceData = {
    logoSrc: '/image/logo-price.png',
    productImageSrc: '/image/metodos-price.png',
    title: 'Vamos relembrar tudo o que você vai receber:',
    items: [
      { description: 'Método Triple A: ', price: 'R$197' },
      { description: 'Método de Tráfego Orgânico no Instagram: ', price: 'R$147' },
      { description: 'Livro Digital Nunca Mais Seja Pobre: ', price: 'R$97' }
    ],
    oldPrice: 'R$441',
    finalPrice: 'R$47',
    cashPrice: 'OU R$197 à vista'
  };

  return (
    <section className={styles.displaySection}>
      <h2 className={styles.title}>
        Além do Método Triple A você vai receber mais 2 presentes <span>sem pagar nada</span> a mais por isso, para te ajudar a ganhar ainda mais dinheiro:
      </h2>
      <div className={styles.cardGrid}>
        <div className={`${styles.card} ${styles.firstCard}`}>
          <div className={styles.imageWrapper}>
            <img src="/image/display1.png" alt="Imagem do Card 1" className={styles.cardImage} />
          </div>
          <h3 className={styles.cardTitle}>Método de Tráfego Orgânico no Instagram</h3>
          <p className={styles.cardDescription}>Você vai descobrir como gerar 5x mais clientes pelo Instagram sem precisar investir nada do seu dinheiro e assim aumentar a sua lucratividade.</p>
          <div className={styles.cardPrice}>
            <span className={styles.strikeThrough}>R$ 299,99</span>
          </div>
        </div>
        <div className={`${styles.card} ${styles.secondCard}`}>
          <div className={styles.imageWrapper}>
            <img src="/image/display2.png" alt="Imagem do Card 2" className={styles.cardImage} />
          </div>
          <h3 className={styles.cardTitle}>Livro Digital Nunca Mais Seja Pobre</h3>
          <p className={styles.cardDescription}>Nesse livro digital eu vou revelar tudo o que eu fiz para me tornar um milionário, e como você pode fazer o mesmo, se seguir exatamente o que eu ensino neste livro.</p>
          <div className={styles.cardPrice}>
            <span className={styles.strikeThrough}>R$ 399,99</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Button text="QUERO RECEBER O MÉTODO E PRESENTES" imageUrl="/image/icons-security.svg" />
      <br />
      <br />
      <br />
      <div className={styles.imageWithContent}>
        <div className={styles.imageWrapper}>
          <img src="/image/money-tree.png" alt="Imagem Principal" className={styles.mainImage} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>Quanto vale pra você?</h3>
          <ul className={styles.list}>
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <img src={item.icon} alt="Ícone" className={styles.listIcon} />
                <span className={styles.listDescription}>{item.description}</span>
              </li>
            ))}
          </ul>
          <p className={styles.additionalDescription}>Eu acredito que você investiria um bom dinheiro por isso, certo? Mas hoje você vai receber tudo por um investimento baixíssimo…</p>
        </div>
      </div>
      <img id="scrollArrow" className={styles.downArrow} src="/image/arrowdown.svg" alt="Seta indicando para baixo" />
      <CardPrice
        logoSrc={cardPriceData.logoSrc}
        productImageSrc={cardPriceData.productImageSrc}
        title={cardPriceData.title}
        items={cardPriceData.items}
        oldPrice={cardPriceData.oldPrice}
        finalPrice={cardPriceData.finalPrice}
        cashPrice={cardPriceData.cashPrice}
      />
      <CountdownTimer />
      <div className={styles.bookDisplay}>
        <div className={styles.bookText}>
          <h6 className={styles.lastTitle}>Acesse todo o conteúdo por 7 dias, se você não gostar não precisa pagar!</h6>
          <p>Para que você tenha 100% de segurança e tranquilidade de saber que está fazendo um bom investimento, eu vou te dar um período de experiência. Durante 7 dias você pode estudar todo o conteúdo e decidir se deseja continuar ou não. Funciona assim:</p>

          <p>Você compra o Método Triple A e começa aplicar normalmente. Nos primeiros 7 dias após a compra, se você não tiver resultados, a qualquer momento você pode solicitar o reembolso do seu investimento e receber cada centavo de volta.</p>

          <p>Dessa forma você não tem nenhum risco. Ou você entra e começa a faturar mais com higienização e impermeabilização de estofados, ou você cancela dentro desses 7 dias e não perde nem um centavo.</p>

          <p>Não há motivos para ficar em dúvida, é só entrar e participar com a gente durante este período! Eu fico muito confiante em te dar essa garantia, porque tenho certeza de que você vai aplicar e ter os resultados que deseja!</p>
          <Button text="QUERO ME INSCREVER COM DESCONTO" imageUrl="/image/icons-security.svg" />
        </div>
        <div className={styles.bookImg}>
          <img className={styles.lastImg} src="/image/security-img.png" alt="Icone de compra segura" />
        </div>
      </div>
    </section>
  );
};

export default Display;
