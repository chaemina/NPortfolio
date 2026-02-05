interface Props {
  children: React.ReactNode;
  className?: string;
}

const LargeText = ({ children, className }: Props) => {
  return (
    <span className={`font-light text-[25px] lg:text-[40px] 2xl:text-[48px] leading-[1.3] lg:leading-[1.4]  ${className ?? ""}`}>
      {children}
    </span>
  );
};

export default LargeText;
