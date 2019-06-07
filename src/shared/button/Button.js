import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({
  children,
  flat = true,
  fullWidth = false,
  className,
  icon,
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames('waves-effect', {
        [styles.fullWidth]: fullWidth,
        'cyan-text text-darken-2 btn-flat waves-teal': flat,
        cyan: !flat,
        [className]: className
      })}
    >
      {icon && <i className='material-icons left'>{icon}</i>}
      {text}
    </button>
  );
};

Button.propTypes = {
  flat: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string
};

export default Button;
