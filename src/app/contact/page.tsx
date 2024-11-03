import { BasePage } from "@/components/base-page";
import { ContactForm } from "@/components/contact/contact-form";
import { Computer } from "@/components/three/computer";
import { HeroLinks } from "@/components/hero/hero-links";
import { StarsCanvas } from "@/components/three/stars";

export default async function Contact(): Promise<JSX.Element> {
  return (
    <BasePage className="grid grid-cols-1 m-auto lg:grid-cols-2 gap-20 min-h-screen max-w-full mx-24 p-8 rounded-2xl">
      <div className="flex flex-col p-16">
        <p className="text-[14px] sm:text-[18px] dark:text-ponokai-dimmed1 text-ponokai-background uppercase tracking-wider">
          Let&apos;s talk
        </p>
        <h3 className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] font-black text-ponokai-diagnostics-errorForeground dark:text-ponokai-red">
          Contact.
        </h3>
        <ContactForm />
        <p className="text-[18px] font-black text-ponokai-dimmed1 py-8 uppercase tracking-wider">
          OR
        </p>
        <HeroLinks />
      </div>
      <div className="flex border-2 border-ponokai-green border-double rounded-xl items-center justify-center">
        <div className="relative rounded-xl grow h-full overflow-hidden z-0">
          <Computer />
          <StarsCanvas />
        </div>
      </div>
    </BasePage>
  );
}
