import { rubik300, rubik500 } from "@/fonts";
import Link from "next/link";
import { IntroTyped } from "./intro-typed";
import Logo from "./logo";
import Socials from "./socials";

const Navbar = (): JSX.Element => {
  return (
    <div
      className={`${rubik500.className} fixed left-0 top-0 float-left mr-[2%] grid h-full max-w-[500px] grid-rows-5 overflow-auto py-[4%] pl-[5%] pr-[3%]`}
    >
      <Logo />
      <div className="pb-[60px] pr-[40px]">
        <span className={`${rubik300.className} text-md my-12`}>
          <IntroTyped />
        </span>
        <div className="mt-12 flex flex-grow flex-col items-start gap-8 pb-[60px] text-xl text-slate-700">
          <Link
            href="/"
            className="transform transition-transform hover:scale-110 hover:text-porange"
          >
            Home
          </Link>
          <Link
            href="/animation"
            className="transform transition-transform hover:scale-110 hover:text-pyellow"
          >
            Animation
          </Link>
          <Link
            href="/personal-work"
            className="transform transition-transform hover:scale-110 hover:text-ppurple"
          >
            Personal Work
          </Link>
          <Link
            href="/about"
            className="transform transition-transform hover:scale-110 hover:text-pgreen"
          >
            Contact
          </Link>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Navbar;
