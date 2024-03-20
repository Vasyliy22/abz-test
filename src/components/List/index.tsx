import { ReactElement } from 'react';
import './styles.scss';

const List = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <ul className='list'>{children}</ul>
  )
}

export default List;