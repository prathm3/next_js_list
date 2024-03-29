import React from "react";
import Link from "next/link";
import Image from 'next/image'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={77}/>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/listing">
        <a>Listings</a>
      </Link>
    </nav>
  );
}

export default Navbar;
