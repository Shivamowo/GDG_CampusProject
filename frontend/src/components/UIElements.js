import React from 'react';
import './UIElements.css';

export const Button = ({ children, onClick, className }) => (
  <button className={`ui-button ${className}`} onClick={onClick}>
    {children}
  </button>
);

export const InputField = ({ type = 'text', placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="ui-input"
  />
);

export const Card = ({ title, content, footer }) => (
  <div className="ui-card">
    <h3 className="ui-card-title">{title}</h3>
    <div className="ui-card-content">{content}</div>
    {footer && <div className="ui-card-footer">{footer}</div>}
  </div>
);

export const Modal = ({ isOpen, onClose, children }) => (
  isOpen ? (
    <div className="ui-modal">
      <div className="ui-modal-content">
        <span className="ui-modal-close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  ) : null
);