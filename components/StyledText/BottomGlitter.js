import Styles from './Glitter.module.css';

function BottomGlitter({ text }) {
  return (
    <div className={Styles.heading}>
      <h1 className={Styles.headingText}>{text}</h1>
      <span />
      <span />
    </div>
  );
}

export default BottomGlitter;
