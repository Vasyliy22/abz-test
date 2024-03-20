import './styles.scss';
const ErrorImage = ({ children }: { children: string } ) => {
  return (
    <p className='error'>
      {children}
    </p>
  )
}

export default ErrorImage