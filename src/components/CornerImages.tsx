'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './CornerImages.module.scss';

const CornerImages: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.cornerImages}>
      <Image
        src="/image/paper1.png"
        alt="Script papel"
        className={styles.topLeft}
        width={200}
        height={200}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <Image
        src="/image/paper2.png"
        alt="Script em papel"
        className={styles.topRight}
        width={200}
        height={200}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }} 
      />
    </div>
  );
};

export default CornerImages;
