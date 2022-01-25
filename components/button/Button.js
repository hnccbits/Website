import { useEffect, useRef } from 'react';
import Styles from './Button.module.css';

function Button({ className, color, children, ...otherProps }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.setProperty('--x', `50%`);
    ref.current.style.setProperty('--y', `50%`);
  }, []);
  const handleRipple = (e) => {
    const x = e.clientX - ref.current.getBoundingClientRect().left;
    const y = e.clientY - ref.current.getBoundingClientRect().top;

    ref.current.style.setProperty('--x', `${x}px`);
    ref.current.style.setProperty('--y', `${y}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={(e) => handleRipple(e)}
      className={`${Styles.rippleButton} ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Button;
