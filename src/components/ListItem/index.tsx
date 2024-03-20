import { ReactElement } from 'react';
import './styles.scss';

const ListItem = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <li className='list__item'>{children}</li>
  )
}

export default ListItem;