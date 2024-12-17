"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { name: "home", path: "/" },
  { name: "sobre", path: "/about" },
  { name: "projetos", path: "/project" },
  { name: "contato", path: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "hidden"
            } hover:text-accent hover:border-b-[1px] hover:border-accent transition-all duration-300`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
