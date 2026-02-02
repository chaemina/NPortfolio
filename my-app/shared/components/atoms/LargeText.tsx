interface Props {
  children: React.ReactNode;
  className?: string;
}

const LargeText = ({ children, className }: Props) => {
  return (
    <span className={`font-thin text-[25px] lg:text-[43px] 2xl:text-[48px] leading-[1.3] lg:leading-[1.4]  ${className ?? ""}`}>
      {children}
    </span>
  );
};

export default LargeText;
