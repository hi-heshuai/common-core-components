import React from 'react';
import './styles.css';

export interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Optional footer content
   */
  footer?: React.ReactNode;
  /**
   * Optional className
   */
  className?: string;
}

/**
 * Card component for displaying content in a contained area
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  className = '',
  ...props
}) => {
  return (
    <div className={`card ${className}`} {...props}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card; 