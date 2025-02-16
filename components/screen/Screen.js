import { useEffect } from 'react';
import ParticleBackground from '../../assets/christmas_theme/ParticlesBg';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SocialsBar from '../socialsbar/SocialsBar';

function Screen({ children }) {
  useEffect(() => {
    const callback = (e) => {
      document.querySelector('.cursor').style.top = `${e.clientY}px`;
      document.querySelector('.cursor').style.left = `${e.clientX}px`;
    };
    document
      .getElementById('overlayScreen')
      .addEventListener('mousemove', callback);
    return () =>
      document
        .getElementById('overlayScreen')
        .removeEventListener('mousemove', callback);
  }, []);

  return (
    <main id="overlayScreen" className="h-full relative">
      <div className="cursor" />
      {/* For Christmas Theme */}
      <ParticleBackground />
      <Navbar />
      <SocialsBar />
      {children}
      <Footer />
    </main>
  );
}

export default Screen;
