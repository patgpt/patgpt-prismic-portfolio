// Header.tsx

import LogoTemp from "@/components/logo";
import { createClient } from "@/prismicio";
import Navbar from "./Navbar";

export default async function Header() {
  const client = createClient();
  const response = await client.getSingle("settings");
  return (
    <div>
      <Navbar />
    </div>
  );
}
