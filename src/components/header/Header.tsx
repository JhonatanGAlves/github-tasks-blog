import Link from "next/link";
import Image from "next/image";

import bgHeader from "../../../public/bg-header.svg";
import logoHeader from "../../assets/logo-header.svg";

export default function Header() {
  return (
    <header className={`relative w-full h-[18.5rem]`}>
      <Image
        className="-z-10"
        src={bgHeader}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <Link
        className="absolute top-[35%] left-1/2 -translate-y-1/2 -translate-x-1/2"
        href={"/"}
      >
        <Image
          src={logoHeader}
          alt="An image with an arrow to the right and an underline and just below it written GITHUB BLOG"
        />
      </Link>
    </header>
  );
}
