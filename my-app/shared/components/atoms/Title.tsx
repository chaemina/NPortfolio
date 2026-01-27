interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <span className="text-[18px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]">
      {children}
    </span>
  );
};

export default Title;
