import "./Flex.scss";
export const VFlex = ({ children, className }: any) => {
  return <div className={`vflex ${className}`}> {children}</div>;
};
export const HFlex = ({ children, className, ...rest }: any) => {
  return (
    <div className={`hflex ${className}`} {...rest}>
      {" "}
      {children}
    </div>
  );
};
