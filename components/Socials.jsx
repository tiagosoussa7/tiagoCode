import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/tiagosoussa7" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/tiago-italo-desenvolvedor/",
  },
];

export default function Socials({}) {
  return (
    <div className="flex gap-2">
      {social.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className="w-7 h-7 rounded-[6px] flex justify-center border-2 border-accent text-accent items-center hover:bg-accent hover:border-primary hover:text-primary transition-all duration-500"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
