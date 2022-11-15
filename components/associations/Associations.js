import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Styles from './association.module.css';
import BottomGlitter from '../StyledText/BottomGlitter';

function Associations() {
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
                  alt="Google Developers Student Clubs, BIT Sindri"
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
                  alt="GeeksForGeeks Student Chapter, BIT Sindri"
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
                  alt="Codechef Student Chapter, BIT Sindri"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={Styles.associationContentContainer}>
          <Content id="gdsc">
            <h2>Google Developer Student Club, BIT Sindri</h2>
            <p>
              Developer Student Club BITS is inspired by the Google
              Developers&apos; Family. The motive is to create a local ecosystem
              of Developers in and around the Campus. And having fun doing it.
            </p>
          </Content>
          <Content id="gfg">
            <h2>GeeksforGeeks Student Chapter, BIT Sindri</h2>
            <p>
              GeeksforGeeks Student Chapters are university based community
              chapters for students interested in Computer Science and other
              core technical competencies. By joining a GeeksforGeeks Student
              Chapter, students grow their knowledge in a peer-to-peer learning
              environment and build effective and optimized solutions for local
              businesses and their community.
            </p>
          </Content>
          <Content id="codechef">
            <h2>Codechef Chapter, BIT Sindri</h2>
            <p>
              CodeChef BIT Sindri Chapter, want to enhance the coding culture in
              our college and promote competitive programming. We want to
              encourage more and more students to deep dive into the field of
              competitive programming not just for the sake of getting placed in
              a product based company but to take up competitive programming for
              the fun of it.
            </p>
          </Content>
        </div>
      </div>
    </section>
  );
}

export default Associations;

function Content({ id = '', className = '', children }) {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
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
}
