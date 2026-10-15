function Footer({ margin }: { margin?: boolean }) {
  return (
    <footer
      className={`${!margin && "mt-15"} border-t-2 border-zinc-700 flex flex-col items-center py-15 gap-y-5 text-zinc-300 text-sm`}
    >
      <div className="flex gap-x-5">
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/tonymac129"
            className="font-bold hover:underline"
            target="_blank"
          >
            tonymac129
          </a>
        </div>
        ·
        <div>
          Built for Hack Club{" "}
          <a
            href="https://stardance.hackclub.com"
            className="font-bold hover:underline"
            target="_blank"
          >
            Stardance
          </a>
        </div>
      </div>
      <div className="flex gap-x-5">
        <a
          href="https://stardance.hackclub.com"
          className="font-bold hover:underline"
          target="_blank"
        >
          Mission guide
        </a>
        ·
        <a
          href="https://github.com/tonymac129/next-blog"
          className="font-bold hover:underline"
          target="_blank"
        >
          Source code
        </a>
      </div>
    </footer>
  );
}

export default Footer;
