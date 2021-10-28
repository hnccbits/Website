import { useRef } from 'react';
import Styles from './Button.module.css';

const Button = ({ className, children, ...otherProps }) => {
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
      className={`${Styles.rippleButton} ${className}`}
      {...otherProps}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;
