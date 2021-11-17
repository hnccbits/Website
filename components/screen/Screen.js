import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SocialsBar from '../socialsbar/SocialsBar';

/**
 *
 * @param {any} children
 * Pass the page content as child
 * @returns {JSX.Element}
 * It wraps the content of each page. All the page should be wraped with this element.
 *
 * Feature
 * - It provides the navbar, footer and social media links container.
 *
 * Propperties are
 * - display: relative
 * - height: 100%
 */

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
