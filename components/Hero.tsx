interface HeroProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function Hero({ title, description, children }: HeroProps) {
  return (
    <div className="py-10 flex flex-col gap-y-7 items-center">
      <h1 className="text-center text-white font-bold text-3xl">{title}</h1>
      <p className="text-zinc-300 text-center w-[75%]">{description}</p>
      {children}
    </div>
  );
}

export default Hero;
