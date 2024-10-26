import localFont from "next/font/local";
import Link from "next/link";

export const PicNic = localFont({ src: "../fonts/PicNic-Regular.woff2" });

const Footer = (): JSX.Element => {
  return (
    <footer className="footer overflow-clip flex flex-col items-center pt-8 justify-center border-t border-x-transparent text-ponokai-background">
      <Link
        href="https://shawilly.dev"
        className="flex transform items-center transition-transform hover:scale-110 hover:text-ponokai-diagnostics-okForeground"
        target="_blank"
      >
        <p className="mr-1">
          crafted with ❤️ by{" "}
          <span className={`${PicNic.className} mr-1 text-2xl`}>shawilly</span>
        </p>
      </Link>
      <span>Copyright &copy; 2024 Shawilly. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
