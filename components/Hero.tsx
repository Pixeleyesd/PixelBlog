interface HeroProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function Hero({ title, description, children }: HeroProps) {
  return (
    <div className="py-10 flex flex-col gap-y-7 items-center bg-[lightblue] m-10 p-20">
      <h1 className="text-center text-[#1f2d3d] font-bold text-[56.7px]">{title}</h1>
      <p className="text-[#1f2d3d] text-center w-[75%]">{description}</p>
      {children}
    </div>
  );
}

export default Hero;