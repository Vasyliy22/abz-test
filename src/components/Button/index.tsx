import React, { FC, MouseEventHandler } from 'react';
import './styles.scss';

type Props = {
  children: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: "submit" | "reset" | "button",
  disabled?: boolean,
}

export const Button: FC<Props> = ({ children, onClick, type, disabled }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className='button'>{children}</button>
  )
}
