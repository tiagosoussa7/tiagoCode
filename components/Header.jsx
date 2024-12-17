import Link from "next/link";
import Nav from "./Nav";
import Mobile from "./Mobile";
import Socials from "./Socials";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-quartenary md:text-4xl text-3xl ">
        Tiago <span className="text-accent">ITalo</span>_
      </h1>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Logo />

        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Nav />
          <Socials />
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  );
}
