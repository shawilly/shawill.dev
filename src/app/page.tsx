import { BasePage } from "@/components/base-page";
import { Circles } from "@/components/hero/circles";
import { CodeBlock } from "@/components/hero/code-block";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const picnic = localFont({ src: "../fonts/PicNic-Regular.woff2" });

export default async function Hero() {
  return (
    <BasePage className="flex flex-col m-auto lg:px-48 max-w-full flex-1">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="flex flex-col justify-center my-auto xl:min-h-screen w-full h-full">
          <h1
            className={cn(
              picnic.className,
              "antialiased font-bold dark:text-ponokai-green text-ponokai-background text-center text-5xl",
            )}
          >
            shawilly
          </h1>
          <p className="text-[14px] text-ponokai-dimmed3 dark:text-ponokai-dimmed1 uppercase text-center tracking-wider">
            Experienced Software Engineer
          </p>
          <p className="text-ponokai-dimmed3 dark:text-ponokai-dimmed1/80 text-sm text-center mb-10">
            web, mobile, server
          </p>
          <div className="flex flex-col gap-6 mx-auto z-10">
            <p className="text-[14px] sm:text-[18px] text-ponokai-dimmed3 dark:text-ponokai-blue uppercase tracking-wider">
              Get to know me.
            </p>
            <Button
              variant="ok"
              animation="hover-grow"
              tooltip={{ label: "What I do.", side: "top" }}
            >
              Experience
            </Button>
            <Button
              variant="info"
              animation="hover-grow"
              tooltip={{ label: "How I give back.", side: "top" }}
            >
              Community
            </Button>
            <Button
              variant="warning"
              animation="hover-grow"
              tooltip={{ label: "Talk to me.", side: "top" }}
            >
              Contact
            </Button>
          </div>
          <Circles className="relative" radius={6} />
        </div>

        <div className="pt-10 xl:pt-0 w-full h-full xl:m-auto xl:p-auto xl:min-h-screen justify-center items-center flex">
          <Circles
            className="absolute top-3/4 left-3/4 xl:top-1/4 xl:left-3/4 transition-transform duration-1000"
            radius={6}
          />
          <CodeBlock />
        </div>
      </div>
    </BasePage>
  );
}
