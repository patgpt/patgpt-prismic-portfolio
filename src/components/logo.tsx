// logo.tsx

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoTemp: React.FC = () => {
  return (
    <Link title="Link to Home" href="/" aria-label="Link to Home">
      <Image
        className="rounded-full"
        src="/logo-dark.png"
        width={140}
        height={140}
        alt="logo"
      />
      <span className="sr-only">Link to home</span>
    </Link>
  )
}

export default React.memo(LogoTemp)
