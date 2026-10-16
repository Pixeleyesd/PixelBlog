function Footer({ margin }: { margin?: boolean }) {
  return (
    <footer
      className={`${!margin && "mt-15"} border-t-2 border-[#1f2d3d] bg-[lightblue] flex flex-col items-center py-15 gap-y-5 text-[#1f2d3d] text-sm`}
    >
      <div className="flex gap-x-5">
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/Pixeleyesd"
            className="font-bold hover:underline"
            target="_blank"
          >
            Pixeleyesd
          </a>
          &nbsp;(credit to <a href="https://github.com/tonymac129" className="font-bold hover:underline" target="_blank">tonymac129</a> for the <a href="https://github.com/tonymac129/next-blog" className="font-bold hover:underline" target="_blank">original design</a>)
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
          href="https://stardance.hackclub.com/missions/blog/guide"
          className="font-bold hover:underline"
          target="_blank"
        >
          Mission guide
        </a>
        ·
        <a
          href="https://github.com/Pixeleyesd/PixelBlog"
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