"use client";

import Link from "next/link";

interface BtnProps {
  text: string;
  href?: string;
  onclick?: () => void;
  styles?: string;
  primary?: boolean;
  submit?: boolean;
}

function Btn({ text, href, onclick, styles, primary, submit }: BtnProps) {
  const btnStyles = `border-2 rounded cursor-pointer px-3 font-bold py-1.5 w-fit ${styles}
        ${
          primary
            ? "bg-white border-white text-zinc-950 hover:bg-zinc-300 hover:border-zinc-300"
            : "border-zinc-700 text-zinc-300 hover:bg-zinc-900"
        }`;

  return href ? (
    <Link href={href} className={btnStyles}>
      {text}
    </Link>
  ) : (
    <button
      type={submit ? "submit" : "button"}
      onClick={onclick}
      className={btnStyles}
    >
      {text}
    </button>
  );
}

export default Btn;
