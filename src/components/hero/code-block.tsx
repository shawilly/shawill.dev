"use client";
import { getCodeBlockHtml } from "@/lib/hero/get-code-block-html";
import { Loader } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function CodeBlock(): JSX.Element {
  const { theme } = useTheme();

  const [codeBlockHtml, setCodeBlockHtml] = useState<string>();

  useEffect(() => {
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
      dangerouslySetInnerHTML={{
        __html: codeBlockHtml,
      }}
    />
  );
}
