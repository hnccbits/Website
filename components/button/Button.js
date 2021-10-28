import { useRef } from 'react';
import Styles from './Button.module.css';

const Button = ({ className, color, children, ...otherProps }) => {
  const ref = useRef();
  const handleRipple = (e) => {
    const x = e.clientX - ref.current.offsetLeft;
    const y = e.clientY - ref.current.offsetTop;
    ref.current.style.setProperty('--x', `${x}px`);
    ref.current.style.setProperty('--y', `${y}px`);
  };
  return (
    <div
      ref={ref}
      onMouseEnter={(e) => handleRipple(e)}
      className={` ${className} ${Styles.rippleButton}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
