import React from "react";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={60} />
      </div>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/ninjas">
        <a>ninjas</a>
      </Link>
    </nav>
  );
};

export default Nav;
