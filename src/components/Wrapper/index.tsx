import { ReactNode} from 'react';

const Wrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Wrapper;