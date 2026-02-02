interface Props {
  children: React.ReactNode;
  className?: string;
}

const Caption = ({ children, className }: Props) => {
  return (
    <div className={`leading-[1.5] text-[12px] lg:text-[14px] 2xl:text-[16px] ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Caption;
