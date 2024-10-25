import Image from "next/image";
import Link from "next/link";

export function HeroLinks(): JSX.Element {
  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-start">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/shawilly"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://github.githubassets.com/assets/mona-loading-dark-7701a7b97370.gif"
          alt="File icon"
          width={36}
          height={36}
        />
        Github
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://ponokai.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://ponokai.vercel.app/_next/static/media/ponokai-logo-with-icon.d3929159.svg"
          alt="Window icon"
          className="bg-ponokai-background p-4 rounded-lg dark:bg-transparent "
          width={120}
          height={120}
        />
        →
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/shanebarrywilliams/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/Chinese-LI-Bug.svg.original.svg"
          alt="Globe icon"
          width={60}
          height={60}
        />
        →
      </Link>
    </div>
  );
}
