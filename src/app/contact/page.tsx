import { BasePage } from "@/components/base-page";
import { ContactForm } from "@/components/contact-form";
import { Computer } from "@/components/computer";

export default async function Contact(): Promise<JSX.Element> {
  return (
    <BasePage>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto bg-black-100 p-8 rounded-2xl">
        <div className="flex flex-col space-y-4">
          <p className="sm:text-[18px] text-[14px] text-slate-500 uppercase tracking-wider">
            Let&apos;s talk
          </p>
          <h3 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h3>
          <ContactForm />
        </div>
        <div className="xl:flex-1 mr-8 h-auto w-[350px] justify-center items-center">
          <Computer />
        </div>
      </div>
    </BasePage>
  );
}
