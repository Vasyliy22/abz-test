import { ReactElement } from 'react';
import './styles.scss';

const Header = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <header className='header'>{children}</header>
  )
}

export default Header;
