import LogoTemp from "@/components/logo"
import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"


export default async function Footer() {
  const client =   createClient()
  const response = await client.getSingle('settings')
  return (
    <div>
      <h1>{response.data.site_title}</h1>
      <LogoTemp/>
      <nav>
        <ul>
          
            {response.data.navigation.map((navItem) => (
              <li key={navItem.link.text}>
                <PrismicNextLink field={navItem.link}>{navItem.label}</PrismicNextLink>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}
