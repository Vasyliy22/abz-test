import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode,
  className?: string,
  id?: string,
}

const Section: FC<Props> = ({ children, className, id }) => {
  return (
    <section id={id} className={className}>{children}</section>
  )
}

export default Section;