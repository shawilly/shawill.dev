import "dotenv/config";

import { z } from "zod";

/**
 * Define the schema as an object with all of the env variables and their types
 * Keep alphabetically sorted
 */
const envSchema = z.object({
  CAPTCHA_SECRET_KEY: z.coerce.string().min(1),
  CAPTCHA_SITE_KEY: z.coerce.string().min(1),
  EMAIL_JS_PUBLIC_KEY: z.coerce.string().min(1),
  EMAIL_JS_SERVICE_ID: z.coerce.string().min(1),
  EMAIL_JS_TEMPLATE_ID: z.coerce.string().min(1),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

/**
 * Validate `process.env` against our schema and return the result
 */
export const processEnv = envSchema.parse({
  CAPTCHA_SECRET_KEY: process.env.CAPTCHA_SECRET_KEY,
  CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
  EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
  NODE_ENV: process.env.NODE_ENV,
});
