import { ReactElement, ReactNode } from 'react';

const Label = ({ children, htmlFor, className }: {
  children: ReactElement | ReactElement[] | string | ReactNode,
  htmlFor: string,
  className?: string,
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>{children}</label>
  )
}

export default Label;
