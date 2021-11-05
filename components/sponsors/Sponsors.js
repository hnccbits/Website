import { useEffect, useRef } from 'react';
import SponsorsData from '../../lib/data/SponsorsData';
import BottomGlitter from '../StyledText/BottomGlitter';
import Styles from './sponsors.module.css';

const Sponsors = () => {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    });

    return () => window.removeEventListener('scroll', null);
  }, []);
  return (
    <section ref={ref} className="container-70 my-16 py-16 fadeonscroll-h">
      <BottomGlitter text="Our Sponsors" />
      <div className={Styles.sponsorsContainer}>
        {SponsorsData.map((src, index) => {
          return (
            <div className={Styles.images} key={String(index)}>
              <div className="z-20">
                <img width="100%" height="100%" src={src} alt="Sponsors" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
