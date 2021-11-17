import { useEffect, useRef } from 'react';
import Styles from './Button.module.css';

/**
 * Button
 * @param {JSX.Element} Button
 * Its is the default button type for the website. This button have a ripple effect on hover
 */

const Button = ({ className, color, children, ...otherProps }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.style.setProperty('--x', `50%`);
    ref.current.style.setProperty('--y', `50%`);
  }, []);

  /**
   * @param {MouseEvent<HTMLDivElement, MouseEvent>} e
   * Returns the mouse over event parameters
   */
  const handleRipple = (e) => {
    /**
     * @param {Number} x It represents the postion in the x-axis that is position according to the width of the screen.
     */
    const x = e.clientX - ref.current.getBoundingClientRect().left;
    /**
     * @param {Number} y It represents the postion in the y-axis that is position according to the height of the screen.
     */
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
};

export default Button;
