export default function Banner() {
  return (
    <div className="flex flex-col w-full gap-5">
      <img 
        src={'/images/CONNECT.svg'} 
        className="block  w-screen" 
      />
      <img 
        src={'/images/EVERYONE.svg'} 
        className="block md:hidden w-full" 
      />
    </div>
  );
}
