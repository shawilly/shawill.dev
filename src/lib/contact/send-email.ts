"use server";

import { contactFormSchema } from "@/components/contact/contact-form";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { z } from "zod";
import { processEnv } from "../env";

export async function sendEmail({
  name,
  email,
  message,
}: z.infer<typeof contactFormSchema>): Promise<{ ok: boolean }> {
  let response: EmailJSResponseStatus;

  try {
    response = await emailjs.send(
      processEnv.EMAIL_JS_SERVICE_ID,
      processEnv.EMAIL_JS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      { publicKey: processEnv.EMAIL_JS_PUBLIC_KEY },
    );
  } catch (error) {
    throw new Error(
      "Failed to send the message. Please try again. " +
        (error as Error).message,
    );
  }

  if (response.status === 200) {
    throw new Error(
      `Failed to send the message (${response.status}). Please try again.`,
    );
  }

  return { ok: true };
}
