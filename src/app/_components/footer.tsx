import { PicNic } from "@/fonts";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer z-10 border border-l-transparent border-r-transparent border-t-[#33353F] text-slate-600">
      <div className="container flex items-center justify-between gap-4 p-12">
        <div className="flex items-center gap-4">
          <Link
            href="https://shawilly.dev"
            className="flex transform items-center transition-transform hover:scale-110 hover:text-pgreen"
            target="_blank"
          >
            <p className="mr-1">
              crafted by{"   "}
              <span className={`${PicNic.className} mr-1 text-2xl`}>
                shawilly
              </span>
            </p>
            <VscGithub className="md-block hidden" size="1rem" />
          </Link>
        </div>
        Copyright © All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
