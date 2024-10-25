import { BasePage } from "@/components/base-page";
import { CodeBlock } from "@/components/code-block";
import { HeroLinks } from "@/components/hero-links";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const picnic = localFont({ src: "../fonts/PicNic-Regular.woff2" });

export default async function Home(): Promise<JSX.Element> {
  return (
    <BasePage>
      <h1 className={cn(picnic.className, "antialiased font-bold text-5xl")}>
        shawilly
      </h1>

      <div className="bg-[#eff1f5] dark:bg-[#0a0a0a] p-9 rounded-lg">
        <CodeBlock />
      </div>
      <HeroLinks />
    </BasePage>
  );
}
