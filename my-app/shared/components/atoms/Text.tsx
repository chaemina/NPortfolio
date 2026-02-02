interface Props {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return (
    <p className={`leading-[1.3] md:leading-[1.4] text-[16px] 2xl:text-[18px] ${className ?? ""}`}>
      {children}
    </p>
  );
};

export default Text;
