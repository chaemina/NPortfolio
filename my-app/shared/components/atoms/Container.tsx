interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`p-[20px] md:p-[28px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
