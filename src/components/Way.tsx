import React from 'react';
import styles from './Way.module.scss';
import Button from '../components/Button';

interface WayItem {
  imageSrc: string;
  title: string;
  description: string;
}

interface WayProps {
  leftItem: WayItem;
  centerText: string;
  rightItem: WayItem;
}

const Way: React.FC<WayProps> = ({ leftItem, centerText, rightItem }) => {
  return (
    <div className={styles.waySection}>
      <h2 className={styles.title}>Agora você tem 2 possíveis caminhos a seguir…</h2>
      <div className={styles.wayContent}>
        <div className={styles.wayItem}>
          <img src={leftItem.imageSrc} alt={leftItem.title} className={styles.wayImage} />
          <h3 className={styles.wayTitle}>{leftItem.title}</h3>
          <p className={styles.wayDescription}>{leftItem.description}</p>
        </div>
        <div className={styles.wayText}>
          <p>{centerText}</p>
        </div>
        <div className={styles.wayItem}>
          <img src={rightItem.imageSrc} alt={rightItem.title} className={styles.wayImage} />
          <h3 className={styles.wayTitle}>{rightItem.title}</h3>
          <p className={styles.wayDescription}>{rightItem.description}</p>
        </div>
      </div>
      <Button text="QUERO TESTAR POR 7 DIAS GRÁTIS E SEM RISCOS" imageUrl="/image/icons-security.svg" /> 
    </div>
  );
};

export default Way;
