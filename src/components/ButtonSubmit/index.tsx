import { FC, MouseEventHandler } from 'react';
import './styles.scss';

type Props = {
  children: string,
  style?: React.CSSProperties,
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: "submit" | "reset" | "button",
  disabled?: boolean,
}

export const ButtonSubmit: FC<Props> = ({ children, onClick, type, disabled }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className='button-submit'>{children}</button>
  )
}

export default ButtonSubmit;