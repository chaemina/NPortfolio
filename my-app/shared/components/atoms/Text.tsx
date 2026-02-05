interface Props {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return (
    <p className={`leading-[1.5] md:leading-[1.6] text-[16px] md:text-[20px]  ${className ?? ""}`}>
      {children}
    </p>
  );
};

export default Text;
