import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

/**
 * @param {Number} ICON_SIZE
 * It contains the size for the social media icon.
 */
const ICON_SIZE = 36;

/**
 * SocialsBar
 * @returns {JSX.Element}
 * It contains Facebook, Instagram, Github and LinkedIn links
 *
 * Properties -
 * position: fixed
 * bottom: 0
 * left: 0
 * min-height: 15%
 *
 * at screen width < 500px
 * display: none
 */

const SocialsBar = () => {
  return (
    <section className={Styles.socialsBar}>
      <a href="www.google.com">
        <FaFacebook className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a href="www.google.com">
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a href="www.google.com">
        <FaGithub className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a href="www.google.com">
        <FaLinkedin className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
};

export default SocialsBar;
