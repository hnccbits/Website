import Styles from './Glitter.module.css';

/**
 *
 * @param {String} text
 * Pass the text
 * @returns {JSX.Element}
 * Its returns the styled texted with glittering bottom border
 */
const BottomGlitter = ({ text }) => {
  return (
    <div className={Styles.heading}>
      <h1 className={Styles.headingText}>{text}</h1>
      <span />
      <span />
    </div>
  );
};

export default BottomGlitter;
