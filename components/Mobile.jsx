"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";

//components-desktop menu
import { links } from "./Nav";
import { Logo } from "./Header";

export default function Mobile() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-16 mb-14 text-center">
          <Logo />
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
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
      </SheetContent>
    </Sheet>
  );
}
