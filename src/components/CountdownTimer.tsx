'use client';
import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.scss';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60 * 1000); // 10 minutos em milissegundos
  const [milliseconds, setMilliseconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 100; // Atualiza a cada 100 ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Atualiza os milissegundos a cada intervalo
    const interval = setInterval(() => {
      setMilliseconds(prev => (prev < 90 ? prev + 100 : 0));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = (time % 1000) / 10; // Dividido por 10 para mostrar milissegundos em centésimos
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownTimer}>
        {formatTime(timeLeft)}
      </div>
      <p className={styles.description}>
        A minha missão é te ajudar a construir um negócio de higienização lucrativo, por isso, <span>esse preço não será mantido por muito tempo!</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
