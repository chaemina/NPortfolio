interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`p-[16px] md:p-[24px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
