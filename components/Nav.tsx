import React from "react";

import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
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
