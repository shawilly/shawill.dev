import { BasePage } from "@/components/base-page";
import { Hero } from "@/components/hero";

export default async function Home(): Promise<JSX.Element> {
  return (
    <BasePage>
      <Hero />
    </BasePage>
  );
}
