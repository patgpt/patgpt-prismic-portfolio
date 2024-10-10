// Header.tsx

import LogoTemp from '@/components/logo'
import { createClient } from '@/prismicio'
 
import React from 'react'

export default async function Header() {
    const client =   createClient()
    const response = await client.getSingle('settings')
  return (
    <div><LogoTemp/></div>
  )
}
