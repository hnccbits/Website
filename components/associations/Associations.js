import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Styles from './association.module.css';
import BottomGlitter from '../StyledText/BottomGlitter';

const Associations = () => {
  return (
    <section className="container-70">
      <div className="my-12 mb-16 sm:my-6 sm:mb-10">
        <BottomGlitter text="Our Associations" />
      </div>
      <div className={Styles.associationContainer}>
        <div className={Styles.associationMenuContainer}>
          <div className={Styles.associationMenu}>
            <div className={Styles.associationMenuItem}>
              <a href="#gdsc">
                <Image
                  className={Styles.associationImage}
                  height="100%"
                  width="100%"
                  src="/sponsors/gdsc.png"
                />
              </a>
            </div>
            <div className={Styles.associationMenuItem}>
              <a href="#gfg">
                <Image
                  className={Styles.associationImage}
                  height="100%"
                  width="100%"
                  src="/sponsors/gfg.png"
                />
              </a>
            </div>
            <div className={Styles.associationMenuItem}>
              <a href="#codechef">
                <Image
                  className={Styles.associationImage}
                  height="100%"
                  width="100%"
                  src="/sponsors/codechef.jpg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={Styles.associationContentContainer}>
          <Content id="gdsc">
            <h2>Google Developer Student Club, BIT Sindri</h2>
            <p>
              Commodo mollit laborum do aute deserunt in culpa sit. Lorem
              excepteur enim culpa aliqua consequat. Enim aliqua excepteur sint
              aliquip voluptate exercitation ullamco ea aliqua esse sit
              deserunt. Proident sit fugiat minim cupidatat ad do id Lorem.
            </p>
          </Content>
          <Content id="gfg">
            <h2>Google Developer Student Club, BIT Sindri</h2>
            <p>
              Commodo mollit laborum do aute deserunt in culpa sit. Lorem
              excepteur enim culpa aliqua consequat. Enim aliqua excepteur sint
              aliquip voluptate exercitation ullamco ea aliqua esse sit
              deserunt. Proident sit fugiat minim cupidatat ad do id Lorem.
            </p>
          </Content>
          <Content id="codechef">
            <h2>Google Developer Student Club, BIT Sindri</h2>
            <p>
              Commodo mollit laborum do aute deserunt in culpa sit. Lorem
              excepteur enim culpa aliqua consequat. Enim aliqua excepteur sint
              aliquip voluptate exercitation ullamco ea aliqua esse sit
              deserunt. Proident sit fugiat minim cupidatat ad do id Lorem.
            </p>
          </Content>
        </div>
      </div>
    </section>
  );
};

export default Associations;

const Content = ({ id = '', className = '', children }) => {
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
    <div
      ref={ref}
      id={id}
      className={`${Styles.associationContent} fadeonscroll ${className}`}
    >
      {children}
    </div>
  );
};
