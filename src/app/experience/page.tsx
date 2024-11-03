import { BasePage } from "@/components/base-page";
import { ExperienceTimeline } from "@/components/experience/timeline";
import { Separator } from "@/components/ui/separator";

export default async function Experience(): Promise<JSX.Element> {
  return (
    <BasePage className="p-6 md:p-8 lg:p-10 dark:bg-gray-900 min-h-screen flex flex-col">
      <div className="flex flex-col w-auto">
        <p className="text-[14px] sm:text-[18px] dark:text-ponokai-dimmed1 text-ponokai-background uppercase tracking-wider">
          What I&apos;ve done so far
        </p>
        <h3 className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] font-black text-ponokai-diagnostics-errorForeground dark:text-ponokai-red mb-6">
          Experience.
        </h3>
        <Separator className="my-4" />
        <ExperienceTimeline />
      </div>
    </BasePage>
  );
}
