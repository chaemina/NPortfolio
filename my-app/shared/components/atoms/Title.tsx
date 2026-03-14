interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return (
    <span className={`leading-[1.6] md:leading-[1.8] whitespace-pre-line text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] ${className ?? ""}`}>
      {children}
    </span>
  );
};

export default Title;
