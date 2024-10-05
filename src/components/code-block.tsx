import { createHighlighter } from "shiki";
import fs from "fs";

export default async function CodeBlock() {
  const myTheme = JSON.parse(
    fs.readFileSync("./src/app/lib/ponokai.json", "utf8"),
  );
  const code = fs.readFileSync("./src/app/lib/about-code-block.ts", "utf8");

  const highlighter = await createHighlighter({
    themes: [myTheme],
    langs: ["typescript"],
  });

  const html = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "ponokai",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
