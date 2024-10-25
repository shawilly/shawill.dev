import { BasePage } from "@/components/base-page";
import { CodeBlock } from "@/components/code-block";
import { HeroLinks } from "@/components/hero-links";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const picnic = localFont({ src: "../fonts/PicNic-Regular.woff2" });

export default async function Home(): Promise<JSX.Element> {
  return (
    <BasePage>
      <div className="flex-1 justify-center items-center">
        <div className="flex flex-col space-y-4 mb-4">
          <h1
            className={cn(
              picnic.className,
              "antialiased font-bold text-ponokai-blue text-5xl",
            )}
          >
            shawilly
          </h1>

          <p className="text-[14px] text-d text-ponokai-dimmed1 uppercase tracking-wider">
            Experienced Software Engineer
          </p>
        </div>

        <div className="bg-[#eff1f5] dark:bg-[#0a0a0a] p-9 rounded-lg">
          <CodeBlock />
        </div>
      </div>
    </BasePage>
  );
}
