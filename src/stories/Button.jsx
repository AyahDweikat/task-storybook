import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, color, size, label, ...props }) => {
  const mode = `storybook-button--${variant}`;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{backgroundColor:`${variant == 'primary'? `${color}`:'transparent'}`, color :`${variant == 'primary'? 'white' : `${color}`}`, borderColor:`${variant == 'secondary'? `${color}` : 'transparent' }`}}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * What color to use
   */
  color: PropTypes.oneOf(['red', 'green', 'blue']),
  // color: PropTypes.string,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: null,
  onClick: undefined,
};
