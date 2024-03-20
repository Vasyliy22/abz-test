import React, { FC, ReactElement } from 'react';
import './styles.scss';

type Props = {
  children: ReactElement | ReactElement[],
}

const Main: FC<Props> = ({ children }) => {
  return (
    <main className='main'>{children}</main>
  )
}

export default Main;
