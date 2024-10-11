import LogoTemp from "@/components/Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();
  const response = await client.getSingle("settings");
  return (
    <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <div>
        <h1>{response.data.site_title}</h1>
        <LogoTemp />
      </div>
      <nav>
        <ul>
          {response.data.navigation.map((navItem, index) => (
            <li key={index}>
              <PrismicNextLink key={index} field={navItem.link}>
                {navItem.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
