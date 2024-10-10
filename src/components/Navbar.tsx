"use client";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import LogoTemp from "./logo";
import ButtonLink from "./ButtonLink";




type NavbarPropa = {
  settings: Content.SettingsDocument
}


export default function Navbar({ settings }: NavbarPropa) {
  return <nav className="md-:px-6 px-4 py-4 md:py-6" aria-label="Main">
    <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-md text-white md:flex-row md:items-center">
      <LogoTemp />
      <ul className="flex gap-6">
        {settings.data.navigation.map((navItem, index) => {
          if (!navItem.cta_button) {
            return <li key={index}>
              <PrismicNextLink
                className="inline-flex min-h-11 items-center"
                key={navItem.label} field={navItem.link}>
                {navItem.label}
              </PrismicNextLink>
            </li>
          } else {
            return <li key={index}>
              <ButtonLink

                key={navItem.label} field={navItem.link} >
                {navItem.label}
              </ButtonLink>
            </li>
          }

        })}
      </ul>
    </div>
  </nav>
}
