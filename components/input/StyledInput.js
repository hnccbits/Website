import { useRef, useState } from 'react';
import Styles from './styled-input.module.css';

/**
 * Styled Input
 * @param {Object}
 * It contains Input Label, Name, Classname for Input Styling and Properties of Input.
 * @returns {JSX.Element}
 * Return Customized Input element
 * - Label translates upwards on focus.
 */

const StyledInput = ({ label, name = '', className = '', ...otherProps }) => {
  const ref = useRef();
  const [transform, setTransform] = useState(false);
  return (
    <div className={Styles.inputContainer}>
      <label
        ref={ref}
        className={`${Styles.label} ${transform ? Styles.transform : ''}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        autoComplete="new-password"
        onFocus={() => setTransform(true)}
        onBlur={(e) => e.target.value === '' && setTransform(false)}
        className={`${Styles.input} ${className}`}
        name={name}
        {...otherProps}
      />
    </div>
  );
};

export default StyledInput;
