import { FC } from 'react';
import './styles.scss';

type Props = {
  children: string,
  href?: string,
}

const Link: FC<Props> = ({ children, href }) => {
  return (
    <a className='link' href={href}>{children}</a>
  )
}

export default Link;
