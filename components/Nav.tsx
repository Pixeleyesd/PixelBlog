import { initAuth } from "@/lib/auth";
import { headers } from "next/headers";
import Btn from "./Btn";
import Link from "next/link";
import Image from "next/image";

const linkStyles = "text-[#1f2d3d] hover:text-[#2f2f2f] hover:font-semibold py-2";

async function Nav() {
  const auth = await initAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <nav className="border-b-2 border-[#1f2d3d] px-30 py-3 sticky top-0 z-10 bg-[#0088ff]">
      <div className="relative flex gap-x-10 items-center w-full">
        <Link
          href="/"
          className={linkStyles + " text-xl font-bold mr-5 text-black!"}
        >
          Home
        </Link>
        <Link href="/blogs" className={linkStyles}>
          Blogs
        </Link>
        <Link href="/post" className={linkStyles}>
          Post
        </Link>
        <Link href="/about" className={linkStyles}>
          About
        </Link>
        {session ? (
          <Image
            src="/user.svg"
            alt="Avatar"
            width={40}
            height={40}
            className="absolute right-0"
            title={`Logged in as ${session.user.name}`}
          />
        ) : (
          <Btn
            text="Sign in"
            href="/signin"
            styles="absolute right-0"
            primary
          />
        )}
      </div>
    </nav>
  );
}

export default Nav;