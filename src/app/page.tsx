import { BasePage } from "@/components/base-page";
import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
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
              "antialiased font-bold dark:text-ponokai-blue text-ponokai-diagnostics-okBackground text-5xl",
            )}
          >
            shawilly
          </h1>

          <p className="text-[14px] text-ponokai-diagnostics-okForeground dark:text-ponokai-dimmed1 uppercase tracking-wider">
            Experienced Software Engineer
          </p>
        </div>

        <div className="bg-[#eff1f5] dark:bg-[#0a0a0a] p-9 rounded-lg">
          <CodeBlock />
        </div>
        <div className="inline-flex flex-1 flex-grow justify-center items-stretch w-full flex-row gap-6 mt-4">
          <Button
            variant="default"
            className="w-[40%] bg-ponokai-background text-ponokai-text hover:text-ponokai-background"
          >
            Experience
          </Button>
          <Button variant="outline" className="w-[40%]">
            Contact
          </Button>
        </div>
      </div>
    </BasePage>
  );
}
