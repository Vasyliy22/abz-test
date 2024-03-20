import React, { FormEventHandler, ReactElement } from 'react';

const Form = (
  {
    children,
    onSubmit,
    className,
  }: {
    children: ReactElement | ReactElement[],
    onSubmit?: FormEventHandler<HTMLFormElement>,
    className: string
  }) => {
  return (
    <form className={className} onSubmit={onSubmit} action="POST">{children}</form>
  )
}

export default Form