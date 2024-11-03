"use server";
import fs from "fs";
import { codeToHtml, createHighlighter } from "shiki";

export async function getCodeBlockHtml(): Promise<{
  darkCodeBlockHtml: string;
  lightCodeBlockHtml: string;
}> {
  const myTheme = JSON.parse(
    fs.readFileSync("./src/lib/hero/ponokai.json", "utf8"),
  );
  const code = fs.readFileSync("./src/lib/hero/about-code.ts", "utf8");

  const highlighter = await createHighlighter({
    themes: [myTheme],
    langs: ["typescript"],
  });

  const darkCodeBlockHtml = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "ponokai",
  });

  const lightCodeBlockHtml = await codeToHtml(code, {
    lang: "typescript",
    theme: "catppuccin-latte",
  });

  return { darkCodeBlockHtml, lightCodeBlockHtml };
}
