"use client";

import { getCodeBlockHtml } from "@/lib/hero/get-code-block-html";
import { cn } from "@/lib/utils";
import { Code, Info, Loader } from "lucide-react";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { Button } from "../ui/button";

export function CodeBlock(): JSX.Element {
  const { theme } = useTheme();

  const [codeBlockHtml, setCodeBlockHtml] = useState<string>();
  const [showCode, setShowCode] = useState(true);

  useLayoutEffect(() => {
    const setCodeBlockTheme = async (): Promise<void> => {
      const { darkCodeBlockHtml, lightCodeBlockHtml } =
        await getCodeBlockHtml();

      setCodeBlockHtml(
        theme === "dark" ? darkCodeBlockHtml : lightCodeBlockHtml,
      );
    };

    setCodeBlockTheme();
  }, [theme]);

  if (!codeBlockHtml) {
    return <Loader />;
  }

  return (
    <div
      className={cn(
        "px-9 pb-9 z-10 border-2  rounded-lg max-w-[360px] min-h-[500px]",
        showCode ?
          "border-ponokai-orange dark:border-ponokai-diagnostics-infoBorder dark:bg-ponokai-background bg-[#eff1f5]"
        : "border-ponokai-diagnostics-okBorder bg-ponokai-diagnostics-okBackground text-ponokai-diagnostics-okForeground",
      )}
    >
      <div className="flex justify-end items-start w-full mt-2">
        <Button
          className="rounded-full"
          variant={showCode ? "info" : "ok"}
          size="icon"
          tooltip={{
            label:
              showCode ? "Press to translate this nerdy stuff." : "Show code.",
            side: "top",
          }}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ?
            <Info
              className={cn(
                "w-[1.2rem] h-[1.2rem] justify-center items-center transition-transform ease-in-out duration-500",
                !showCode ? "rotate-90 scale-0" : "rotate-0 scale-100",
              )}
            />
          : <Code
              className={cn(
                "w-[1.2rem] h-[1.2rem]  transition-transform ease-in-out duration-500",
                showCode ? "rotate-90 scale-0" : "rotate-0 scale-100",
              )}
            />
          }
        </Button>
      </div>
      <div className="flex justify-center items-center">
        {showCode ?
          <div
            dangerouslySetInnerHTML={{
              __html: codeBlockHtml,
            }}
          />
        : <p className="text-xl text-ponokai-diagnostics-okForeground bg-ponokai-diagnostics-okBackground">
            ±4 years as a full time full-stack engineer, contributing to open
            source, and over-configuring my terminal.
          </p>
        }
      </div>
    </div>
  );
}
