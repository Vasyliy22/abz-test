import { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement | ReactElement[],
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container