const Description = ({ children, className }: { children: string, className: string }) => {
  return (
    <p className={className}>{children}</p>
  )
}

export default Description;
