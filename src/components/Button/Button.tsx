import React, { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
  className?: string;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
};

const Button: React.FC<ButtonProps> = ({
  className, icon, children, onClick, value, type, form,
}) => (
  <button
    type={type}
    form={form}
    value={value}
    onClick={onClick}
    className={classnames(className, styles.Button)}
  >
    {children}
    {icon}
  </button>
);

export default React.memo(Button);
