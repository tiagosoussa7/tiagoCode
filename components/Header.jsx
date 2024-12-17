import Link from "next/link";
import Nav from "./Nav";
import Mobile from "./Mobile";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-secondary text-4xl">
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
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <div>redes socials</div>
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  );
}
