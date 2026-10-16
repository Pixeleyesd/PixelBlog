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
  const btnStyles = `border-2 border-[#1f2d3d] cursor-pointer px-3 font-bold py-1.5 w-fit ${styles}
        ${
          primary
            ? "bg-[#0088ff] text-black hover:bg-[#0077ee]"
            : "bg-[lightblue] text-black hover:bg-[#aee2e2]"
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