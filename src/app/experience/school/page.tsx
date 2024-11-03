import { BasePage } from "@/components/base-page";

export default async function School(): Promise<JSX.Element> {
  return (
    <BasePage>
      <p className="text-ponokai-dimmed3 dark:text-ponokai-dimmed1 text-xl text-center mx-auto max-w-4xl mt-10">
        I like to offer pro bono software development.
      </p>
    </BasePage>
  );
}
