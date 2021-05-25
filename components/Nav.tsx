import React from "react";

import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
};

export default Nav;
