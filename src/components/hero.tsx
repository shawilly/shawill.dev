import localFont from "next/font/local";
import { Footer } from "./footer";
import { Button } from "./ui/button";
import { CodeBlock } from "./code-block";
import { ModeToggle } from "./mode-toggle";

const picnic = localFont({ src: "../app/fonts/PicNic-Regular.woff2" });

export async function Hero() {
  return (
    <>
      <h1 className={`${picnic.className} antialiased font-bold text-5xl`}>
        shawilly
      </h1>
      <ModeToggle />

      <div className="bg-[#eff1f5] dark:bg-[#0a0a0a] p-9 rounded-lg">
        <CodeBlock />
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Button>Contact me</Button>

        <Button variant="secondary">Learn more</Button>
        {/* <a */}
        {/*   className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" */}
        {/*   href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */}
        {/*   target="_blank" */}
        {/*   rel="noopener noreferrer" */}
        {/* > */}
        {/*   Contact me */}
        {/* </a> */}
        {/* <a */}
        {/*   className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" */}
        {/*   href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */}
        {/*   target="_blank" */}
        {/*   rel="noopener noreferrer" */}
        {/* > */}
        {/*   Learn more */}
        {/* </a> */}
      </div>
      <Footer />
    </>
  );
}
