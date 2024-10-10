// logo.tsx

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LogoTemp() {
  return (
    <Link 
    title='Link to Home'
    href='/'>
    <Image 
    className='rounded-full'
    src={'/logo.png'} width={100} height={100} alt='logo'/>
    <span className='sr-only'>Link to homes</span>
    </Link>
  )
}
