import React from 'react';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  className = '',
}) => {
  const baseClasses = 'custom-btn';
  const sizeClasses = {
    small: 'custom-btn--small',
    medium: 'custom-btn--medium',
    large: 'custom-btn--large',
  };
  const variantClasses = {
    primary: 'custom-btn--primary',
    secondary: 'custom-btn--secondary',
    outline: 'custom-btn--outline',
  };

  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'custom-btn--full-width' : '',
    disabled ? 'custom-btn--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;