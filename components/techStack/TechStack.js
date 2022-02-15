import { useEffect, useRef } from 'react';
import Styles from './tech-stack.module.css';

function TechStack() {
  return (
    <section className={`${Styles.techStack}`}>
      <div className="container-70">
        <Design />
        <Development />
        <Code />
      </div>
    </section>
  );
}

export default TechStack;

function Design() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Design.</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Establishing the right visual connection with your customers and users
          by creating eye-catching and memorable designs as well as meaningful
          user experience.
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Websites and Platform</h2>
            <p>
              We design projects of different complexity and size. No matter if
              it is a simple single-page website or a complex admin panel with
              numerous dashboards - we make it visually pleasing, consistent,
              and user-friendly.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Mobile Applications</h2>
            <p>
              We don’t simply design beautiful interfaces but craft them in
              accordance with each platforms’ guidelines to make the use of our
              app intuitive.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Branding</h2>
            <p>
              We identify our brand by developing a logo, identity, , any
              mockups, and souvenir projects.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Design Concept</h2>
            <p>
              We’ll make a design concept for a site or mobile application to
              attract our audience and make our awesome project even more
              awesome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Development() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Develop.</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Implementing our project with scalable architecture design, modern
          technology, and with the industry level workflow system.
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Website</h2>
            <p>
              We create web projects tailored exclusively with industry scales,
              be it a landing page, a complex web app to automate our processes
              or a high-load platform with sound backend architecture.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Native/Hybrid Apps</h2>
            <p>
              We build custom Android mobile apps using Java(Kotlin) and
              multiple cross platform (IoS and Andorid) mobile apps using React
              Native and Flutter.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>A.I./M.L.</h2>
            <p>
              We focus on developing and strengthening systems thinking,
              problem-solving, analysis, design, research, teamwork and
              readiness for lifelong learning in areas of Artificial
              Intelligence, Machine Learning, and Deep-Learning.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Open Source</h2>
            <p>
              Our mission is to create an environment where the benefits of open
              development enable students to collaborate and explore beyond the
              classroom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Code() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Code.</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Being Coding Club of a technical institution, we do pretty much
          everything and anything related to coding. Coding events, Workshops,
          Hackathons (48 hours non stop coding), contests are just to name a
          few. We believe in coding our problems away.
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Competitve Coding</h2>
            <p>
              Competitive programming is a mind sport usually held over the
              Internet or a local network, involving participants trying to
              program according to provided specifications. Contestants are
              referred to as sport programmers.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>DSA</h2>
            <p>
              Data structure and Algorithm (DSA) is applied in all disciplines
              of software development. DSA is the building block of the software
              development process. It is one of the most important section for
              placments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
