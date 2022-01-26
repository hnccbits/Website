import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { VscClose } from 'react-icons/vsc';
import styles from './index.module.css';

function Notice() {
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Mount this notice only in the client side, not while generating pages on server
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      document.documentElement.classList.add('scroll-lock');
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove('scroll-lock');
      }, 300);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, isTransitioning]);

  const unmount = useCallback(() => {
    setIsMounted(false);
  }, []);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <section className={`${styles.root}`}>
      <div
        className={`${styles.backdrop} ${
          isTransitioning && isMounted ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={unmount}
      />
      <div
        className={`${styles.content} ${
          isTransitioning && isMounted ? styles.active : ''
        }`}
      >
        <div className="grid gap-4">
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
          <h3 className="text-xl">
            Hell lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Inventore recusandae corrupti hic deserunt dicta voluptas sit odit
            totam quisquam minima, iusto voluptate praesentium, omnis, magni
            accusantium asperiores at rerum quaerat? o World
          </h3>
        </div>
      </div>
      <div
        onClick={unmount}
        className={`${styles.closeIcon} ${
          isTransitioning && isMounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <VscClose size={32} />
      </div>
    </section>,
    document.getElementById('overlay')
  );
}
export default Notice;
