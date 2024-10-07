import { BasePage } from "@/components/base-page";
import { CodeBlock } from "@/components/code-block";
import { DarkModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const picnic = localFont({ src: "../fonts/PicNic-Regular.woff2" });

export default async function Home(): Promise<JSX.Element> {
  return (
    <BasePage>
      <h1 className={cn(picnic.className, "antialiased font-bold text-5xl")}>
        shawilly
      </h1>
      <DarkModeToggle />

      <div className="bg-[#eff1f5] dark:bg-[#0a0a0a] p-9 rounded-lg">
        <CodeBlock />
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Button>Contact me</Button>
        <Button variant="secondary">Learn more</Button>
      </div>
    </BasePage>
  );
}
