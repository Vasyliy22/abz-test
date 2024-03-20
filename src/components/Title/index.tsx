import { FC } from 'react';
import './styles.scss';

type Props = {
  children: string,
  style?: React.CSSProperties,
}

const Title: FC<Props> = ({ children, style }) => {
  return (
    <h1 style={style} className='title'>{children}</h1>
  )
}

export default Title;