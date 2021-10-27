import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SocialsBar from '../socialsbar/SocialsBar';

const Screen = ({ children }) => {
  return (
    <main id="overlayScreen" className="h-full relative">
      <Navbar />
      <SocialsBar />
      <>{children}</>
      <Footer />
    </main>
  );
};

export default Screen;
