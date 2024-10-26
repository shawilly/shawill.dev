import { BasePage } from "@/components/base-page";
import { ContactForm } from "@/components/contact-form";
import { Computer } from "@/components/three/computer";
import { HeroLinks } from "@/components/hero-links";
import { StarsCanvas } from "@/components/three/stars";

export default async function Contact(): Promise<JSX.Element> {
  return (
    <BasePage>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-20 h-auto w-auto p-8 rounded-2xl">
        <div className="flex flex-col">
          <p className="text-[14px] sm:text-[18px] text-slate-500 uppercase tracking-wider">
            Let&apos;s talk
          </p>
          <h3 className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] font-black text-ponokai-diagnostics-errorForeground dark:text-ponokai-red">
            Contact.
          </h3>
          <ContactForm />
          <p className="text-[18px] font-black text-slate-500 py-8 uppercase tracking-wider">
            OR
          </p>
          <HeroLinks />
        </div>
        <div className="flex-grow border-2 border-ponokai-green border-double rounded-xl">
          <div className="relative rounded-xl grow h-full overflow-hidden z-0">
            <Computer />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BasePage>
  );
}
