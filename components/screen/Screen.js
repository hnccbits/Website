import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SocialsBar from '../socialsbar/SocialsBar';

import Styles from './Screen.module.css';

const Screen = ({ children }) => {
  return (
    <main id="overlayScreen" className="h-full relative">
      <Navbar />
      <SocialsBar />
      <section className={`${Styles.screen} overflow-x-hidden container-70`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Screen;
