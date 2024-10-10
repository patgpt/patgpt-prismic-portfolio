// logo.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoTemp() {
  return (
    <Link title="Link to Home" href="/">
      <Image
        className="rounded-full"
        src={"/logo-dark.png"}
        width={140}
        height={140}
        alt="logo"
      />
      <span className="sr-only">Link to homes</span>
    </Link>
  );
}
